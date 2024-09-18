import { useState } from "react";
import Row from "./Row";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [cityName, setCityName] = useState("");
  //   const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toString());
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  return (
    <form className="bg-dark-2 rounded-lg py-8 px-12 w-full flex flex-col gap-8">
      <Row>
        <label htmlFor="cityName">City name</label>
        <Input
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </Row>

      <Row>
        <label htmlFor="date">
          When did you go to {cityName}?
        </label>
        <Input
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
        <Button
          onClick={(e) => {
            e.preventDefault();
            // navigate("cities");
          }}
          type="primary"
        >
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
