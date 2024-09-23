import { useCities } from "../hooks/useCities";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";

const CountryList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const cities_deduplicated = cities.filter(
    (city, index) =>
      cities
        .map((city) => city.country)
        .indexOf(city.country) === index
  );

  return (
    <ul className="w-full h-[65vh] list-none overflow-y-scroll overflow-x-hidden grid grid-cols-1 content-start gap-7 no-scrollbar">
      {cities_deduplicated.map((city) => (
        <CountryItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CountryList;
