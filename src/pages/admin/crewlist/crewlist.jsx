import React, { useEffect, useState } from "react";
import {
  FaTrashCan,
  FaPen,
  FaArrowDownAZ,
  FaArrowDown19,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCrew, removeCrew } from "../../../api/admin";
import { ROUTES, socketURL } from "../../../common/constant";
import { formattedDate } from "../../../common/utils";
export const AdminCrewList = () => {
  /////////////////
  const [sortName, setSortName] = useState(true);
  const [sortLeader, setLeader] = useState(true);
  const [sortMoney, setSortMoney] = useState(true);
  const [sortNetWorth, setSortNetWorth] = useState(true);
  const [sortMembers, setSortMembers] = useState(true);
  const [sortDate, setSortDate] = useState(true);

  const handleSortName = () => {
    setSortName(!sortName);
    setLeader(true);
    setSortMoney(true);
    setSortNetWorth(true);
    setSortMembers(true);
    setSortDate(true);
  };

  const handleSortLeader = () => {
    setSortName(true);
    setLeader(!sortLeader);
    setSortMoney(true);
    setSortNetWorth(true);
    setSortMembers(true);
    setSortDate(true);
  };

  const handleSortMoney = () => {
    setSortName(true);
    setLeader(true);
    setSortMoney(!sortMoney);
    setSortNetWorth(true);
    setSortMembers(true);
    setSortDate(true);
  };
  const handleSortNetWorth = () => {
    setSortName(true);
    setLeader(true);
    setSortMoney(true);
    setSortNetWorth(!sortNetWorth);
    setSortMembers(true);
    setSortDate(true);
  };
  const handleSortMembers = () => {
    setSortName(true);
    setLeader(true);
    setSortMoney(true);
    setSortNetWorth(true);
    setSortMembers(!sortMembers);
    setSortDate(true);
  };
  const handleSortDate = () => {
    setSortName(true);
    setLeader(true);
    setSortMoney(true);
    setSortNetWorth(true);
    setSortMembers(true);
    setSortDate(!sortDate);
  };
  ///////////

  const [currentPage, setCurrentPage] = useState(1);
  //////////
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const crews = useSelector(({ admin }) => admin.crews);

  const handleCrewDelete = (e, crew_id) => {
    e.stopPropagation();
    removeCrew({ crew_id }, dispatch);
  };

  const handleCrewEdit = (crew_id) => {
    navigate(ROUTES.ADMIN_ROUTES.CREW_INFO.replace(":crew_id", crew_id));
  };

  useEffect(() => {
    getAllCrew(dispatch);
  }, []);

  return (
    <>
      <div className="flex  items-center justify-between flex-column md:flex-row flex-wrap  mt-5 rounded-t-lg  md:space-y-0 py-4 bg-white pr-5">
        <div></div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 items-center"
            placeholder="Search for users"
          />
        </div>
      </div>

      <div className="overflow-x-auto shadow-md  bg-white px-2 min_calc_height">
        <table className="w-full min-w-[900px] text-sm text-left overflow-x-auto ">
          <thead>
            <tr className="text-xs uppercase bg-gray-50">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="text-gray-700 px-6 py-3">
                No
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                <div className="flex items-center gap-2">
                  Name
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortName}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortName ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDownAZ />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-gray-700 px-6 py-3">
                <div className="flex justify-center items-center gap-2">
                  Leader
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortLeader}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortLeader ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDownAZ />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-gray-700 px-6 py-3">
                <div className="flex justify-center items-center gap-2">
                  Money
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortMoney}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortMoney ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDown19 />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-gray-700 px-6 py-3">
                <div className="flex justify-center items-center gap-2">
                  Net Worth
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortNetWorth}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortNetWorth ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDown19 />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-gray-700 px-6 py-3">
                <div className="flex justify-center items-center gap-2">
                  Members
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortMembers}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortMembers ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDown19 />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-gray-700 px-6 py-3">
                <div className="flex justify-center items-center gap-2">
                  Date
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortDate}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortDate ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDown19 />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-gray-700 px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {crews &&
              crews.map((crew, index) => (
                <tr
                  className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                  key={`admin_crewlist_${index}`}
                  onClick={() => handleCrewEdit(crew._id)}
                >
                  <td className="w-4 p-4 leading-none">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${index}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`checkbox-table-search-${index}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center leading-none">
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-10 rounded-full border-[1px]"
                      src={
                        crew.avatar
                          ? `${socketURL}/${crew.avatar}`
                          : "/crew/crewpicdef.gif"
                      }
                      alt="Crew avatar"
                    />
                    <div className="ps-3 text-left">
                      <div className="text-base font-semibold">{crew.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center leading-none">
                    {crew.leader.name}
                  </td>
                  <td className="px-6 py-4 text-center leading-none">
                    {Number(crew.money).toLocaleString("en-US")}
                  </td>
                  <td className="px-6 py-4 text-center leading-none">
                    {Number(crew.netWorth).toLocaleString("en-US")}
                  </td>
                  <td className="px-6 py-4 text-center leading-none">
                    {Number(crew.members.length + 1).toLocaleString("en-US")}
                  </td>
                  <td className="px-6 py-4 text-center leading-none">
                    {formattedDate(crew.createdAt)}
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="flex gap-4 justify-center items-center">
                      <a
                        href="#"
                        type="button"
                        className="text-[18px] text-gray-600"
                      >
                        <FaPen />
                      </a>
                      <a
                        href="#"
                        type="button"
                        onClick={(e) => handleCrewDelete(e, crew._id)} // Changed from user to crew
                        className="text-[18px] text-gray-600"
                      >
                        <FaTrashCan />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div
        class="flex justify-center items-center gap-x-1 bg-white border-t-2 py-4 rounded-b-lg"
        aria-label="Pagination"
      >
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none bg-transparent"
          aria-label="Previous"
        >
          <svg
            class="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span class="sr-only">Previous</span>
        </button>
        <div class="flex items-center gap-x-1">
          <input class="h-[38px] w-[40px] flex justify-center items-center border border-gray-200 text-gray-800 px-2 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none text-center"
            value={currentPage}
            onChange={(ev) => setCurrentPage(Number(ev.target.value))}
          />
          <span class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
            of
          </span>
          <span class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
            3
          </span>
        </div>
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none bg-transparent"
          aria-label="Next"
        >
          <span class="sr-only">Next</span>
          <svg
            class="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </>
  );
};
