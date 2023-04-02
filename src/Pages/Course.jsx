import React from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();

  return <div>Course</div>;
};

export default Course;
