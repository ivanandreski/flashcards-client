import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGetUser from "../Hooks/useGetUser";
import useDropdownOutsideAlerter from "../Hooks/useDropdownOutsideAlerter";
import DropdownButton from "./DropdownButton";
import RouteNames from "../Utils/RouteNames";

const NavBarUserDropdown = ({ user }) => {
  const navigate = useNavigate();
  const loggedIn = useGetUser() != null;

  const [open, setOpen] = useState(false);

  const dropDownRef = useRef(null);
  const buttonRef = useRef(null);
  useDropdownOutsideAlerter(dropDownRef, buttonRef, setOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate(RouteNames.Home);
    location.reload();
  };

  return (
    <>
      <span ref={buttonRef}>
        <DropdownButton color="fuchsia" handleClick={handleClick}>
          <span className="text-xl">{user?.fullName || "User"}</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </DropdownButton>
      </span>
      {open && (
        <div
          ref={dropDownRef}
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {!loggedIn ? (
              <>
                <li className="w-full" onClick={handleClick}>
                  <Link
                    to={RouteNames.Login}
                    className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Login
                  </Link>
                </li>
                <li className="w-full" onClick={handleClick}>
                  <Link
                    to={RouteNames.Register}
                    className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li onClick={handleClick}>
                  <Link
                    to="profile/info"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                <li onClick={handleClick}>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Log out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBarUserDropdown;
