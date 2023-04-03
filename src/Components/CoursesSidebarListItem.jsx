import React from "react";
import { Link } from "react-router-dom";
import RouteNames from "../Utils/RouteNames";

const CoursesSidebarListItem = ({ course }) => {
  return (
    <li className="font-semibold text-xl hover:text-2xl cursor-pointer hover:underline">
      <Link to={RouteNames.Course(course.id)}>{course.name}</Link>
    </li>
  );
};

export default CoursesSidebarListItem;
