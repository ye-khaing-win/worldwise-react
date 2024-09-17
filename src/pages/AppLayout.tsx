import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  return (
    <div className="h-screen p-10 flex relative">
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
