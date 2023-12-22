import React, { useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import TicketModal from "../../components/TicketModal";
const data = [
  {
    ticketNo: 2208,
    subject: "Ticket Submission",
    status: "On Hold",
    supportBy: "Tech Support",
    date: "9/30/2023",
    rate: 4,
  },
  {
    ticketNo: 3569,
    subject: "New Ticket Issue",
    status: "On Hold",
    supportBy: "Tech Support",
    date: "8/13/2022",
    rate: 4.5,
  },
  {
    ticketNo: 3410,
    subject: "New Request",
    status: "Closed",
    supportBy: "Operation Team",
    date: "9/24/2023",
    rate: 1.5,
  },
  {
    ticketNo: 1367,
    subject: "Login Issue",
    status: "In Progress",
    supportBy: "Tech Support",
    date: "10/10/2022",
    rate: 5,
  },
  {
    ticketNo: 7878,
    subject: "Login Issue",
    status: "In Progress",
    supportBy: "Operation Team",
    date: "8/17/2023",
    rate: 4.5,
  },
  {
    ticketNo: 6439,
    subject: "Login Issue",
    status: "In Progress",
    supportBy: "Tech Support",
    date: "11/4/2023",
    rate: 4,
  },
  {
    ticketNo: 8915,
    subject: "New Request",
    status: "On Hold",
    supportBy: "Tech Support",
    date: "2/27/2023",
    rate: 3.7,
  },
  {
    ticketNo: 7573,
    subject: "New Ticket Issue",
    status: "Closed",
    supportBy: "Tech Support",
    date: "2/8/2023",
    rate: 5,
  },
  {
    ticketNo: 9887,
    subject: "New Request",
    status: "Closed",
    supportBy: "Operation Team",
    date: "5/18/2023",
    rate: 2.6,
  },
  {
    ticketNo: 2405,
    subject: "Ticket Submission",
    status: "Closed",
    supportBy: "Operation Team",
    date: "4/8/2022",
    rate: 1,
  },
];
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "in progress":
      return "bg-[#5CDB95]";
    case "on hold":
      return "bg-[#05386B]";
    case "closed":
      return "bg-[#484848]";
    default:
      return "";
  }
};
const itemsPerPage = 5;

const TicketTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(2);

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [curitem, setCuritem] = useState({})
  const renderTableRows = () => {
    return currentItems.map((item, index) => (
      <tr
        key={item.ticketNo}
        className={index % 2 === 0 ? "bg-[#C4C4C45E]" : "bg-[#C4C4C48F]"}
      >
        <td className="text-center px-3 py-1 ">
          <button
            onClick={() => {
                setCuritem(item);
                setOpenModal(!openModal)}}
            className="text-blue-500 underline"
          >
            {item.ticketNo}
            <TicketModal openModal={openModal} setOpenModal={setOpenModal} curitem={curitem} />
          </button>
        </td>
        <td className="text-center px-3 py-1">{item.subject}</td>
        <td className={`text-center px-3 py-1`}>
          <div
            className={`text-white rounded-md p-1 ${getStatusColor(
              item.status
            )}`}
          >
            {item.status}
          </div>
        </td>
        <td className="text-center px-3 py-1">{item.supportBy}</td>
        <td className="text-center px-3 py-1">{item.date}</td>
        <td className="text-center px-3 py-1 ">
          <div className="md:block hidden">
            <StarRatings
              rating={item.rate}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="gold"
              changeRating={changeRating}
              numberOfStars={5}
              name="rating"
            />
          </div>
          <div className="gap-1 w-12 flex justify-center items-center md:hidden">
            <div className="mt-1">{item.rate}</div>{" "}
            <StarRatings
              rating={item.rate}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="gold"
              changeRating={changeRating}
              numberOfStars={1}
              name="rating"
            />
          </div>
        </td>
      </tr>
    ));
  };

  const renderPagination = () => {
    return (
      <nav>

        <ul className="pagination flex justify-center items-center gap-3">
          {/* Previous Button */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdDoubleArrow className="mt-1.5 scale-x-[-1]" />
            </button>
          </li>
          {currentPage}

          {/* Next Button */}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdDoubleArrow className="mt-1.5" />
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr className="">
            <th className="text-center px-3 py-1">Ticket No.</th>
            <th className="text-center px-3 py-1">Subject</th>
            <th className="text-center px-3 py-1">Status</th>
            <th className="text-center px-3 py-1">Support by</th>
            <th className="text-center px-3 py-1">Date</th>
            <th className="text-center px-3 py-1">Rate</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="flex justify-between mt-2">
        <div>
          Showing {indexOfFirstItem + 1} to{" "}
          {indexOfLastItem > data.length ? data.length : indexOfLastItem} of{" "}
          {data.length} entries
        </div>
        {renderPagination()}
      </div>
    </div>
  );
};

export default TicketTable;
