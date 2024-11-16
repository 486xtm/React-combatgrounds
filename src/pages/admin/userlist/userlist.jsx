import React, { useEffect } from "react";
import { FaTrashCan, FaPen } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getAllUserInfo } from "../../../api/admin";
import { getRole } from "../../../common/utils";
import { ROUTES, socketURL } from "../../../common/constant";

export const AdminUserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const users = useSelector(({ admin }) => admin.users);

  return (
    <div>
      <h1 className="text-[30px] -mx-8 mt-4 text-gray-700 font-manrope font-extrabold">
        Total Users : {users.length}
      </h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg -mx-10 mt-5 bg-white px-2 min_calc_height">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
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
                Name
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Role
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Money
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Turn
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Level
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Recruits
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Net Worth
              </th>
              <th scope="col" className="text-left text-gray-700 px-6 py-3">
                Banked Turn
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
