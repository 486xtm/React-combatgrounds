import React, { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getBosses } from "../../../../api/crew";

export const CrewBosses = () => {
  const bosses = useSelector(({ crew }) => crew.bosses);
  const dispatch = useDispatch();
  const [CrewBosses, setCrewBosses] = useState([]);
  const [newCrewBoss, setNewCrewBoss] = useState({
    name: "",
    damage: 0,
    rewards: 0,
  });
  const handleStoreCrewBoss = (CrewBoss) => {
    console.log(CrewBoss);
  };

  const handleDeleteCrewBoss = (CrewBoss) => {
    console.log(CrewBoss);
  };

  const handleAddCrewBoss = () => {
    console.log(newCrewBoss);
  };
  console.log(bosses);
  useEffect(() => {
    getBosses(dispatch);
  }, []);
  useEffect(() => {
    if (bosses) setCrewBosses(bosses);
  }, [bosses]);
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
            placeholder="Search for Nuke CrewBoss"
          />
        </div>
      </div>

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
  );
};
