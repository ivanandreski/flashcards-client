import React from "react";
import { Outlet } from "react-router-dom";

import CoursesSidebar from "./CoursesSidebar";
import NavBar from "./NavBar";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <main className="grid grid-cols-4">
        <div className="col-span-1">
          <CoursesSidebar />
        </div>
        <div className="col-span-3">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
