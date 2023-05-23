import React, { useEffect, useState, useRef } from "react";
import FormTextField from "../../Components/FormTextField";
import axios from "../../axios/axios";
import ButtonDarkGray from "../../Components/ButtonDarkGray";
import useGetUser from "../../Hooks/useGetUser";
import Select from "react-select";

const CreateDeck = () => {
  const subjectRef = useRef(null);
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

    const name = subjectRef.current.value;

    if (course == -1) {
      setErrorMessage("Please select a course");
      return;
    }

    axios
      .post(
        `flash-cards/course/${course}/deck/create`,
        {
          title: name,
        },
        config
      )
      .then((resp) => {
        setErrorMessage("");
        subjectRef.current.value = "";
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
        Create deck
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <FormTextField
          ref={subjectRef}
          errorMessage={errorMessage}
          label="Deck name"
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

export default CreateDeck;
