import React from "react";
import ProfileMenus from "../Utils/ProfileMenus";
import ProfileMenuSidebarItem from "../Components/ProfileMenuSidebarItem";

const ProfileSidebar = () => {
  return (
    <div className="w-full bg-gradient-to-l from-sky-500 to-fuchsia-800 pl-1 pt-1 pb-1 xs:max-lg:pr-1">
      <div className="min-h-96 bg-white p-4">
        <ul>
          {ProfileMenus.Menus.map((name, i) => (
            <ProfileMenuSidebarItem key={i} name={name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
