import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import DefaultCredentialsLayout from "./Layout/DefaultCredentialsLayout";

import DefaultLayout from "./Layout/DefaultLayout";
import Course from "./Pages/Course";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RouteNames from "./Utils/RouteNames";
import HomeLayout from "./Layout/HomeLayout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeLayout />} />
        <Route path={RouteNames.Home} element={<DefaultLayout />}>
          <Route path="blogs/:id" element={<Course />} />
        </Route>
        <Route path={RouteNames.Home} element={<DefaultCredentialsLayout />}>
          <Route path={RouteNames.Login} element={<Login />} />
          <Route path={RouteNames.Register} element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
