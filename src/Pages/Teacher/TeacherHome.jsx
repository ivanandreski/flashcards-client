import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetUser from "../../Hooks/useGetUser";
import RouteNames from "../../Utils/RouteNames";
import CreateCourse from "./CreateCourse";
import CreateDeck from "./CreateDeck";
import CreateFlashcard from "./CreateFlashcard";
import axios from "../../axios/axios";
import AddStudentToCourse from "./AddStudentToCourse";

const TeacherHome = () => {
  const user = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role != "TEACHER") {
      navigate(RouteNames.NoPermission);
    }
  });

  return (
    <div className="p-10 grid grid-cols-2 gap-3">
      <CreateCourse />
      <CreateFlashcard />
      <CreateDeck />
      <AddStudentToCourse />
    </div>
  );
};

export default TeacherHome;
