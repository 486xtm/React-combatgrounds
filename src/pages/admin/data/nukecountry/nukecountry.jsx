import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { getCountryInfo } from "../../../../api/country";
import {
  addCountry,
  removeCountry,
  updateCountry,
} from "../../../../api/admin";

export const NukeCountry = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);
  const countries = useSelector(({ nuke }) => nuke.countries);
  const [currentPage, setCurrentPage] = useState(1);

  const [CountryData, setCountryData] = useState([]);
  const [newCountry, setNewCountry] = useState({ name: "", level: 0 });

  const handleStoreCountry = (country) => {
    updateCountry(country, dispatch);
  };

  const handleDeleteCountry = (name) => {
    removeCountry({ name }, dispatch);
  };

  const handleAddCountry = () => {
    addCountry(newCountry, dispatch);
    setNewCountry({ name: "", level: 0 });
  };

  useEffect(() => {
    getCountryInfo(dispatch);
  }, [user]);
  useEffect(() => {
    if (countries) setCountryData(countries);
  }, [countries]);
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
              Country
            </th>
            <th scope="col" className=" text-gray-700 px-6 py-3">
              Level
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
                    value={Number(country.level).toLocaleString("en-US")}
                    onChange={(ev) =>
                      setCountryData(
                        CountryData.map((val) => {
                          if (val.name == country.name)
                            return {
                              ...val,
                              level: Number(
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
                    onClick={() => handleStoreCountry(country)} // Changed from user to crew
                    className="text-[18px] text-gray-600"
                  >
                    <FaSave />
                  </a>
                  <a
                    href="#"
                    type="button"
                    onClick={() => handleDeleteCountry(country.name)} // Changed from user to crew
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
              {CountryData.length + 1}
            </td>

            <td className="px-6 py-4  leading-none">
              <div className="w-[100%] text-center">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700"
                  value={newCountry.name}
                  onChange={(ev) => {
                    setNewCountry({ ...newCountry, name: ev.target.value });
                  }}
                  placeholder="Country Name"
                />
              </div>
            </td>
            <td className="px-6 py-4 text-center  leading-none">
              <input
                className="border-2 p-2 rounded-lg focus:border-gray-700"
                value={Number(newCountry.level).toLocaleString("en-US")}
                onChange={(ev) => {
                  setNewCountry({
                    ...newCountry,
                    level: Number(ev.target.value.replace(/[^0-9]/g, "")),
                  });
                }}
              />
            </td>

            <td className=" py-4 ">
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#014CFA] rounded-lg py-4  w-1/2 mx-auto text-white shadow-md  hover:bg-blue-500"
                  onClick={handleAddCountry}
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
        className="flex justify-center items-center gap-x-1 bg-white border-t-2 py-4 rounded-b-lg"
        aria-label="Pagination"
      >
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none bg-transparent"
          aria-label="Previous"
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
          <input className="h-[38px] w-[40px] flex justify-center items-center border border-gray-200 text-gray-800 px-2 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none text-center"
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
