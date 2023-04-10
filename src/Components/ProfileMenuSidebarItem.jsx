import React from "react";
import { Link } from "react-router-dom";

import CaseConvertor from "../Utils/CaseConvertor";

const ProfileMenuSidebarItem = ({ name }) => {
  return (
    <li className="font-semibold text-xl hover:text-2xl cursor-pointer hover:underline">
      <Link to={"/profile/" + CaseConvertor.fromNormalToKebabCase(name)}>{name}</Link>
    </li>
  );
};

export default ProfileMenuSidebarItem;
