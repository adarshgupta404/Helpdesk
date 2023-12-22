import React, { useState } from "react";
import { FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [Clicked, setClicked] = useState(false);

  return (
    <div className="block h-16 bg-[#55D6C2]">
      <div className="flex justify-between items-center h-full">
        <div className="italic text-3xl font-semibold pl-4 text-white">
          Heldesk
        </div>
        <div className="flex justify-center items-center gap-3 pr-4">
          <button
            onClick={() => setClicked(!Clicked)}
            className="flex justify-center rounded-[10px] border-x-8 border-y-2 border-black"
          >
            <div
              className={`${
                Clicked ? "bg-black text-white" : ""
              } font-medium p-0.5 pl-1 pr-2`}
            >
              BM
            </div>
            <div
              className={`${
                Clicked ? "" : "bg-black text-white"
              } font-medium p-0.5 px-2`}
            >
              BI
            </div>
          </button>
          <div className="cursor-pointer ">
            <FaBell size={"1.5rem"} />
          </div>
          <button>
            <NavLink to="/users/profile">
              <FaUser size={"1.5rem"} />
            </NavLink>
          </button>

          <NavLink to="" className="">
            <FaSignOutAlt size={"1.5rem"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
