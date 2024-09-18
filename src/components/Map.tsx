import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("form")}
      className="flex-1 h-full bg-dark-2 relative"
    >
      Map
    </div>
  );
};

export default Map;
