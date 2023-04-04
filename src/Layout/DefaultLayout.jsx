import React from "react";
import { Outlet } from "react-router-dom";

import CoursesSidebar from "./CoursesSidebar";
import NavBar from "./NavBar";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-[1920px] grid xs:max-lg:grid-cols-1 lg:grid-cols-4">
        <div className="xs:max-lg:hidden lg:block col-span-1">
          <CoursesSidebar />
        </div>
        <div className="xs:max-md:col-span-4 lg:col-span-3">
          <div className="w-full bg-gradient-to-r from-sky-500 to-fuchsia-800 p-1">
            <div className="min-h-96 bg-white">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="xs:max-lg:block col-span-4 hidden">
          <CoursesSidebar />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
