import React from "react";
import { FaTrashCan, FaPen } from "react-icons/fa6";
const userList = [
  {
    name: "sealife",
    avatar: "",
    email: "sealife@gmail.com",
    role: "supporter",
    money: 123123,
    turn: 1123123,
    level: 12123,
    recruits: 24234,
    netWorth: 23234234,
    bankedTurn: 23424234,
    crew: "TopStar",
    online: true,
  },
  {
    name: "sealife",
    avatar: "",
    email: "sealife@gmail.com",
    role: "supporter",
    money: 123123,
    turn: 1123123,
    level: 12123,
    recruits: 24234,
    netWorth: 23234234,
    bankedTurn: 23424234,
    crew: "TopStar",
    online: true,
  },
  {
    name: "sealife",
    avatar: "",
    email: "sealife@gmail.com",
    role: "supporter",
    money: 123123,
    turn: 1123123,
    level: 12123,
    recruits: 24234,
    netWorth: 23234234,
    bankedTurn: 23424234,
    crew: "TopStar",
    online: true,
  },
  {
    name: "sealife",
    avatar: "",
    email: "sealife@gmail.com",
    role: "supporter",
    money: 123123,
    turn: 1123123,
    level: 12123,
    recruits: 24234,
    netWorth: 23234234,
    bankedTurn: 23424234,
    crew: "TopStar",
    online: false,
  },
  {
    name: "sealife",
    avatar: "",
    email: "sealife@gmail.com",
    role: "supporter",
    money: 123123,
    turn: 1123123,
    level: 12123,
    recruits: 24234,
    netWorth: 23234234,
    bankedTurn: 23424234,
    crew: "TopStar",
    online: true,
  },
];
export const AdminUserList = () => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg -mx-10 mt-10 bg-white min-h-[80vh] px-2">
      <div className=" flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
        <div></div>
        <label for="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
                <label for="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              Name
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              Role
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              money
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              turn
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              level
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              recruits
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              netWorth
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              banked Turn
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              status
            </th>
            <th scope="col" className="text-left text-gray-700 px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr
              className="bg-white border-b hover:bg-gray-50 cursor-pointer"
              key={`admin_userlist_${index}`}
            >
              <td className="w-4 p-4 leading-none">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label for="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img
                  className="w-10 h-10 rounded-full border-[1px]"
                  src="/avatar/avatar.png"
                  alt="Jese image"
                />
                <div className="ps-3 text-left">
                  <div className="text-base font-semibold">{user.name}</div>
                  <div className="font-normal text-gray-500">{user.email}</div>
                </div>
              </th>
              <td className="px-6 py-4 text-left leading-none">{user.role}</td>
              <td className="px-6 py-4 text-left leading-none">
                {Number(user.money).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-left leading-none">
                {Number(user.turn).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-left leading-none">
                {Number(user.level).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-left leading-none">
                {Number(user.recruits).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-left leading-none">
                {Number(user.netWorth).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-left leading-none">
                {Number(user.bankedTurn).toLocaleString()}
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
                    className="text-[18px] text-gray-600"
                  >
                    <FaPen />
                  </a>
                  <a
                    href="#"
                    type="button"
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
