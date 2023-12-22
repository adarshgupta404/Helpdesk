import React from "react";

const Dashboard = () => {
  return (
    <div
      className="relative font-sanchez h-[calc(100dvh-64px-48px)] md:w-[calc(100dvw-224px)] overflow-x-auto md:overflow-x-none overflow-y-auto"
    >
      <div className="font-sanchez flex py-5 font-medium w-full text-3xl justify-center items-center">
        Dashboard
      </div>
      <div className="w-full pt-0 p-14 justify-center gap-10 flex flex-wrap">
        <div className="bg-[#2F82FF] flex flex-col justify-between w-56 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl p-6 border-e-4 border-b-4 border-slate-400">
            <div className="text-center text-xl">Total Tickets</div>
            <div className="text-7xl text-[#05386B] text-center p-6">12</div>
        </div>
        <div className="bg-[#0BFF68] flex flex-col justify-between w-56 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl p-6 border-e-4 border-b-4 border-slate-400">
            <div className="text-center text-xl">Total Solved</div>
            <div className="text-7xl text-[#05386B] text-center p-6">8</div>
        </div>
        <div className="bg-[#FE594E] flex flex-col justify-between w-56 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl p-6 border-e-4 border-b-4 border-slate-400">
            <div className="text-center text-xl">Total Awaiting Approval</div>
            <div className="text-7xl text-[#05386B] text-center p-6">2</div>
        </div>
        <div className="bg-[#FCFF6C] flex flex-col justify-between w-56 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl p-6 border-e-4 border-b-4 border-slate-400">
            <div className="text-center text-xl">Total in Progress</div>
            <div className="text-7xl text-[#05386B] text-center p-6">2</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

