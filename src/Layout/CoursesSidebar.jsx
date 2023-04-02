import React from "react";
import useFetchMyCourses from "../Hooks/Api/useFetchMyCourses";

const CoursesSidebar = () => {
  const { courses, loading, error } = useFetchMyCourses();

  return (
    <div>
      {courses.map((c, i) => (
        <p>
          {c.id}: {c.name}
        </p>
      ))}
    </div>
  );
};

export default CoursesSidebar;
