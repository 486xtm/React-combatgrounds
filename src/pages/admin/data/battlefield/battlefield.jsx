import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
const MockData = [
  {
    name: "Albania",
    rewardType: 0,
    owner: {
      name: "sealife",
      avatar: "asdfasdadf",
      troops: 1000,
    },
  },
  {
    name: "Albania1",
    rewardType: 1,
    owner: {
      name: "sealife",
      avatar: "asdfasdadf",
      troops: 1000,
    },
  },
  {
    name: "Albania2",
    rewardType: 1,
    owner: {
      name: "sealife",
      avatar: "asdfasdadf",
      troops: 1000,
    },
  },
  {
    name: "Albania3",
    rewardType: 1,
    owner: {
      name: "sealife",
      avatar: "asdfasdadf",
      troops: 1000,
    },
  },
  {
    name: "Albania4",
    rewardType: 1,
    owner: {
      name: "sealife",
      avatar: "asdfasdadf",
      troops: 1000,
    },
  },
  {
    name: "Albania5",
    rewardType: 1,
    owner: {
      name: "sealife",
      avatar: "asdfasdadf",
      troops: 1000,
    },
  },
];
export const BattleField = () => {
  const [CountryData, setCountryData] = useState(MockData);
  const [newCountry, setNewCountry] = useState({ name: "", rewardType: 0 });
  const handleStoreCountry = (country) => {
    console.log(country);
  };

  const handleDeleteCountry = (country) => {
    console.log(country);
  };

  const handleAddCountry = () => {
    console.log(newCountry)
  };
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
            placeholder="Search for Nuke Country"
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
              Country
            </th>
            <th scope="col" className=" text-gray-700 px-6 py-3">
              reward Type
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
          {CountryData.map((country, index) => (
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
                <div className="w-[100%] text-center">{country.name}</div>
              </td>
              <td className="px-6 py-4 text-center  leading-none">
                <div className="w-[100%] hyphens-auto">
                  <input
                    className="border-2 p-2 rounded-lg focus:border-gray-700"
                    value={Number(country.rewardType).toLocaleString()}
                    onChange={(ev) =>
                      setCountryData(
                        CountryData.map((val) => {
                          if (val.name == country.name)
                            val.rewardType = Number(
                              ev.target.value.replace(/[^0-9]/g, "")
                            );
                          return val;
                        })
                      )
                    }
                  />
                </div>
              </td>
              <td
                scope="row"
                className="px-6 py-4 text-gray-900 whitespace-nowrap "
              >
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full border-[1px]"
                    src="/avatar/avatar.png"
                    alt="Crew avatar"
                  />
                  <div className="ps-3 text-left">
                    <div className="text-base font-semibold">
                      {country.owner.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center  leading-none">
                <div className="w-[100%] hyphens-auto">
                  {country.owner.troops}
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="#"
                    type="button"
                    onClick={() => handleStoreCountry(country)} // Changed from user to crew
                    className="text-[18px] text-gray-600"
                  >
                    <FaSave />
                  </a>
                  <a
                    href="#"
                    type="button"
                    onClick={() => handleDeleteCountry(country)} // Changed from user to crew
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
