import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const links = [
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Product",
    to: "/product",
  },
  {
    label: "Login",
    to: "/login",
  },
];

const PageNav = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <ul className="flex items-center gap-16">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              className="text-light-2 uppercase text-2xl font-medium"
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNav;
