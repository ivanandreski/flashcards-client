import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import DefaultCredentialsLayout from "./Layout/DefaultCredentialsLayout";

import DefaultLayout from "./Layout/DefaultLayout";
import Course from "./Pages/Course";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RouteNames from "./Utils/RouteNames";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Deck from "./Pages/Deck";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RouteNames.Home} element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="course/:id" element={<Course />} />
          <Route path="deck/:id" element={<Deck />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path={RouteNames.Home} element={<DefaultCredentialsLayout />}>
          <Route path={RouteNames.Login} element={<Login />} />
          <Route path={RouteNames.Register} element={<Register />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
