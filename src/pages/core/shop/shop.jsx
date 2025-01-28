import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
import Modal from "../../../common/components/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { buyItems, getItems, sellItems } from "../../../api/shop";
import { getGradeString } from "../../../common/utils";
import { ConfirmAlert } from '../../../common/components/confirm_alert/confirm_alert';

export const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [vals, setVals] = useState({});
  const [showSellAlertModal, setShowSellAlertModal] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const dispatch = useDispatch();

  const items = useSelector(({ shop }) => shop.items);
  const user = useSelector(({ user }) => user.user);

  useEffect(() => {
    getItems(dispatch);
  }, [user]);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBuy = (type) => {
    setVals({});
    buyItems({ vals, type }, dispatch);
  };
  const handleSell = (type) => {
    setShowSellAlertModal(null);
    sellItems({ vals, type }, dispatch);
  };

  const handleChange = (id, val) => {
    setVals({
      ...vals,
      [id]: val,
    });
  };

  return (
    <Layout currentActiveTab={"headquarters"} isHeaderFull={true}>
      <div className="flex flex-col flex-1 my-3 mx-5">
        <div className="mx-auto">
          <img src="/pics/shop.gif" alt="shop" />
        </div>
        <div
          className={
            "text-white w-full h-full px-3 py-5 " +
            styles["shop_back_container"]
          }
        >
          <div className="font-bold text-center">
            Available Money:{" "}
            <span className="text-[#00FF00]">
              ${user && user.money.toLocaleString("en-US")}
            </span>
          </div>
          <div className="font-bold text-center text-[#FFFF00]">
            You can sell your items at 50% of their original price
          </div>

          <table className={styles["shop-table"]}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost</th>
                <th>Owned</th>
                <th>Max</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="bg-black">
                  <img
                    className="w-full p-0 m-0"
                    src="/pics/attack.gif"
                    alt="atack"
                  />
                </td>
              </tr>
              {items &&
                items
                  .filter((i) => i.type === "attack")
                  .map((item, id) => (
                    <tr key={`shop_item_${id}`}>
                      <td>
                        <a
                          className="underline cursor-pointer hover:text-secondary"
                          onClick={() => openModal(item)}
                        >
                          {item.name}
                        </a>
                      </td>
                      <td>${Number(item.cost).toLocaleString("en-US")}</td>
                      <td>{Number(item.owned).toLocaleString("en-US")}</td>
                      <td>{Number(item.maxCount).toLocaleString("en-US")}</td>
                      <td>
                        {user.grade >= item.requiredGrade ? (
                          <input
                            className="text-black w-2/3 mx-[16.6%]"
                            type="text"
                            onChange={(e) =>
                              handleChange(item._id, e.target.value)
                            }
                            value={vals[item._id] ? vals[item._id] : ""}
                          />
                        ) : (
                          <p className="text-[red] text-xs text-center">{`${getGradeString(
                            item.requiredGrade
                          )}s only!`}</p>
                        )}
                      </td>
                    </tr>
                  ))}
              <tr>
                <td colSpan={4}></td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={() => handleBuy("attack")}
                    className="bg-[white] text-black w-10"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setShowSellAlertModal("attack")}
                    className="bg-[white] text-black w-10"
                  >
                    Sell
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={5} className="bg-black">
                  <img
                    className="w-full p-0 m-0"
                    src="/pics/defence.gif"
                    alt="defence"
                  />
                </td>
              </tr>
              {items &&
                items
                  .filter((i) => i.type === "defence")
                  .map((item, id) => (
                    <tr key={`shop_item_${id}`}>
                      <td>
                        <a
                          className="underline cursor-pointer hover:text-secondary"
                          onClick={() => openModal(item)}
                        >
                          {item.name}
                        </a>
                      </td>
                      <td>${Number(item.cost).toLocaleString("en-US")}</td>
                      <td>{Number(item.owned).toLocaleString("en-US")}</td>
                      <td>{Number(item.maxCount).toLocaleString("en-US")}</td>
                      <td>
                        {user.grade >= item.requiredGrade ? (
                          <input
                            className="text-black w-2/3 mx-[16.6%]"
                            type="text"
                            onChange={(e) =>
                              handleChange(item._id, e.target.value)
                            }
                            value={vals[item._id] ? vals[item._id] : ""}
                          />
                        ) : (
                          <p className="text-[red] text-xs text-center">{`${getGradeString(
                            item.requiredGrade
                          )}s only!`}</p>
                        )}
                      </td>
                    </tr>
                  ))}
              <tr>
                <td colSpan={4}></td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={() => handleBuy("defence")}
                    className="bg-[white] text-black w-10"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setShowSellAlertModal("defence")}
                    className="bg-[white] text-black w-10"
                  >
                    Sell
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={5} className="bg-black">
                  <img
                    className="w-full p-0 m-0"
                    src="/pics/combo.gif"
                    alt="combo"
                  />
                </td>
              </tr>
              {items &&
                items
                  .filter((i) => i.type === "combo")
                  .map((item, id) => (
                    <tr key={`shop_item_${id}`}>
                      <td>
                        <a
                          className="underline cursor-pointer hover:text-secondary"
                          onClick={() => openModal(item)}
                        >
                          {item.name}
                        </a>
                      </td>
                      <td>${Number(item.cost).toLocaleString("en-US")}</td>
                      <td>{Number(item.owned).toLocaleString("en-US")}</td>
                      <td>{Number(item.maxCount).toLocaleString("en-US")}</td>
                      <td>
                        {user.grade >= item.requiredGrade ? (
                          <input
                            className="text-black w-2/3 mx-[16.6%]"
                            type="text"
                            onChange={(e) =>
                              handleChange(item._id, e.target.value)
                            }
                            value={vals[item._id] ? vals[item._id] : ""}
                          />
                        ) : (
                          <p className="text-[red] text-xs text-center">{`${getGradeString(
                            item.requiredGrade
                          )}s only!`}</p>
                        )}
                      </td>
                    </tr>
                  ))}
              <tr>
                <td colSpan={4}></td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={() => handleBuy("combo")}
                    className="bg-[white] text-black w-10"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setShowSellAlertModal("combo")}
                    className="bg-[white] text-black w-10"
                  >
                    Sell
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={5} className="bg-black">
                  <img
                    className="w-full p-0 m-0"
                    src="/pics/income.gif"
                    alt="income"
                  />
                </td>
              </tr>
              {items &&
                items
                  .filter((i) => i.type === "income")
                  .map((item, id) => (
                    <tr key={`shop_item_${id}`}>
                      <td>
                        <a
                          className="underline cursor-pointer hover:text-secondary"
                          onClick={() => openModal(item)}
                        >
                          {item.name}
                        </a>
                      </td>
                      <td>${Number(item.cost).toLocaleString("en-US")}</td>
                      <td>{Number(item.owned).toLocaleString("en-US")}</td>
                      <td>{Number(item.maxCount).toLocaleString("en-US")}</td>
                      <td>
                        {user.grade >= item.requiredGrade ? (
                          <input
                            className="text-black w-2/3 mx-[16.6%]"
                            type="text"
                            onChange={(e) =>
                              handleChange(item._id, e.target.value)
                            }
                            value={vals[item._id] ? vals[item._id] : ""}
                          />
                        ) : (
                          <p className="text-[red] text-xs text-center">{`${getGradeString(
                            item.requiredGrade
                          )}s only!`}</p>
                        )}
                      </td>
                    </tr>
                  ))}
              <tr>
                <td colSpan={4}></td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={() => handleBuy("income")}
                    className="bg-[white] text-black w-10"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setShowSellAlertModal("income")}
                    className="bg-[white] text-black w-10"
                  >
                    Sell
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} type={selectedItem.type}>
        <div className="w-[450px]">
          <div className="text-[18px] mb-3 ml-2 text-[#f0ff25] font-bold underline ">
            Item Info
          </div>
          <div className="border-2 border-b-0 w-full flex">
            <div className="w-2/5 text-center text-[red] font-bold">Name</div>
            <div className="w-[30%] text-center border-x-2 text-[red] font-bold">
              Max
            </div>
            <div className="w-[30%] text-center text-[red] font-bold">Cost</div>
          </div>
          <div className="border-2 w-full flex border-b-0">
            <div className="w-2/5 text-center">
              {selectedItem && selectedItem.name}
            </div>
            <div className="w-[30%] text-center border-x-2">
              {Number(selectedItem && selectedItem.maxCount).toLocaleString(
                "en-US"
              )}
            </div>
            <div className="w-[30%] text-center">
              {Number(selectedItem && selectedItem.cost).toLocaleString(
                "en-US"
              )}
            </div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center text-[red] font-bold">
              Attack Bonus
            </div>
            <div className="w-[30%] text-center border-x-2 text-[red] font-bold">
              Defence Bonus
            </div>
            <div className="w-[30%] text-center text-[red] font-bold">
              Income Bonus
            </div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center">
              {selectedItem && selectedItem.attackBonus}
            </div>
            <div className="w-[30%] text-center border-x-2">
              {selectedItem && selectedItem.defenceBonus}
            </div>
            <div className="w-[30%] text-center">
              {selectedItem && selectedItem.incomeBonus}
            </div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center text-[red] font-bold">
              picture
            </div>
            <div className="w-[60%] text-center border-l-2 text-[red] font-bold">
              Description
            </div>
          </div>
          <div className="border-2 w-full flex ">
            <div className="w-2/5 flex items-center justify-center">
              <img src={`/images/items/${selectedItem && selectedItem.pic}`} alt="item-pic" />
            </div>
            <div className="w-[60%] text-center border-l-2">
              {selectedItem && selectedItem.description}
            </div>
          </div>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white px-3 py-1 float-right rounded"
          >
            Close
          </button>
        </div>
      </Modal>
      <ConfirmAlert isOpen={showSellAlertModal} onClose={() => setShowSellAlertModal(null)} description="Please click OK to sell this items." onAccept={() => {
        handleSell(showSellAlertModal)}
       } />
    </Layout>
  );
};
