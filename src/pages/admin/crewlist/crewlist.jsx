import React, { useEffect, useState } from "react";
import { FaTrashCan, FaPen } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCrew, removeCrew } from "../../../api/admin";
import { ROUTES, socketURL } from "../../../common/constant";

export const AdminCrewList = () => {
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
    <div className="overflow-x-auto shadow-md sm:rounded-lg  mt-5 bg-white px-2 min_calc_height">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
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
            placeholder="Search for crews"
          />
        </div>
      </div>
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
              Name
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Leader
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Money
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Net Worth
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Members
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
                  {Number(crew.money).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center leading-none">
                  {Number(crew.netWorth).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center leading-none">
                  {Number(crew.members.length + 1).toLocaleString()}
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
  );
};
