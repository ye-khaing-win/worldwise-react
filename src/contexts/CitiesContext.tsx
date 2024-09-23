import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { City } from "../interfaces";

const BASE_URL = "http://localhost:9000";

interface CityContextType {
  cities: City[];
  isLoading: boolean;
}

interface CitiesProviderProps {
  children: ReactNode;
}

export const CitiesContext =
  createContext<CityContextType | null>(null);

export const CitiesProvider = ({
  children,
}: CitiesProviderProps) => {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(`${BASE_URL}/cities`);
        const data =
          (await res.json()) as unknown as City[];

        setCities(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
};
