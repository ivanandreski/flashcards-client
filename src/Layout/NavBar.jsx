import React from "react";
import { Link } from "react-router-dom";
import NavBarUserDropdown from "../Components/NavBarUserDropdown";
import RouteNames from "../Utils/RouteNames";
import useGetUser from "../Hooks/useGetUser";

const NavBar = () => {
  const user = useGetUser();
  return (
    <nav className="w-full flex flex-wrap items-center justify-between mx-auto p-4 mt-0.5 bg-gradient-to-r from-sky-500 to-fuchsia-800">
      <ul className="flex">
        {/* <li className="text-2xl font-semibold px-2 text-white">
          <Link to={RouteNames.Home}>Logo</Link>
        </li> */}
        <li className="text-2xl font-semibold px-2 text-white">
          <Link to={RouteNames.Home}>Flashcards</Link>
        </li>
        {user?.role == "ADMIN" && (
          <li className="text-2xl font-semibold px-2 text-white">
            <Link to={RouteNames.Admin}>Admin</Link>
          </li>
        )}
        {user?.role == "TEACHER" && (
          <li className="text-2xl font-semibold px-2 text-white">
            <Link to={RouteNames.Teacher}>Teacher</Link>
          </li>
        )}
      </ul>
      <ul>
        <li>
          <NavBarUserDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
