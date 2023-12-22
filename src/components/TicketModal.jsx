import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { initFlowbite } from "flowbite";

const TicketModal = ({ openModal, setOpenModal, curitem }) => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <Modal
        className="bg-opacity-20 backdrop-blur-[1px] bg-slate-400"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div className="text-2xl p-4 font-sanchez text-center">
          Ticket Details
        </div>
        <div className="font-sanchez p-4 font-medium text-lg">
          <div className="">Ticket No: {curitem.ticketNo}</div>
          <div className="">Date: {curitem.date}</div>
          <div className="">Name: </div>
          <div className="pb-4">Dept: </div>
          <div className="">Title:</div>
          <div className="">Description:</div>
          <div className="">Category:</div>
          <div className="">Type:</div>
          <div className="">Priority:</div>
          <div className="">Status: {curitem.status}</div>
          <div className="">Attachment:</div>
        </div>
        <div className="w-full p-4 flex justify-center curitems-center">
          <Button
            className="px-4 bg-green-400"
            onClick={() => setOpenModal(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default TicketModal;
