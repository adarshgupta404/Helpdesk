import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CgAttachment } from "react-icons/cg";
const Newticket = () => {
  return (
    <div className="relative font-sanchez h-[calc(100dvh-64px-48px)] overflow-x-auto md:overflow-x-none overflow-y-auto">
      <div className="font-sanchez w-full flex pt-5 pb-3 font-medium text-3xl justify-center items-center">
        Create New Ticket
      </div>
      <div className="w-full pt-0  md:pr-0 flex justify-center">
        <div className="w-full px-5 sm:px-14 lg:px-24 flex flex-wrap gap-4 justify-between">
          <div className="grid lg:grid-cols-2 w-full gap-5 pl-2 md:pl-0">
          <div className="w-full text-lg md:flex justify-between items-center gap-6">
              <div className="">TicketNo. </div>
              <input
                name="ticketno"
                id=""
                className="bg-[#C4C4C4A1] p-1 rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
              />
            </div>
            <div className="w-full text-lg md:flex justify-between items-center gap-6">
              <div className="">Name: </div>
              <input
                name="name"
                id=""
                className="bg-[#C4C4C4A1] p-1 rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
              />
            </div>
            <div className="w-full text-lg md:flex justify-between items-center gap-6">
              <div className="">Date: </div>
              <input
                name="ticketno"
                id=""
                className="bg-[#C4C4C4A1] p-1 rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
              />
            </div>
            <div className="w-full text-lg md:flex justify-between items-center gap-6">
              <div className="">Department: </div>
              <input
                name="dept"
                id=""
                className="bg-[#C4C4C4A1] p-1 rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
              />
            </div>
          </div>
          
          <div className="w-full text-lg  pl-2 md:pl-0">
            <div className="mb-2">Subject: </div>
            <input
              name="ticketno"
              id=""
              className="bg-[#C4C4C4A1] p-1 w-full rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
            />
          </div>
          <div className="md:flex w-full gap-5 mt-3  pl-2 md:pl-0">
            <div className="md:w-1/2">
              <div className="w-full">
                <div className="w-full text-lg mb-2">Category: </div>
                <input
                  name="category"
                  id=""
                  className="bg-[#C4C4C4A1] p-1 mb-3 w-full rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
                />
              </div>
              <div className="w-full">
                <div className="w-full text-lg mb-2">Type: </div>
                <input
                  name="type"
                  id=""
                  className="bg-[#C4C4C4A1] p-1 mb-3 w-full rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
                />
              </div>
              <div className="w-full">
                <div className="w-full text-lg mb-2">Priority: </div>
                <input
                  name="priority"
                  id=""
                  className="bg-[#C4C4C4A1] p-1 w-full rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-full flex flex-col relative">
                <div className="w-full text-lg mb-2">Description: </div>
                <button className="absolute bg-[#55D6C2] p-2 rounded-lg bottom-0 right-0 m-3"><CgAttachment size={"1.7rem"} /></button>
                <textarea className="p-4 bg-[#C4C4C4A1] w-full rounded-lg border-slate-200 h-full border-e-2 border-b-2 shadow" />
              </div>
            </div>
          </div>
          <div className="w-full md:flex  pl-2 md:pl-0">
            <div className="md:w-1/2 mb-3 overflow-hidden">
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
            </div>
            <div className="md:w-1/2 pb-5 h-full md:flex justify-end items-end">
                <button className="px-10 py-3 rounded-lg bg-[#55D6C2] text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newticket;

{
  /* <div className="w-full gap-5 flex flex-col">
          <div className="w-full gap-10 flex justify-between items-center">
            <div className="w-1/2 text-lg flex justify-between gap-6">
              <div className="">Ticket No. </div>
              <input
                name="ticketno"
                id=""
                className="bg-[#C4C4C4A1] rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
              />
            </div>
            <div className="w-1/2">
              <div className=" text-lg flex justify-between items-center gap-6">
                <div className="">Date: </div>
                <input
                  name="date"
                  id=""
                  className="bg-[#C4C4C4A1] rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow "
                />
              </div>
            </div>
          </div>
          <div className="w-full gap-10 flex justify-between items-center">
            <div className="w-1/2 text-lg flex justify-between items-center gap-6">
              <div className="">Name: </div>
              <input
                name="name"
                id=""
                className="bg-[#C4C4C4A1] rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow"
              />
            </div>
            <div className="w-1/2">
              <div className=" text-lg flex justify-between items-center gap-6">
                <div className="">Department: </div>
                <input
                  name="dept"
                  id=""
                  className="bg-[#C4C4C4A1] rounded-lg border-slate-200 pl-2 border-e-2 border-b-2 shadow "
                />
              </div>
            </div>
          </div>
        </div> */
}
