import React from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
const shopItems = {
  attack: [
    {
      name: "Grenade sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Beretta sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Tranquilizer Gun sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "M16 sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Rocket Launcher sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Automatic Machines",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Nukes",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Mass Destruction",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Chemical Warfare",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Atomic Bombs",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
  ],
  defence :[
    {
      name: "Grenade sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Beretta sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Tranquilizer Gun sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "M16 sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Rocket Launcher sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
  ],
  combo :[
    {
      name: "Grenade sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Beretta sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Tranquilizer Gun sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "M16 sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Rocket Launcher sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
  ],
  income :[
    {
      name: "Grenade sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    },
    {
      name: "Beretta sets",
      cost: 100000,
      owned: 111.00,
      max: 5000
    }
  ]
}
export const Shop = () => {
  return (
    <Layout currentActiveTab={"headquarters"} isHeaderFull={true}>
      <div className="flex flex-col w-full my-3 mx-5">
        <div className="mx-auto">
          <img src="/pics/shop.gif" alt="shop" />
        </div>
        <div className={"text-white w-full h-full px-3 py-5 " + styles["shop_back_container"]}>
          <div className="font-bold text-center">Available Money: <span className="text-[#00FF00]">$4,506,484,349</span></div>
          <div className="font-bold text-center text-[#FFFF00]">You can sell your items at 50% of their original price</div>

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
            <tr><td colSpan={5} className="bg-black"><img className="w-full p-0 m-0" src="/pics/attack.gif" alt="atack" /></td></tr>
            {
              shopItems.attack.map((item, id) => (
                <tr key = {`shop_item_${id}`}>
                  <td>{item.name}</td>
                  <td>${item.cost}</td>
                  <td>{item.owned}</td>
                  <td>{item.max}</td>
                  <td><input className="text-black w-2/3 mx-[16.6%]" type = 'text' /></td>
                </tr>
              ))
            }
            <tr>
              <td colSpan={4}></td>
              <td className="flex gap-2 justify-center items-center">
                <button className="bg-[white] text-black w-10">buy</button>
                <button className="bg-[white] text-black w-10">Sell</button>
              </td>
            </tr>
            <tr><td colSpan={5} className="bg-black"><img className="w-full p-0 m-0" src="/pics/defence.gif" alt="defence" /></td></tr>
            {
              shopItems.defence.map((item, id) => (
                <tr key = {`shop_item_${id}`}>
                  <td>{item.name}</td>
                  <td>${item.cost}</td>
                  <td>{item.owned}</td>
                  <td>{item.max}</td>
                  <td><input className="text-black w-2/3 mx-[16.6%]" type = 'text' /></td>
                </tr>
              ))
            }
            <tr>
              <td colSpan={4}></td>
              <td className="flex gap-2 justify-center items-center">
                <button className="bg-[white] text-black w-10">buy</button>
                <button className="bg-[white] text-black w-10">Sell</button>
              </td>
            </tr>
            <tr><td colSpan={5} className="bg-black"><img className="w-full p-0 m-0" src="/pics/combo.gif" alt="combo" /></td></tr>
            {
              shopItems.combo.map((item, id) => (
                <tr key = {`shop_item_${id}`}>
                  <td>{item.name}</td>
                  <td>${item.cost}</td>
                  <td>{item.owned}</td>
                  <td>{item.max}</td>
                  <td><input className="text-black w-2/3 mx-[16.6%]" type = 'text' /></td>
                </tr>
              ))
            }
            <tr>
              <td colSpan={4}></td>
              <td className="flex gap-2 justify-center items-center">
                <button className="bg-[white] text-black w-10">buy</button>
                <button className="bg-[white] text-black w-10">Sell</button>
              </td>
            </tr>
            <tr><td colSpan={5} className="bg-black"><img className="w-full p-0 m-0" src="/pics/income.gif" alt="income" /></td></tr>
            {
              shopItems.income.map((item, id) => (
                <tr key = {`shop_item_${id}`}>
                  <td>{item.name}</td>
                  <td>${item.cost}</td>
                  <td>{item.owned}</td>
                  <td>{item.max}</td>
                  <td><input className="text-black w-2/3 mx-[16.6%]" type = 'text' /></td>
                </tr>
              ))
            }
            <tr>
              <td colSpan={4}></td>
              <td className="flex gap-2 justify-center items-center">
                <button className="bg-[white] text-black w-10">buy</button>
                <button className="bg-[white] text-black w-10">Sell</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </Layout>
  );
};
