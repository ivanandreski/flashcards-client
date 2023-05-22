import React from "react";
import useGetUser from "../../Hooks/useGetUser";

const Info = () => {
  const user = useGetUser();

  return (
    <div>
      <h1>User: {user.fullName}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Role: {user.role}</h1>
    </div>
  );
};

export default Info;
