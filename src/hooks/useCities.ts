import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export const useCities = () => {
  const context = useContext(CitiesContext);

  if (!context) {
    throw new Error(
      "Cities context cannot use outside of CityProvider!."
    );
  }

  return context;
};
