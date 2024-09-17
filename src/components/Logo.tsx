import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="WorldWise logo"
        className="h-20"
      />
    </Link>
  );
}

export default Logo;
