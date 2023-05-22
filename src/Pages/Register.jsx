import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonDarkGray from "../Components/ButtonDarkGray";
import FormTextField from "../Components/FormTextField";
import RouteNames from "../Utils/RouteNames";
import registerValidator from "../Validators/RegisterValidator";
import useGetUser from "../Hooks/useGetUser";
import axios from "../axios/axios";

const Register = () => {
  const navigate = useNavigate();
  const getUser = useGetUser();

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    if (getUser) {
      navigate(RouteNames.Home);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const messages = registerValidator(
      fullNameRef?.current?.value,
      emailRef?.current?.value,
      passwordRef?.current?.value,
      confirmPasswordRef?.current?.value
    );

    setErrorMessages(messages);
    if (Object.keys(messages).length == 0) {
      axios
        .post("user/register", {
          fullName: fullNameRef?.current?.value,
          email: emailRef?.current?.value,
          password: passwordRef?.current?.value,
        })
        .then((resp) => {
          localStorage.setItem("user", JSON.stringify(resp.data));
          navigate(RouteNames.Home);
        })
        .catch((error) => {
          console.log(error);
          // setErrorMessages("Something went wrong :(");
        });
    }
  };

  return (
    <div className="w-3/6 mx-auto">
      <h1
        className="
            mt-10 mb-5
            text-5xl text-center
            font-semibold
        "
      >
        Create a new Account
      </h1>
      <h5
        className="
            mb-10
            text-xl text-center
            font-semibold
        "
      >
        Already Registered?{"  "}
        <Link to={RouteNames.Login} className="hover:underline">
          Login
        </Link>
      </h5>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <FormTextField
          ref={fullNameRef}
          errorMessage={errorMessages.fullName}
          label="Full Name"
          placeholder="Full Name"
        />
        <FormTextField
          ref={emailRef}
          errorMessage={errorMessages.email}
          label="Email"
          placeholder="email@email.com"
        />
        <FormTextField
          ref={passwordRef}
          errorMessage={errorMessages.password}
          label="Password"
          placeholder="********"
          type="password"
        />
        <FormTextField
          ref={confirmPasswordRef}
          errorMessage={errorMessages.confirmPassword}
          label="Confirm Password"
          placeholder="********"
          type="password"
        />
        <ButtonDarkGray color="gray">Sign up</ButtonDarkGray>
      </form>
    </div>
  );
};

export default Register;
