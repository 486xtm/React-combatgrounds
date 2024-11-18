import React, { useEffect, useState } from "react";
import { FaPushed } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllBattleField, pullOutBattle } from "../../../../api/admin";
import { socketURL } from "../../../../common/constant";

export const BattleField = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  //////////
  const battles = useSelector(({ admin }) => admin.battles);

  const handleTakeAll = (battle) => {
    pullOutBattle(battle, dispatch);
  };

  useEffect(() => {
    getAllBattleField(dispatch);
  }, []);

  return (
    <>
    <div className=" overflow-x-auto shadow-md rounded-t-lg mt-5 bg-white px-2 min_calc_height">
      <table className="w-full min-w-[500px] text-sm text-left overflow-x-auto mt-10">
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
            <th scope="col" className=" text-gray-700 px-6 py-3">
              Region
            </th>
            <th scope="col" className=" text-gray-700 px-20 py-3">
              Owner
            </th>
            <th scope="col" className=" text-gray-700 px-6 py-3">
              Troops
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {battles &&
            battles.map((battle, index) => (
              <tr
                className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                key={`admin_Country_list_${index}`}
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

                <td className="px-6 py-4  leading-none">
                  <div className="w-[100%] text-center">
                    {battle.region ? battle.region.name : "deleted region"}
                  </div>
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full border-[1px]"
                      src={
                        battle.player && battle.player.avatar
                          ? `${socketURL}/${battle.player.avatar}`
                          : "/pics/avatar.png"
                      }
                      alt="Crew avatar"
                    />
                    <div className="ps-3 text-left">
                      <div className="text-base font-semibold">
                        {battle.player ? battle.player.name : "deleted user"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center  leading-none">
                  <div className="w-[100%] hyphens-auto">{battle.recruits}</div>
                </td>
                <td className="px-6 py-4 ">
                  <div className="flex gap-4 justify-center items-center">
                    <a
                      href="#"
                      type="button"
                      onClick={() => handleTakeAll(battle)} // Changed from user to crew
                      className="text-[18px] text-gray-600"
                    >
                      <FaPushed />
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
            1
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
