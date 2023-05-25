import React, { useEffect, useState, useRef } from "react";
import FormTextField from "../../Components/FormTextField";
import axios from "../../axios/axios";
import ButtonDarkGray from "../../Components/ButtonDarkGray";
import useGetUser from "../../Hooks/useGetUser";
import Select from "react-select";

const CreateFlashcard = () => {
  const questionRef = useRef(null);
  const answerRef = useRef(null);
  const user = useGetUser();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

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

    location.reload();
    // post placeholder
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
        Create flashcards
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <FormTextField
          ref={questionRef}
          errorMessage={errorMessage}
          label="Question name"
          placeholder=""
        />
        <FormTextField
          ref={answerRef}
          errorMessage={errorMessage}
          label="Answer name"
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
        <Select
          className="mb-5"
          options={[
            { label: "Deck 1", value: "0" },
            { label: "Deck 2", value: "0" },
            { label: "Deck 3", value: "0" },
          ]}
        />
        <ButtonDarkGray color="gray">Submit</ButtonDarkGray>
      </form>
    </div>
  );
};

export default CreateFlashcard;
