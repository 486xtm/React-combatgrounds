import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../../common/components";
import { getCountryInfo, nukeCountry } from "../../../api/country";
import { useDispatch, useSelector } from "react-redux";

export const NukeCountry = () => {
  const user = useSelector(({ auth }) => auth.user);
  const countries = useSelector(({ nuke }) => nuke.countries);

  const dispatch = useDispatch();

  const handleNuke = (type, countryId) => {
    nukeCountry({ type, countryId }, dispatch);
  };

  useEffect(() => {
    getCountryInfo(dispatch);
  }, []);

  useEffect(() => {
    console.log("c==>", countries);
  }, [countries]);

  return (
    <Layout currentActiveTab={"headquarters"} isHeaderFull={true}>
      <div className="flex flex-col flex-1">
        <img src="pics/nuke.gif" width="500" className="mx-auto" />
        <p className="text-center text-white text-sm">
          Nuke Country will cost you
          <span className="text-[red]"> $1,000,000,000</span>.
        </p>
        <p className="text-center text-white text-sm">
          You must have at least thelevel as it says next to the country.
        </p>
        <p className="text-center text-white text-sm">
          Each country can only be attacked once a day.
        </p>
        <p className="text-center text-white text-sm">
          The maximum number of turns to use is
          <span className="text-[red]"> 50</span>.
        </p>
        <p className="text-center text-secondary text-lg font-bold my-3">
          Your Level is 151
        </p>
        <table className={styles["nuke-country-table"]}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Level</th>
              <th>Troops</th>
              <th>Cash</th>
            </tr>
          </thead>
          <tbody>
            {countries &&
              countries.map((country, id) => (
                <tr key={`nuke_country_${id}`}>
                  <td>{country.name}</td>
                  <td>{country.level}</td>
                  <td>
                    {!user || !country || country.level > user.level ? null : (
                      <button
                        className="bg-gray-300 text-[red]"
                        onClick={() => handleNuke("troops", country._id)}
                      >
                        Nuke!
                      </button>
                    )}
                  </td>
                  <td>
                    {!user || !country || country.level > user.level ? null : (
                      <button
                        className="bg-gray-300 text-[red]"
                        onClick={() => handleNuke("cash", country._id)}
                      >
                        Nuke!
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
