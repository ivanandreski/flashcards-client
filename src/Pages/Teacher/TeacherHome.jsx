import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetUser from "../../Hooks/useGetUser";
import RouteNames from "../../Utils/RouteNames";
import CreateCourse from "./CreateCourse";
import CreateSubject from "./CreateSubject";
import CreateFlashcard from "./CreateFlashcard";
import axios from "../../axios/axios";

const TeacherHome = () => {
  const user = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role != "TEACHER") {
      navigate(RouteNames.NoPermission);
    }
  });

  return (
    <div className="w-3/6 mx-auto p-10">
      <CreateCourse />
      <CreateSubject />
      <CreateFlashcard />
    </div>
  );
};

export default TeacherHome;
