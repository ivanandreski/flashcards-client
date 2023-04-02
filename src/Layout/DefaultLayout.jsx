import React from "react";
import { Outlet } from "react-router-dom";

import useGetUser from "../Hooks/useGetUser";
import CoursesSidebar from "./CoursesSidebar";
import NavBar from "./NavBar";

const DefaultLayout = () => {
  const loggedIn = useGetUser();

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-4 gap-3">
          <div className="col-span-1">
            <CoursesSidebar />
          </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
