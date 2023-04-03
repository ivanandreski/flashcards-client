import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonDarkGray from "../Components/ButtonDarkGray";
import FormTextField from "../Components/FormTextField";
import RouteNames from "../Utils/RouteNames";
import useGetUser from "../Hooks/useGetUser";

const Login = () => {
  const navigate = useNavigate();
  const getUser = useGetUser();
  if (getUser) {
    navigate(RouteNames.Home);
  }

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.value;
    const password = passwordRef.value;

    localStorage.setItem("user", true);
    navigate(RouteNames.Home);
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
        Log in
      </h1>
      <h5
        className="
            mb-10
            text-xl text-center
            font-semibold
        "
      >
        Sign in to continue
      </h5>
      <form onSubmit={handleSubmit} className="w-2/4 mx-auto">
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
        <ButtonDarkGray color="gray">Login</ButtonDarkGray>
      </form>
    </div>
  );
};

export default Login;
