// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import "react-datepicker/dist/react-datepicker.css";

const BASE_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

import { FormEvent, useEffect, useState } from "react";
import Row from "./Row";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { convertToEmoji } from "../utils/helpers";
import { City, CityData } from "../interfaces";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import { useCities } from "../hooks/useCities";
import classNames from "classnames";

const Form = () => {
  const { addCity, isLoading: isCityLoading } = useCities();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [lat, lng] = useUrlPosition();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCityData = async () => {
      if (!lat || !lng) return;
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `${BASE_URL}?latitude=${lat}&longitude=${lng}`
        );

        const data =
          (await res.json()) as unknown as CityData;

        if (data.city === "")
          throw new Error(
            "No city found.Click somewhere else."
          );

        setCityName(data.city || data.locality);
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        const error = err as Error;
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCityData();
  }, [lat, lng]);

  if (!lat || !lng) {
    return (
      <Message message="Start by clicking somewhere in the map!" />
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Message message={error} />;
  }

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity: City = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat: Number(lat),
        lng: Number(lng),
      },
    };

    await addCity(newCity);

    navigate("/app");
  };

  const formClasses = classNames(
    "bg-dark-2 rounded-lg py-8 px-12 w-full flex flex-col gap-8",
    { "opacity-30": isCityLoading }
  );

  return (
    <form className={formClasses} onSubmit={handleSubmit}>
      <Row>
        <label htmlFor="cityName">City name</label>
        <Input
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <span className="absolute right-4 top-[2.2rem] text-[2rem]">
          {emoji}
        </span>
      </Row>

      <Row>
        <label htmlFor="date">
          When did you go to {cityName}?
        </label>
        {/* <Input
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}
        <DatePicker
          className="w-full py-3 px-5 text-2xl border-none rounded-md bg-light-3 transition-all duration-200 focus:outline-none focus:bg-white text-dark-2"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </Row>

      <Row>
        <label htmlFor="notes">
          Notes about your trip to {cityName}
        </label>
        <Input
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Row>

      <div className="flex justify-between">
        <Button isLoading={isCityLoading} type="primary">
          Add
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          type="back"
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
};

export default Form;
