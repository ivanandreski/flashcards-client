import React from "react";
import { Link } from "react-router-dom";
import NavBarUserDropdown from "../Components/NavBarUserDropdown";
import RouteNames from "../Utils/RouteNames";

const NavBar = () => {
  return (
    <nav className="w-full flex flex-wrap items-center justify-between mx-auto p-4 mt-0.5 bg-gradient-to-r from-sky-500 to-fuchsia-800">
      <ul className="flex">
        <li className="text-2xl font-semibold px-2 text-white">
          <Link to={RouteNames.Home}>Logo</Link>
        </li>
        <li className="text-2xl font-semibold px-2 text-white">
          <Link to={RouteNames.Home}>Flashcards</Link>
        </li>
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