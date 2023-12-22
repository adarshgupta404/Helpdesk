import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import StarRatings from "react-star-ratings";
const Profile = () => {
  return (
    <div className="px-5 font-sanchez sm:px-14 lg:px-24 ">
      <div className="pt-5 text-3xl">User profile</div>
      <div className="h-[calc(100dvh-64px-48px-70px)]  mb-2 overflow-y-auto mt-5 bg-[#55D6C2AD]">
        <div className="md:flex p-8 gap-5">
          <div className="bg-white rounded-xl md:w-1/2 mb-4 shadow-md hover:shadow-lg hover:shadow-[#939292] transition-shadow duration-300 shadow-[#939292]">
            <div className="pr-2 pt-2">
              {" "}
              <NavLink to={"/users/edit"}>
                <PiNotePencilBold className="float-right" size={"1.5rem"} />
              </NavLink>
            </div>
            <div className="w-full flex justify-center">
              <FaCircleUser
                className="text-[#C4C4C4] rounded-full bg-black"
                size={"8rem"}
              />
            </div>
            <div className="pl-3 text-lg pb-3">
              <div className="">Username:</div>
              <div className="">Contact Number:</div>
              <div className="">Email:</div>
              <div className="">Department:</div>
            </div>
          </div>
          <div className="bg-white h-fit p-6 rounded-xl md:w-1/2 shadow-md hover:shadow-lg hover:shadow-[#939292] transition-shadow duration-300 shadow-[#939292]">
            <div className="text-center mb-2">Give Your Feedback</div>
            <div className="bg-[#9C9C9C] w-full p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              ullam.
            </div>
            <div className="flex justify-center mt-2">
              <StarRatings
                starRatedColor="gold"
                starSpacing="1px"
                starDimension="25px"
                numberOfStars={5}
              />
            </div>
            <div className="flex justify-center mt-2">
              <button className="text-white p-3 px-5 bg-[#55D6C2] rounded-md">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
