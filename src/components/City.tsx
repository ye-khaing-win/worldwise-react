import { useParams } from "react-router-dom";
import { useCities } from "../hooks/useCities";
import { useEffect } from "react";
import Row from "./Row";
import { formatDate } from "../utils/helpers";

type CityParams = {
  id: string;
};

const City = () => {
  const { id } = useParams<CityParams>();
  const { currentCity, getCity, isLoading } = useCities();

  useEffect(() => {
    getCity(Number(id));
  }, [id]);

  if (isLoading) return <div></div>;

  const { emoji, cityName, date, notes } = currentCity;

  return (
    <div className="py-8 px-12 max-h-[70%] bg-dark-2 rounded-md overflow-scroll w-full flex flex-col gap-8 no-scrollbar">
      <Row>
        <h6 className="uppercase text-lg font-black text-light-1">
          City name
        </h6>
        <h3 className="text-3xl flex items-center gap-4">
          <span className="text-5xl leading-none">
            {emoji}
          </span>{" "}
          {cityName}
        </h3>
      </Row>

      <Row>
        <h6 className="uppercase text-lg font-black text-light-1">
          You want to {cityName} on
        </h6>
        <p className="text-base">{formatDate(date)}</p>
      </Row>

      {notes && (
        <div>
          <h6 className="uppercase text-lg font-black text-light-1">
            Your notes
          </h6>
          <p className="text-base">{notes}</p>
        </div>
      )}

      <Row>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </Row>
    </div>
  );
};

export default City;
