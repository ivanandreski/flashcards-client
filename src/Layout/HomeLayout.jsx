import React from "react";

import CoursesSidebar from "./CoursesSidebar";
import HomeCarousel from "../Components/HomeCarousel";
import NavBar from "./NavBar";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <main className="grid grid-cols-4">
        <div className="col-span-1">
          <CoursesSidebar />
        </div>
        <div className="col-span-3">
          <HomeCarousel />
        </div>
      </main>
    </>
  );
};

export default HomeLayout;
