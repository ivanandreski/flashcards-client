import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import useGetUser from "../Hooks/useGetUser";
import ProfileSidebar from "./ProfileSidebar";

const ProfileLayout = () => {
  const getUser = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUser) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-[1920px] grid xs:max-lg:grid-cols-1 lg:grid-cols-4">
        <div className="xs:max-lg:hidden lg:block col-span-1">
          <ProfileSidebar />
        </div>
        <div className="xs:max-md:col-span-4 lg:col-span-3">
          <div className="w-full bg-gradient-to-r from-sky-500 to-fuchsia-800 p-1">
            <div className="min-h-96 bg-white">
              <div className="p-4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <div className="xs:max-lg:block col-span-4 hidden">
          <ProfileSidebar />
        </div>
      </main>
    </>
  );
};

export default ProfileLayout;
