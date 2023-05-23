import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FormTextField from "../../Components/FormTextField";
import axios from "../../axios/axios";
import ButtonDarkGray from "../../Components/ButtonDarkGray";
import useGetUser from "../../Hooks/useGetUser";
import Select from "react-select";

const AddStudentToCourse = () => {
  const user = useGetUser();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(-1);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("flash-cards/course", config)
      .then((resp) => {
        setCourses(resp.data);
        setCourse(resp.data[0]?.id || -1);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;

    axios
      .post(
        "admin/set-role",
        {
          email: email,
          role: role,
        },
        config
      )
      .then((resp) => {
        setErrorMessage("");
        emailRef.current.value = "";
        setRole(Roles.Roles[0]);
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
      });
  };

  return (
    <div className="border border-black p-10 mb-5">
      <h1
        className="
            mt-10 mb-5
            text-5xl text-center
            font-semibold
        "
      >
        Add student to course
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <FormTextField
          ref={emailRef}
          errorMessage={errorMessage}
          label="Student email"
          placeholder=""
        />
        <Select
          className="mb-5"
          options={courses.map((c) => {
            return {
              value: c.id,
              label: c.title,
            };
          })}
        />
        <ButtonDarkGray color="gray">Submit</ButtonDarkGray>
      </form>
    </div>
  );
};

export default AddStudentToCourse;
