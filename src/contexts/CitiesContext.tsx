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
  currentCity: Partial<City>;
  getCity: (id: number) => void;
  addCity: (newCity: City) => void;
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
  const [currentCity, setCurrentCity] = useState<
    Partial<City>
  >({});

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

  const getCity = async (id: number) => {
    try {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = (await res.json()) as unknown as City;

      console.log(`${BASE_URL}/cities/${id}`);

      setCurrentCity(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addCity = async (newCity: City) => {
    try {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = (await res.json()) as unknown as City;

      setCities([...cities, data]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        addCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
