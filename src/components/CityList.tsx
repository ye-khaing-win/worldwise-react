import { City } from "../interfaces";
import CityItem from "./CityItem";
import Spinner from "./Spinner";

interface CityListProps {
  cities: City[];
  isLoading: boolean;
}

const CityList = (props: CityListProps) => {
  const { cities, isLoading } = props;

  if (isLoading) return <Spinner />;

  if (!cities.length) return <div></div>;

  return (
    <ul className="w-full h-[65vh] list-none overflow-y-scroll overflow-x-hidden flex flex-col gap-6 no-scrollbar">
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
