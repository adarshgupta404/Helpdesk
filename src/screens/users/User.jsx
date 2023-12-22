// Users.js
import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Myticket from "./Myticket";
import Newticket from "./Newticket";
import UserSidebar from "../../components/userSidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Users = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-[calc(100dvh-64px)] overflow-auto md:overflow-none">
        <UserSidebar />
        <div className="h-[calc(100dvh-64px)] w-[100dvw] md:w-[calc(100dvw-224px)] flex flex-col justify-between overflow-hidden">
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Users;
