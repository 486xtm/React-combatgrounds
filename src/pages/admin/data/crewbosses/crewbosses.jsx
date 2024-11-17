import React, { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getBosses } from "../../../../api/crew";
import { addBoss, removeBoss, updateBoss } from "../../../../api/admin";

export const CrewBosses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const bosses = useSelector(({ crew }) => crew.bosses);
  const dispatch = useDispatch();
  const [CrewBosses, setCrewBosses] = useState([]);
  const [newCrewBoss, setNewCrewBoss] = useState({
    name: "",
    damage: 0,
    rewards: 0,
  });
  const handleStoreCrewBoss = (CrewBoss) => {
    updateBoss(CrewBoss, dispatch);
  };

  const handleDeleteCrewBoss = (CrewBoss) => {
    removeBoss(CrewBoss, dispatch);
  };

  const handleAddCrewBoss = () => {
    addBoss(newCrewBoss, dispatch);
  };

  console.log(bosses);
  useEffect(() => {
    getBosses(dispatch);
  }, []);
  useEffect(() => {
    if (bosses) setCrewBosses(bosses);
  }, [bosses]);
  return (
    <>
    <div className=" overflow-x-auto shadow-md rounded-t-lg mt-5 bg-white px-2 min_calc_height">
      <table className="w-full min-w-[500px] text-sm text-left overflow-x-auto mt-5">
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
              CrewBoss
            </th>
            <th scope="col" className=" text-gray-700 px-6 py-3">
              damage
            </th>
            <th scope="col" className=" text-gray-700 px-6 py-3">
              rewards
            </th>
            <th scope="col" className="text-gray-700 px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {CrewBosses.map((CrewBoss, index) => (
            <tr
              className="bg-white border-b hover:bg-gray-50 cursor-pointer"
              key={`admin_CrewBoss_list_${index}`}
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
                <div className="w-[100%] text-center">{CrewBoss.name}</div>
              </td>
              <td className="px-6 py-4 text-center  leading-none">
                <div className="w-[100%] hyphens-auto">
                  <input
                    className="border-2 p-2 rounded-lg focus:border-gray-700"
                    value={Number(CrewBoss.damage).toLocaleString("en-US")}
                    onChange={(ev) =>
                      setCrewBosses(
                        CrewBosses.map((val) => {
                          if (val.name == CrewBoss.name)
                            return {
                              ...val,
                              damage: Number(
                                ev.target.value.replace(/[^0-9]/g, "")
                              ),
                            };
                          return val;
                        })
                      )
                    }
                  />
                </div>
              </td>
              <td className="px-6 py-4 text-center  leading-none">
                <div className="w-[100%] hyphens-auto">
                  <input
                    className="border-2 p-2 rounded-lg focus:border-gray-700"
                    value={Number(CrewBoss.rewards).toLocaleString("en-US")}
                    onChange={(ev) =>
                      setCrewBosses(
                        CrewBosses.map((val) => {
                          if (val.name == CrewBoss.name)
                            return {
                              ...val,
                              rewards: Number(
                                ev.target.value.replace(/[^0-9]/g, "")
                              ),
                            };
                          return val;
                        })
                      )
                    }
                  />
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="#"
                    type="button"
                    onClick={() => handleStoreCrewBoss(CrewBoss)} // Changed from user to crew
                    className="text-[18px] text-gray-600"
                  >
                    <FaSave />
                  </a>
                  <a
                    href="#"
                    type="button"
                    onClick={() => handleDeleteCrewBoss(CrewBoss)} // Changed from user to crew
                    className="text-[18px] text-gray-600"
                  >
                    <FaTrashCan />
                  </a>
                </div>
              </td>
            </tr>
          ))}
          <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
            <td className="w-4 p-4 leading-none">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="sr-only">checkbox</label>
              </div>
            </td>
            <td className="px-6 py-4 text-center leading-none">
              {CrewBosses.length + 1}
            </td>

            <td className="px-6 py-4  leading-none">
              <div className="w-[100%] text-center">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700"
                  value={newCrewBoss.name}
                  onChange={(ev) => {
                    setNewCrewBoss({ ...newCrewBoss, name: ev.target.value });
                  }}
                  placeholder="CrewBoss Name"
                />
              </div>
            </td>
            <td className="px-6 py-4 text-center  leading-none">
              <input
                className="border-2 p-2 rounded-lg focus:border-gray-700"
                value={Number(newCrewBoss.damage).toLocaleString("en-US")}
                onChange={(ev) => {
                  setNewCrewBoss({
                    ...newCrewBoss,
                    damage: Number(ev.target.value.replace(/[^0-9]/g, "")),
                  });
                }}
              />
            </td>
            <td className="px-6 py-4 text-center  leading-none">
              <input
                className="border-2 p-2 rounded-lg focus:border-gray-700"
                value={Number(newCrewBoss.rewards).toLocaleString("en-US")}
                onChange={(ev) => {
                  setNewCrewBoss({
                    ...newCrewBoss,
                    rewards: Number(ev.target.value.replace(/[^0-9]/g, "")),
                  });
                }}
              />
            </td>
            <td className=" py-4 ">
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#014CFA] rounded-lg py-4  w-1/2 mx-auto text-white shadow-md  hover:bg-blue-500"
                  onClick={handleAddCrewBoss}
                >
                  Add
                </button>
              </div>
            </td>
          </tr>
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
