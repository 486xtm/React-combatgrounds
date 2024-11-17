import React, { useEffect, useState } from "react";
import {
  FaTrashCan,
  FaPen,
  FaArrowDownAZ,
  FaArrowDown19,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getAllUserInfo } from "../../../api/admin";
import { getRole } from "../../../common/utils";
import { ROUTES, socketURL } from "../../../common/constant";
import { formattedDate } from "../../../common/utils";
export const AdminUserList = () => {
  ///////////
  const [sortName, setSortName] = useState(true);
  const [sortRole, setSortRole] = useState(true);
  const [sortMoney, setSortMoney] = useState(true);
  const [sortTurn, setSortTurn] = useState(true);
  const [sortLevel, setSortLevel] = useState(true);
  const [sortRecruits, setSortRecruits] = useState(true);
  const [sortNetWorth, setSortNetWorth] = useState(true);
  const [sortBankedTurn, setSortBankedTurn] = useState(true);
  const [sortDate, setSortDate] = useState(true);

  const handleSortName = () => {
    setSortName(!sortName);
    setSortRole(true);
    setSortMoney(true);
    setSortTurn(true);
    setSortLevel(true);
    setSortRecruits(true);
    setSortNetWorth(true);
    setSortBankedTurn(true);
    setSortDate(true);
  };

  const handleSortRole = () => {
    setSortRole(!sortRole);
    setSortName(true);
    setSortMoney(true);
    setSortTurn(true);
    setSortLevel(true);
    setSortRecruits(true);
    setSortNetWorth(true);
    setSortBankedTurn(true);
    setSortDate(true);

  };
  const handleSortMoney = () => {
    setSortMoney(!sortMoney);
    setSortName(true);
    setSortRole(true);
    setSortTurn(true);
    setSortLevel(true);
    setSortRecruits(true);
    setSortNetWorth(true);
    setSortBankedTurn(true);
    setSortDate(true);

  };
  const handleSortTurn = () => {
    setSortTurn(!sortTurn);
    setSortName(true);
    setSortRole(true);
    setSortMoney(true);
    setSortLevel(true);
    setSortRecruits(true);
    setSortNetWorth(true);
    setSortBankedTurn(true);
    setSortDate(true);

  };
  const handleSortLevel = () => {
    setSortLevel(!sortLevel);
    setSortName(true);
    setSortRole(true);
    setSortMoney(true);
    setSortTurn(true);
    setSortRecruits(true);
    setSortNetWorth(true);
    setSortBankedTurn(true);
    setSortDate(true);

  };
  const handleSortRecruits = () => {
    setSortRecruits(!sortRecruits);
    setSortName(true);
    setSortRole(true);
    setSortMoney(true);
    setSortTurn(true);
    setSortLevel(true);
    setSortNetWorth(true);
    setSortBankedTurn(true);
    setSortDate(true);

  };
  const handleSortNetWorth = () => {
    setSortNetWorth(!sortNetWorth);
    setSortName(true);
    setSortRole(true);
    setSortMoney(true);
    setSortTurn(true);
    setSortLevel(true);
    setSortRecruits(true);
    setSortBankedTurn(true);
    setSortDate(true);

  };
  const handleSortBankedTurn = () => {
    setSortBankedTurn(!sortBankedTurn);
    setSortName(true);
    setSortRole(true);
    setSortMoney(true);
    setSortTurn(true);
    setSortLevel(true);
    setSortRecruits(true);
    setSortNetWorth(true);
    setSortDate(true);

  };
  const handleSortDate = () => {
    setSortBankedTurn(true);
    setSortName(true);
    setSortRole(true);
    setSortMoney(true);
    setSortTurn(true);
    setSortLevel(true);
    setSortRecruits(true);
    setSortNetWorth(true);
    setSortDate(!sortDate);
  }
  ///////////

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onlinePlayer = useSelector(({ online }) => online.onlinePlayers);
  const handleUserDelete = (e, user_id) => {
    e.stopPropagation();
    deleteUser({ user_id }, dispatch);
  };

  const handleUserEdit = (e, user_id) => {
    console.log(user_id);
  };

  useEffect(() => {
    getAllUserInfo(dispatch, navigate);
  }, []);
  const users_List = useSelector(({ admin }) => admin.users);
  const users = users_List.map((val) => ({
    ...val,
    online: onlinePlayer.find((o) => o._id === val._id),
  }));
  return (
    <div>
      <h1 className="text-[30px] -mx-8 mt-4 text-gray-700 font-manrope font-extrabold">
        Total Users : {users.length}
      </h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg -mx-10 mt-5 bg-white px-2 min_calc_height">
        <div className="flex float-right items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
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
        <table className="w-full min-w-[1300px] text-sm text-left overflow-x-auto ">
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
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
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
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                <div className="flex items-center gap-2">
                  Role
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortRole}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortRole ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDownAZ />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                <div className="flex items-center gap-2">
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
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                <div className="flex items-center gap-2">
                  Turn
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortTurn}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortTurn ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDown19 />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                <div className="flex items-center gap-2">
                  Level
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortLevel}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortLevel ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDown19 />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                <div className="flex items-center gap-2">
                  Recruits
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortRecruits}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortRecruits ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDown19 />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                <div className="flex items-center gap-2">
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
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                <div className="flex items-center gap-2">
                  Banked Turn
                  <a
                    className="flex items-center cursor-pointer"
                    onClick={handleSortBankedTurn}
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        sortBankedTurn ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaArrowDown19 />
                    </span>
                  </a>
                </div>
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
              <div className="flex items-center gap-2">
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
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Status
              </th>
              
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                key={`admin_userlist_${index}`}
                onClick={() => {
                  navigate(
                    ROUTES.ADMIN_ROUTES.USER_INFO.replace(":user_id", user._id)
                  );
                }}
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
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <div className="w-10">
                    <img
                      className="w-10 h-10 rounded-full border-[1px]"
                      src={
                        user && user.avatar
                          ? `${socketURL}/${user.avatar}`
                          : "/pics/avatar.gif"
                      }
                      alt="User avatar"
                    />
                  </div>
                  <div className="ps-3 text-left">
                    <div className="text-base font-semibold">{user.name}</div>
                    <div className="font-normal text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4 text-left leading-none">
                  {getRole(user.role)}
                </td>
                <td className="px-6 py-4 text-left leading-none">
                  {Number(user.money).toLocaleString("en-US")}
                </td>
                <td className="px-6 py-4 text-left leading-none">
                  {Number(user.turn).toLocaleString("en-US")}
                </td>
                <td className="px-6 py-4 text-left leading-none">
                  {Number(user.level).toLocaleString("en-US")}
                </td>
                <td className="px-6 py-4 text-left leading-none">
                  {Number(user.recruits).toLocaleString("en-US")}
                </td>
                <td className="px-6 py-4 text-left leading-none">
                  {Number(user.netWorth).toLocaleString("en-US")}
                </td>
                <td className="px-6 py-4 text-left leading-none">
                  {Number(user.bankedTurn).toLocaleString("en-US")}
                </td>
                <td className="px-6 py-4 text-left leading-none">
                  {formattedDate(user.createdAt)}
                </td>
                <td className="px-6 py-4 text-left leading-none">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        user.online ? "bg-green-500" : "bg-red-500"
                      } me-2`}
                    ></div>{" "}
                    {user.online ? "Online" : "Offline"}
                  </div>
                </td>
                
                <td className="px-6 py-4 ">
                  <div className="flex gap-4 justify-center items-center">
                    <a
                      href="#"
                      type="button"
                      onClick={(e) => handleUserEdit(e, user && user._id)}
                      className="text-[18px] text-gray-600"
                    >
                      <FaPen />
                    </a>
                    <a
                      href="#"
                      type="button"
                      onClick={(e) => handleUserDelete(e, user && user._id)}
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
    </div>
  );
};
