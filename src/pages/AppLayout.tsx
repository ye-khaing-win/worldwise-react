import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

const AppLayout = () => {
  return (
    <div className="h-screen p-10 flex relative">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
