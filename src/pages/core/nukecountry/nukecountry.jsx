import React from "react";
import styles from "./styles.module.css";
import { Layout } from "../../../common/components";

const countries = [
  {
    name: "Albena",
    level: 10,
  },
  {
    name: "Ethiopia",
    level: 13,
  },
  {
    name: "Thailand",
    level: 16,
  },
  {
    name: "New Caledonia",
    level: 20,
  },
  {
    name: "Afghanistan",
    level: 40,
  },
  {
    name: "Puerto Rico",
    level: 60,
  },
  {
    name: "Yugoslavia",
    level: 100,
  },
  {
    name: "Iraq",
    level: 150,
  },
];

export const NukeCountry = () => {
  return (
    <Layout currentActiveTab={"headquarters"} isHeaderFull={true}>
      <div className="flex flex-col flex-1">
        <img src="pics/nuke.gif" width="500" className="mx-auto" />
        <p className="text-center text-white text-sm">
          Nuke Country will cost you{" "}
          <span className="text-red-600">$1,000,000,000</span>.
        </p>
        <p className="text-center text-white text-sm">
          You must have at least thelevel as it says next to the country.
        </p>
        <p className="text-center text-white text-sm">
          Each country can only be attacked once a day.
        </p>
        <p className="text-center text-white text-sm">
          The maximum number of turns to use is{" "}
          <span className="text-red-600">50</span>.
        </p>
        <p className="text-center text-secondary text-lg font-bold my-3">
          Your Level is 151
        </p>
        <table className={styles["nuke-country-table"]}>
          <thead>
            <th>Country</th>
            <th>Level</th>
            <th>Troops</th>
            <th>Cash</th>
          </thead>
          <tbody>
            {countries &&
              countries.map((country, id) => (
                <tr key={`nuke_country_${id}`}>
                  <td>{country.name}</td>
                  <td>{country.level}</td>
                  <td>{country.troops}</td>
                  <td>{country.cash}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
