import React from "react";
import useFetchMyCourses from "../Hooks/Api/useFetchMyCourses";
import CoursesSidebarListItem from "../Components/CoursesSidebarListItem";

const CoursesSidebar = () => {
  const { courses } = useFetchMyCourses();

  return (
    <div className="w-full bg-gradient-to-l from-sky-500 to-fuchsia-800 pl-1 pt-1 pb-1 xs:max-lg:pr-1">
      <div className="min-h-96 bg-white p-4">
        <h5 className="font-semibold text-4xl mb-2">My Courses</h5>
        <ul>
          {courses.length > 0 ? (
            courses.map((c, i) => <CoursesSidebarListItem key={i} course={c} />)
          ) : (
            <li className="font-semibold text-xl">You have no courses</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CoursesSidebar;
