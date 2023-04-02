import React from "react";

import useGetUser from "../Hooks/useGetUser";
import CoursesSidebar from "./CoursesSidebar";
import HomeCarousel from "../Components/HomeCarousel";
import NavBar from "./NavBar";

const HomeLayout = () => {
  const loggedIn = useGetUser();

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-4 gap-3">
        <div className="col-span-4">
          <HomeCarousel />
        </div>
        {loggedIn && (
          <div className="col-span-1">
            <CoursesSidebar />
          </div>
        )}
      </main>
    </>
  );
};

export default HomeLayout;
