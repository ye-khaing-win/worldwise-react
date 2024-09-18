import {
  useParams,
  useSearchParams,
} from "react-router-dom";

type CityParams = {
  id: string;
};

const City = () => {
  const { id } = useParams<CityParams>();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <>
      <div>City : {id}</div>
      <div>
        Lat: {lat}, Lng: {lng}
      </div>
    </>
  );
};

export default City;
