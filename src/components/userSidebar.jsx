import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { FaChevronRight } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import newticket from "../assets/NewTicket.svg";
import twoticket from "../assets/Two Tickets.svg";
const UserSidebar = () => {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setThird] = useState(false);
  const handleclick = (cond) => {
    if (cond === "dash") {
      setfirst(true);
      setsecond(false);
      setThird(false);
    } else if (cond === "myt") {
      setfirst(false);
      setsecond(true);
      setThird(false);
    } else {
      setfirst(false);
      setsecond(false);
      setThird(true);
    }
  };
  return (
    <>
      <div className="px-2 md:w-56 bg-[#6A67674D] overflow-hidden min-h-[calc(100vh-64px)]">
        <div className="flex flex-col md:pl-8 pr-4 md:pr-0">
          <NavLink
            className={"flex items-center font-medium text-xl pt-8"}
            onClick={() => handleclick("dash")}
            to="/users/dashboard"
          >
            <FaChevronRight className={`${first ? "" : "text-transparent"}`} />
            <div className="flex justify-center items-center">
              <MdDashboard size={"1.7rem"} />
              <div className="md:block hidden">Dashboard</div>
            </div>
          </NavLink>
          <NavLink
            className={"flex items-center font-medium text-xl pt-8"}
            onClick={() => handleclick("nwt")}
            to="/users/newticket"
          >
            <FaChevronRight className={`${third ? "" : "text-transparent"}`} />
            <div className="flex justify-center items-center">
              <img src={newticket} alt="My SVG" />
              <div className="md:block hidden">New Ticket</div>
            </div>
          </NavLink>
          <NavLink
            className={"flex items-center font-medium text-xl pt-8"}
            onClick={() => handleclick("myt")}
            to="/users/myticket"
          >
            <FaChevronRight className={`${second ? "" : "text-transparent"}`} />
            <div className="flex justify-center items-center">
              <img src={twoticket} alt="My SVG" />
              <div className="md:block hidden">My Ticket</div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
