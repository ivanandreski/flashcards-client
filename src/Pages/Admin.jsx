import React, { useEffect, useRef, useState } from "react";
import FormTextField from "../Components/FormTextField";
import Roles from "../Utils/Roles";
import ButtonDarkGray from "../Components/ButtonDarkGray";
import axios from "../axios/axios";
import useGetUser from "../Hooks/useGetUser";
import { useNavigate } from "react-router-dom";
import RouteNames from "../Utils/RouteNames";

const Admin = () => {
  const user = useGetUser();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const [role, setRole] = useState(Roles.Roles[0]);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user?.role != "ADMIN") {
      navigate(RouteNames.NoPermission);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

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
    <div className="w-3/6 mx-auto border border-black p-10">
      <h1
        className="
            mt-10 mb-5
            text-5xl text-center
            font-semibold
        "
      >
        Change role of user
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <FormTextField
          ref={emailRef}
          errorMessage={errorMessage}
          label="Email"
          placeholder="user@email.com"
        />
        <div className="mb-3">
          <label className="block mb-2 uppercase font-medium text-black">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="
        border border-black
        text-gray-900 text-sm
        block w-full p-2.5
        "
          >
            {Roles.Roles.map((r, i) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-600">{errorMessage}.</p>
          )}
        </div>
        <ButtonDarkGray color="gray">Submit</ButtonDarkGray>
      </form>
    </div>
  );
};

export default Admin;
