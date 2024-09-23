import { Link } from "react-router-dom";
import { City } from "../interfaces";
import { formatDate } from "../utils/helpers";

interface CityItemProps {
  city: City;
}

const CityItem = (props: CityItemProps) => {
  const { city } = props;
  const { emoji, cityName, date, id, position } = city;
  return (
    <li>
      <Link
        className="flex gap-6 items-center bg-dark-2 rounded-lg py-4 px-8 border-l-4 border-l-brand-2 cursor-pointer text-inherit"
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className="text-4xl">{emoji}</span>
        <h3 className="text-3xl font-semibold mr-auto">
          {cityName}
        </h3>
        <time className="text-2xl">
          ({formatDate(date)})
        </time>
        <button className="h-8 aspect-square rounded-[50%] border-none bg-dark-1 text-light-2 text-2xl font-semibold cursor-pointer transition-all duration-200 hover:bg-brand-1 hover:text-dark-1">
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
