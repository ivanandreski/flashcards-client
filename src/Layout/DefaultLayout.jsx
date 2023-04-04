import React from "react";
import { Outlet } from "react-router-dom";

import CoursesSidebar from "./CoursesSidebar";
import NavBar from "./NavBar";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <main className="grid sm:max-md:grid-cols-1 lg:max-2xl:grid-cols-4">
        <div className="hidden lg:max-2xl:col-span-1">
          <CoursesSidebar />
        </div>
        <div className="sm:max-md:col-span-4 lg:max-2xl:col-span-3">
          <Outlet />
        </div>
        <div className="sm:max-md::col-span-4 lg:max-2xl:hidden">
          <CoursesSidebar />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
