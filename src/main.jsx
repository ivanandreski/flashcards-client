import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import DefaultCredentialsLayout from "./Layout/DefaultCredentialsLayout";

import DefaultLayout from "./Layout/DefaultLayout";
import ProfileLayout from "./Layout/ProfileLayout";
import Course from "./Pages/Course";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RouteNames from "./Utils/RouteNames";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Deck from "./Pages/Deck";
import Info from "./Pages/Profile/Info";
import ChangePassword from "./Pages/Profile/ChangePassword";
import ChangeEmail from "./Pages/Profile/ChangeEmail";
import DeleteMyAccount from "./Pages/Profile/DeleteMyAccount";
import Admin from "./Pages/Admin";
import NoPermission from "./Pages/NoPermission";
import TeacherHome from "./Pages/Teacher/TeacherHome";
import StudentGrades from "./Pages/Teacher/StudentGrades";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RouteNames.Home} element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="course/:id" element={<Course />} />
          <Route path="deck/:id" element={<Deck />} />
        </Route>
        {/* <Route path={RouteNames.Home} element={<ProfileLayout />}>
          <Route path="profile" element={<Profile />} />
        </Route> */}
        <Route path={RouteNames.Home} element={<DefaultCredentialsLayout />}>
          <Route path={RouteNames.Login} element={<Login />} />
          <Route path={RouteNames.Register} element={<Register />} />
          <Route path={RouteNames.Admin} element={<Admin />} />
          <Route path={RouteNames.Teacher} element={<TeacherHome />} />
          <Route path={RouteNames.Grades} element={<StudentGrades />} />
          <Route path={RouteNames.NoPermission} element={<NoPermission />} />
        </Route>
        <Route path={RouteNames.profile} element={<ProfileLayout />}>
          <Route path={RouteNames.Info} element={<Info />} />
          <Route path={RouteNames.ChangePassword} element={<ChangePassword />} />
          <Route path={RouteNames.ChangeEmail} element={<ChangeEmail />} />
          <Route path={RouteNames.DeleteMyAccount} element={<DeleteMyAccount />} />
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
