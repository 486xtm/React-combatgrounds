import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionHistory } from "../../../../api/admin";
import { formattedDate } from "../../../../common/utils";
import { ROUTES, socketURL } from "../../../../common/constant";
import { useNavigate } from "react-router-dom";
const buyInfo = [
  {
    total: 1000,
    cost: 5,
  },
  {
    total: 2250,
    cost: 10,
  },
  {
    total: 3500,
    cost: 15,
  },
  {
    total: 4750,
    cost: 20,
  },
  {
    total: 6000,
    cost: 25,
  },
  {
    total: 7250,
    cost: 30,
  },
  {
    total: 13000,
    cost: 50,
  },
  {
    total: 27500,
    cost: 100,
  },
  {
    total: 75000,
    cost: 250,
  },
  // {
  //   total: 175000,
  //   turns: 100000,
  //   bonus: 75000,
  //   cost: 500,
  // },
];

export const AdminTransactionlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const hanldePagePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handlePageGo = () => {};

  const dispatch = useDispatch();

  const navigate = useNavigate()
  const handleUserInfo = (user) => {
    if( user && user._id)
      navigate(
        ROUTES.ADMIN_ROUTES.USER_INFO.replace(":user_id", user._id)
      );
  }
  useEffect(() => {
    getTransactionHistory(dispatch);
  }, []);

  const txs = useSelector(({ admin }) => admin.txs);

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
      <div className=" overflow-x-auto shadow-md bg-white px-2 min_calc_height">
        <table className="w-full min-w-[500px] text-sm text-left overflow-x-auto ">
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
              <th scope="col" className=" text-gray-700 px-20 py-3">
                Player
              </th>
              <th scope="col" className=" text-gray-700 px-6 py-3">
                amount
              </th>

              <th scope="col" className=" text-gray-700 px-6 py-3">
                amount of Turn
              </th>
              <th scope="col" className="text-gray-700 px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {txs &&
              txs.map((tx, index) => (
                <tr
                  className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                  key={`admin_amount_list_${index}`}
                  onClick={() => handleUserInfo(tx.userID)}
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
                  >
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full border-[1px]"
                        src={
                          tx.userID && tx.userID.avatar
                            ? `${socketURL}/${tx.userID.avatar}`
                            : "/pics/avatar.gif"
                        }
                        alt="Crew avatar"
                      />
                      <div className="ps-3 text-left">
                        <div className="text-base font-semibold">
                          {tx.userID ? tx.userID.name : "deleted user"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4  leading-none">
                    <div className="w-[100%] text-center">{tx.amount}</div>
                  </td>

                  <td className="px-6 py-4 text-center  leading-none">
                    <div className="w-[100%] hyphens-auto">
                      {buyInfo.find((val) => val.cost == tx.amount).total}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center  leading-none">
                    <div className="w-[100%] hyphens-auto">
                      {formattedDate(tx.updatedAt)}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="flex justify-center items-center gap-x-1 bg-white border-t-2 py-4 rounded-b-lg"
        aria-label="Pagination"
      >
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none bg-transparent"
          aria-label="Previous"
          onClick={hanldePagePrevious}
          disabled={currentPage == 1}
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          <input
            className="h-[38px] w-[40px] flex justify-center items-center border border-gray-200 text-gray-800 px-2 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none text-center"
            value={currentPage}
            onChange={(ev) => setCurrentPage(Number(ev.target.value))}
          />
          <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
            of
          </span>
          <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
            1
          </span>
        </div>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none bg-transparent"
          aria-label="Next"
          onClick={handlePageNext}
          disabled={currentPage > 10}
        >
          <span className="sr-only">Next</span>
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </>
  );
};
