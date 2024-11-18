import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../../api/shop";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { updateItem } from "../../../../api/admin";
export const ShopItems = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const items = useSelector(({ shop }) => shop.items);
  const user = useSelector(({ user }) => user.user);
  const [shopItems, setShopItems] = useState([]);
  const [newShopItem, setNewShopItem] = useState({
    name: "",
    damage: 0,
    rewards: 0,
  });
  const handleStoreShopItem = (item) => {
    updateItem({ item }, dispatch);
  };

  const handleDeleteShopItem = (item) => {
    console.log(item);
  };

  // const handleAddShopItem = () => {
  //   console.log(newShopItem);
  // };
  useEffect(() => {
    getItems(dispatch);
  }, [user]);
  useEffect(() => {
    if (items) setShopItems(items);
  }, [items]);
  return (
    <>
    <div className=" overflow-x-auto shadow-md rounded-t-lg mt-5 bg-white px-2 min_calc_height">

      <table className="w-full min-w-[1000px] text-sm text-left overflow-x-auto mt-5">
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
            <th scope="col" className="text-gray-700 px-3 py-3">
              No
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              name
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              Type
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              cost
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              max Count
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              income Bonus
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              attact Bonus
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              defence Bonus
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              netScore
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              required Grade
            </th>
            <th scope="col" className=" text-gray-700 px-3 py-3">
              description
            </th>
            <th scope="col" className="text-gray-700 px-3 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {shopItems.map((item, index) => (
            <tr
              className="bg-white border-b hover:bg-gray-50 cursor-pointer"
              key={`admin_ShopItem_list_${index}`}
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
              <td className="px-3 py-4 text-center leading-none">
                {index + 1}
              </td>

              <td className="px-3 py-4  leading-none">
                <div className=" text-center">{item.name}</div>
              </td>
              <td className="px-3 py-4 text-center  leading-none">
                <select
                  className="border-2 p-2 rounded-lg focus:border-gray-700"
                  value={item.type}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            type: ev.target.value,
                          };
                        return val;
                      })
                    )
                  }
                >
                  <option value={"attack"}>Attack</option>
                  <option value={"defence"}>Defence</option>
                  <option value={"combo"}>Combo</option>
                  <option value={"income"}>Income</option>
                </select>
              </td>
              <td className=" py-4 text-center  leading-none">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700 w-20"
                  value={Number(item.cost).toLocaleString("en-US")}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            cost: Number(
                              ev.target.value.replace(/[^0-9]/g, "")
                            ),
                          };
                        return val;
                      })
                    )
                  }
                />
              </td>
              <td className="px-3 py-4 text-center  leading-none">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700 w-20"
                  value={Number(item.maxCount).toLocaleString("en-US")}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            maxCount: Number(
                              ev.target.value.replace(/[^0-9]/g, "")
                            ),
                          };
                        return val;
                      })
                    )
                  }
                />
              </td>
              <td className="px-3 py-4 text-center  leading-none">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700 w-20"
                  value={Number(item.incomeBonus).toLocaleString("en-US")}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            incomeBonus: Number(
                              ev.target.value.replace(/[^0-9]/g, "")
                            ),
                          };
                        return val;
                      })
                    )
                  }
                />
              </td>
              <td className="px-3 py-4 text-center  leading-none">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700 w-20"
                  value={Number(item.attackBonus).toLocaleString("en-US")}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            attackBonus: Number(
                              ev.target.value.replace(/[^0-9]/g, "")
                            ),
                          };
                        return val;
                      })
                    )
                  }
                />
              </td>
              <td className="px-3 py-4 text-center  leading-none">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700 w-20"
                  value={Number(item.defenceBonus).toLocaleString("en-US")}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            defenceBonus: Number(
                              ev.target.value.replace(/[^0-9]/g, "")
                            ),
                          };
                        return val;
                      })
                    )
                  }
                />
              </td>
              <td className="px-3 py-4 text-center  leading-none">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700 w-20"
                  value={Number(item.netScore).toLocaleString("en-US")}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            netScore: Number(
                              ev.target.value.replace(/[^0-9]/g, "")
                            ),
                          };
                        return val;
                      })
                    )
                  }
                />
              </td>
              <td className="px-3 py-4 text-center  leading-none">
                <select
                  className="border-2 p-2 rounded-lg focus:border-gray-700"
                  value={item.requiredGrade}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            requiredGrade: Number(ev.target.value),
                          };
                        return val;
                      })
                    )
                  }
                >
                  <option value={0}>None</option>
                  <option value={1}>Sergeant</option>
                  <option value={2}>Lieutenant</option>
                  <option value={3}>Captain</option>
                  <option value={4}>Colonel</option>
                  <option value={5}>General</option>
                </select>
              </td>
              <td className="px-3 py-4 text-center  leading-none">
                <textarea
                  className="border-2 p-2 rounded-lg focus:border-gray-700"
                  value={item.description}
                  rows={4}
                  onChange={(ev) =>
                    setShopItems(
                      shopItems.map((val) => {
                        if (val._id == item._id)
                          return {
                            ...val,
                            description: ev.target.value,
                          };
                        return val;
                      })
                    )
                  }
                />
              </td>
              <td className="px-3 py-4 ">
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="#"
                    type="button"
                    onClick={() => handleStoreShopItem(item)} // Changed from user to crew
                    className="text-[18px] text-gray-600"
                  >
                    <FaSave />
                  </a>
                  {/* <a
                    href="#"
                    type="button"
                    onClick={() => handleDeleteShopItem(item)} // Changed from user to crew
                    className="text-[18px] text-gray-600"
                  >
                    <FaTrashCan />
                  </a> */}
                </div>
              </td>
            </tr>
          ))}
          {/* <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
            <td className="w-4 p-4 leading-none">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="sr-only">checkbox</label>
              </div>
            </td>
            <td className="px-3 py-4 text-center leading-none">
              {ShopItems.length + 1}
            </td>

            <td className="px-3 py-4  leading-none">
              <div className="w-[100%] text-center">
                <input
                  className="border-2 p-2 rounded-lg focus:border-gray-700 w-20"
                  value={newShopItem.name}
                  onChange={(ev) => {
                    setNewShopItem({ ...newShopItem, name: ev.target.value });
                  }}
                  placeholder="ShopItem Name"
                />
              </div>
            </td>
            <td className="px-3 py-4 text-center  leading-none">
              <input
                className="border-2 p-2 rounded-lg focus:border-gray-700"
                value={Number(newShopItem.damage).toLocaleString('en-US')}
                onChange={(ev) => {
                  setNewShopItem({
                    ...newShopItem,
                    damage: Number(ev.target.value.replace(/[^0-9]/g, "")),
                  });
                }}
              />
            </td>
            <td className="px-3 py-4 text-center  leading-none">
              <input
                className="border-2 p-2 rounded-lg focus:border-gray-700"
                value={Number(newShopItem.rewards).toLocaleString('en-US')}
                onChange={(ev) => {
                  setNewShopItem({
                    ...newShopItem,
                    rewards: Number(ev.target.value.replace(/[^0-9]/g, "")),
                  });
                }}
              />
            </td>
            <td className=" py-4 ">
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#014CFA] rounded-lg py-4  w-1/2 mx-auto text-white shadow-md  hover:bg-blue-500"
                  onClick={handleAddShopItem}
                >
                  Add
                </button>
              </div>
            </td>
          </tr> */}
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
