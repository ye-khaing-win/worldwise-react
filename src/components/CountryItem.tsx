import { City } from "../interfaces";

interface CountryItemProps {
  city: City;
}

const CountryItem = (props: CountryItemProps) => {
  const { city } = props;

  return (
    <li className="flex flex-col items-center gap-1 text-3xl font-semibold bg-dark-2 rounded-lg py-4 px-8 border-l-4 border-l-brand-1">
      <span>{city.emoji}</span>
      <span>{city.country}</span>
    </li>
  );
};

export default CountryItem;
