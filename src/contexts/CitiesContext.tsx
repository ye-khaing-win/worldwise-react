import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { City } from "../interfaces";

const BASE_URL = "http://localhost:9000";

enum ActionType {
  LOAD = "LOAD",
  GET_CITIES = "GET_CITIES",
  GET_CITY = "GET_CITY",
  ADD_CITY = "ADD_CITY",
  DELETE_CITY = "DELETE_CITY",
  REJECT = "REJECT",
}

interface LoadAction {
  type: ActionType.LOAD;
}

interface GetCitiesAction {
  type: ActionType.GET_CITIES;
  payload: City[];
}

interface RejectActions {
  type: ActionType.REJECT;
  payload: Error;
}

interface GetCityAction {
  type: ActionType.GET_CITY;
  payload: City;
}

interface AddCityAction {
  type: ActionType.ADD_CITY;
  payload: City;
}

interface DeleteCityAction {
  type: ActionType.DELETE_CITY;
  payload: string;
}

type Actions =
  | GetCitiesAction
  | LoadAction
  | RejectActions
  | GetCityAction
  | AddCityAction
  | DeleteCityAction;

interface CityContextProps {
  cities: City[];
  isLoading: boolean;
  currentCity: Partial<City>;
  getCity: (id: string) => Promise<void>;
  addCity: (newCity: City) => Promise<void>;
  deleteCity: (id: string) => Promise<void>;
}

interface CitiesProviderProps {
  children: ReactNode;
}

export const CitiesContext =
  createContext<CityContextProps | null>(null);

interface State {
  cities: City[];
  isLoading: boolean;
  currentCity: Partial<City>;
  error: Error | null;
}

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: null,
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionType.LOAD:
      return { ...state, isLoading: true };

    case ActionType.GET_CITIES:
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case ActionType.GET_CITY:
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case ActionType.ADD_CITY:
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };

    case ActionType.DELETE_CITY:
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(
          (city) => city.id !== action.payload
        ),
      };

    case ActionType.REJECT:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
};

export const CitiesProvider = ({
  children,
}: CitiesProviderProps) => {
  const [{ cities, isLoading, currentCity }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: ActionType.LOAD });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data =
          (await res.json()) as unknown as City[];

        dispatch({
          type: ActionType.GET_CITIES,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ActionType.REJECT,
          payload: error as Error,
        });
      }
    };

    fetchCities();
  }, []);

  const getCity = async (id: string) => {
    try {
      dispatch({ type: ActionType.LOAD });

      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = (await res.json()) as unknown as City;

      console.log(data);

      dispatch({
        type: ActionType.GET_CITY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.REJECT,
        payload: error as Error,
      });
    }
  };

  const addCity = async (newCity: City) => {
    try {
      dispatch({ type: ActionType.LOAD });

      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = (await res.json()) as unknown as City;

      dispatch({
        type: ActionType.ADD_CITY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.REJECT,
        payload: error as Error,
      });
    }
  };

  const deleteCity = async (id: string) => {
    try {
      dispatch({ type: ActionType.LOAD });

      fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({
        type: ActionType.DELETE_CITY,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: ActionType.REJECT,
        payload: error as Error,
      });
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
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
