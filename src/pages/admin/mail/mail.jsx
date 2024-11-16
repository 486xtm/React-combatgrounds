import React, { useEffect } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllMails, removeMail } from "../../../api/admin";
import { formattedDate } from "../../../common/utils";
import { ROUTES, socketURL } from "../../../common/constant";
import { useNavigate } from "react-router-dom";

export const AdminMail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mails = useSelector(({ admin }) => admin.mails);

  const handleMailDelete = (mail_id) => {
    removeMail({ mail_id }, dispatch);
  };

  useEffect(() => {
    getAllMails(dispatch);
  }, []);

  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-5 bg-white px-2 min_calc_height">
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
            placeholder="Search for Ads"
          />
        </div>
      </div>

      <table className="w-full min-w-[900px] text-sm text-left overflow-x-auto ">
        <thead>
          <tr className="text-xs uppercase bg-gray-50 w-full">
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
            <th scope="col" className="text-left text-gray-700 px-20 py-3">
              From
            </th>
            <th scope="col" className="text-left text-gray-700 px-20 py-3">
              To
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Subject
            </th>
            <th scope="col" className="text-gray-700 px-40 py-3">
              Content
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Date
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {mails &&
            mails.map((mail, index) => (
              <tr
                className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                key={`admin_Mail_list_${index}`}
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
                  className="px-6 py-4 text-gray-900 whitespace-nowrap "
                  onClick={() => {
                    if (!mail.sender) return;
                    navigate(ROUTES.ADMIN_ROUTES.USER_INFO.replace(":user_id", mail.sender._id));
                  }}
                >
                  <div className="flex items-center">
                    <div className="w-10">
                      <img
                        className="w-10 h-10 rounded-full border-[1px]"
                        src={
                          mail.sender && mail.sender.avatar
                            ? `${socketURL}/${mail.sender.avatar}`
                            : "/pics/avatar.gif"
                        }
                        alt="Crew avatar"
                      />
                    </div>
                    <div className="ps-3 text-left">
                      <div className="text-base font-semibold">
                        {mail.sender ? mail.sender.name : "Deleted User"}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap "
                  onClick={() => {
                    if (!mail.receiver) return;
                    navigate(ROUTES.ADMIN_ROUTES.USER_INFO.replace(":user_id", mail.receiver._id));
                  }}
                >
                  <div className="flex items-center">
                    <div className="w-10">
                      <img
                        className="w-10 h-10 rounded-full border-[1px]"
                        src={
                          mail.receiver  && mail.receiver.avatar
                            ? `${socketURL}/${mail.receiver.avatar}`
                            : "/pics/avatar.gif"
                        }
                        alt="Crew avatar"
                      />
                    </div>
                    <div className="ps-3 text-left">
                      <div className="text-base font-semibold">
                        {mail.receiver ? mail.receiver.name : "Deleted User"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4  leading-none">
                  <div className="w-[100%] text-center">{mail.subject}</div>
                </td>
                <td className="px-6 py-4  leading-none">
                  <div className="w-[100%] hyphens-auto">{mail.content}</div>
                </td>
                <td className="leading-none">
                  <div className="w-[100%] text-center">
                    {formattedDate(mail.created_at)}
                  </div>
                </td>
                <td className="px-6 py-4 ">
                  <div className="flex gap-4 justify-center items-center">
                    <div
                      href="#"
                      type="button"
                      onClick={() => handleMailDelete(mail._id)} // Changed from user to crew
                      className="text-[18px] text-gray-600"
                    >
                      <FaTrashCan />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
