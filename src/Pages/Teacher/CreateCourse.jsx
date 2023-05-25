import React, { useRef, useState } from "react";
import FormTextField from "../../Components/FormTextField";
import axios from "../../axios/axios";
import ButtonDarkGray from "../../Components/ButtonDarkGray";
import useGetUser from "../../Hooks/useGetUser";

const CreateCourse = () => {
  const courseRef = useRef(null);
  const user = useGetUser();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    location.reload();

    const name = courseRef.current.value;

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .post(
        "flash-cards/course/create",
        {
          title: name,
        },
        config
      )
      .then((resp) => {
        setErrorMessage("");
        courseRef.current.value = "";
        location.reload();
      })
      .catch((error) => {
        console.log(error);
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
        Create course
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <FormTextField
          ref={courseRef}
          errorMessage={errorMessage}
          label="Course name"
          placeholder=""
        />
        <ButtonDarkGray color="gray">Submit</ButtonDarkGray>
      </form>
    </div>
  );
};

export default CreateCourse;
