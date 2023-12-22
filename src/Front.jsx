import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Front = () => {
  return (
    <div className="flex flex-col h-[100dvh] justify-center items-center pl-4">
      <div className="w-96 flex justify-start flex-col">
        <NavLink to="/users" className={"flex gap-1 items-center"}>
          <span>
            <FaArrowRight />
          </span>
          Go to User Panel
        </NavLink>
        <NavLink to="/admin" className={"flex gap-1 items-center"}>
          <span>
            <FaArrowRight />
          </span>
          Go to Admin Panel
        </NavLink>
        <NavLink to="/operation" className={"flex gap-1 items-center"}>
          <span>
            <FaArrowRight />
          </span>
          Go to Operation Panel
        </NavLink>
      </div>
    </div>
  );
};

export default Front;
