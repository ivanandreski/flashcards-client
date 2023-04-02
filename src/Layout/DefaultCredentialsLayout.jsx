import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const DefaultCredentialsLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultCredentialsLayout;
