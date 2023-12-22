import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import TicketTable from "./Tickettable";
const Myticket = () => {
  return (
    <div className="relative font-sanchez h-[calc(100vh-64px-48px)] md:w-[calc(100vw-224px)] overflow-x-auto md:overflow-x-none overflow-y-auto">
      <div className="font-sanchez flex py-5 font-medium w-full text-3xl justify-center items-center">
        List Of Tickets
      </div>
      <div className="px-5 sm:px-14 lg:px-24">
        <div className="relative w-56">
          <div className="absolute flex justify-center  items-center p-1 right-0 top-1 left-32">
            <FaMagnifyingGlass />
          </div>
          <input
            placeholder="Find Ticket"
            className="bg-[#C4C4C4A1] rounded-md border-slate-400 border-b-[3px] border-e-[3px] border-opacity-50 p-1"
            type="text"
          ></input>
        </div>
        <div className="flex py-3 items-center">
          <div className="">Show: </div>
          <div className="">
            <select className="bg-[#C4C4C4A1] p-1 rounded-md px-3 mx-4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>{" "}
          </div>
          <div className="">Entries</div>
        </div>
        <div className="container mx-auto my-8 overflow-auto">
          <TicketTable/>
        </div>
      </div>
    </div>
  );
};

export default Myticket;
