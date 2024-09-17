import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className="mt-[3rem] mb-[3rem]">
      <ul className="list-none flex bg-dark-2 rounded-[7px]">
        <li>
          <NavLink
            className="block text-inherit no-underline uppercase text-xl font-bold py-2 px-8 rounded-[5px] active:bg-dark-0"
            to="cities"
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block text-inherit no-underline uppercase text-xl font-bold py-2 px-8 rounded-[5px] active:bg-dark-0"
            to="countries"
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
