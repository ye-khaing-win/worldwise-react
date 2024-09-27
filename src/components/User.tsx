import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // if (!user) return null;

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <div className="shadow-lg absolute top-[4.2rem] right-[4.2rem] bg-dark-1 py-4 px-6 rounded-lg z-[999] text-base font-semibold flex items-center gap-6">
      <img
        className="rounded-full h-16"
        src={user?.avatar}
        alt={user?.name}
      />
      <span>Welcome, {user?.name}</span>
      <button
        className="bg-dark-2 rounded-lg border-none py-2 px-5 text-inherit text-xl font-bold uppercase cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default User;
