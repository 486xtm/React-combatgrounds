import React, { useState } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
import Modal from "../../../common/components/modal/modal";
const shopItems = {
  attack: [
    {
      name: "Grenade sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Beretta sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Tranquilizer Gun sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "M16 sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Rocket Launcher sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Automatic Machines",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Nukes",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Mass Destruction",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Chemical Warfare",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Atomic Bombs",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
  ],
  defence: [
    {
      name: "Grenade sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Beretta sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Tranquilizer Gun sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "M16 sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Rocket Launcher sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
  ],
  combo: [
    {
      name: "Grenade sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Beretta sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Tranquilizer Gun sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "M16 sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Rocket Launcher sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
  ],
  income: [
    {
      name: "Grenade sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
    {
      name: "Beretta sets",
      cost: 100000,
      owned: 111.0,
      max: 5000,
    },
  ],
};
export const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBuyAttack = () => {
    console.log("buy attack shop");
  };
  const handleSellAttack = () => {
    console.log("sell attack shop");
  };
  const handleBuyDefence = () => {
    console.log("buy defence shop");
  };
  const handleSellDefence = () => {
    console.log("sell defence shop");
  };
  const handleBuyCombo = () => {
    console.log("buy Combo shop");
  };
  const handleSellCombo = () => {
    console.log("sell Combo shop");
  };
  const handleBuyIncome = () => {
    console.log("buy Income shop");
  };
  const handleSellIncome = () => {
    console.log("sell Income shop");
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
            <span className="text-[#00FF00]">$4,506,484,349</span>
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
              {shopItems.attack.map((item, id) => (
                <tr key={`shop_item_${id}`}>
                  <td>
                    <a
                      className="underline cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      {item.name}
                    </a>
                  </td>
                  <td>${Number(item.cost).toLocaleString("en-US")}</td>
                  <td>{Number(item.owned).toLocaleString("en-US")}</td>
                  <td>{Number(item.max).toLocaleString("en-US")}</td>
                  <td>
                    <input
                      className="text-black w-2/3 mx-[16.6%]"
                      type="text"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}></td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={handleBuyAttack}
                    className="bg-[white] text-black w-10"
                  >
                    buy
                  </button>
                  <button
                    onClick={handleSellAttack}
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
              {shopItems.defence.map((item, id) => (
                <tr key={`shop_item_${id}`}>
                  <td>
                    <a
                      className="underline cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      {item.name}
                    </a>
                  </td>
                  <td>${Number(item.cost).toLocaleString("en-US")}</td>
                  <td>{Number(item.owned).toLocaleString("en-US")}</td>
                  <td>{Number(item.max).toLocaleString("en-US")}</td>
                  <td>
                    <input
                      className="text-black w-2/3 mx-[16.6%]"
                      type="text"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}></td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={handleBuyDefence}
                    className="bg-[white] text-black w-10"
                  >
                    buy
                  </button>
                  <button
                    onClick={handleSellDefence}
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
              {shopItems.combo.map((item, id) => (
                <tr key={`shop_item_${id}`}>
                  <td>
                    <a
                      className="underline cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      {item.name}
                    </a>
                  </td>
                  <td>${Number(item.cost).toLocaleString("en-US")}</td>
                  <td>{Number(item.owned).toLocaleString("en-US")}</td>
                  <td>{Number(item.max).toLocaleString("en-US")}</td>
                  <td>
                    <input
                      className="text-black w-2/3 mx-[16.6%]"
                      type="text"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}></td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={handleBuyCombo}
                    className="bg-[white] text-black w-10"
                  >
                    buy
                  </button>
                  <button
                    onClick={handleSellCombo}
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
              {shopItems.income.map((item, id) => (
                <tr key={`shop_item_${id}`}>
                  <td>
                    <a
                      className="underline cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      {item.name}
                    </a>
                  </td>
                  <td>${Number(item.cost).toLocaleString("en-US")}</td>
                  <td>{Number(item.owned).toLocaleString("en-US")}</td>
                  <td>{Number(item.max).toLocaleString("en-US")}</td>
                  <td>
                    <input
                      className="text-black w-2/3 mx-[16.6%]"
                      type="text"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}></td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={handleBuyIncome}
                    className="bg-[white] text-black w-10"
                  >
                    buy
                  </button>
                  <button
                    onClick={handleSellIncome}
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-[450px]">
          <div className="text-[18px] mb-3 ml-2 text-[#338f33] font-bold">Item Info</div>
          <div className="border-2 border-b-0 w-full flex">
            <div className="w-2/5 text-center text-red-500 font-medium">Name</div>
            <div className="w-[30%] text-center border-x-2 text-red-500 font-medium">Max</div>
            <div className="w-[30%] text-center text-red-500 font-medium">Cost</div>
          </div>
          <div className="border-2 w-full flex border-b-0">
            <div className="w-2/5 text-center">{selectedItem.name}</div>
            <div className="w-[30%] text-center border-x-2">{Number(selectedItem.max).toLocaleString("en-US")}</div>
            <div className="w-[30%] text-center">{Number(selectedItem.cost).toLocaleString("en-US")}</div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center text-red-500 font-medium">Attack Bonus</div>
            <div className="w-[30%] text-center border-x-2 text-red-500 font-medium">Defence Bonus</div>
            <div className="w-[30%] text-center text-red-500 font-medium">Income Bonus</div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center">40</div>
            <div className="w-[30%] text-center border-x-2">0</div>
            <div className="w-[30%] text-center">0</div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center text-red-500 font-medium">picture</div>
            <div className="w-[60%] text-center border-l-2 text-red-500 font-medium">Description</div>
          </div>
          <div className="border-2 w-full flex ">
            <div className="w-2/5 flex items-center justify-center"><img src = "/images/items/5.gif"/></div>
            <div className="w-[60%] text-center border-l-2">You will find the Beretta guns very useful in close-combat situations.</div>
          </div>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white px-2 py-1 float-right rounded"
          >
            Close Modal
          </button>
        </div>
      </Modal>
    </Layout>
  );
};
