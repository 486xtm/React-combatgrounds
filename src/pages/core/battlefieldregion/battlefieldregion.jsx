import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBattleField,
  putAll,
  putGo,
  takeAll,
  takeGo,
  go,
} from "../../../api/battlefield";

export const BattleFieldRegion = () => {
  const { region_id } = useParams();
  const battleField = useSelector(({ battleField }) => battleField.info);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [takeTroops, setTakeTroops] = useState("");
  const [putTroops, setPutTroops] = useState("");

  const handlePutGoClick = () => {
    if (!battleField) return;
    putGo({ putTroops, battleFieldId: battleField._id }, dispatch);
  };
  const handleTakeGoClick = () => {
    if (!battleField) return;
    takeGo({ takeTroops, battleFieldId: battleField._id }, dispatch);
  };
  const handlePutAllClick = () => {
    if (!battleField) return;
    putAll({ battleFieldId: battleField._id }, dispatch);
  };
  const handleTakeAllClick = () => {
    if (!battleField) return;
    takeAll({ battleFieldId: battleField._id }, dispatch, navigate);
  };

  const handleGoClick = (operationType) => {
    if (!battleField) return;
    go({ battleFieldId: battleField._id, operationType }, dispatch);
  };

  useEffect(() => {
    getBattleField({ region_id }, dispatch);
  }, [region_id, dispatch]);

  return (
    <Layout>
      {!battleField || !battleField.region ? null : (
        <div className="flex flex-col flex-1 items-center">
          <img
            src={`/pics/region${battleField.region.id}.gif`}
            width="350"
            height="150"
            className="mt-5"
          />
          <p className="text-[red] text-lg font-bold">
            You control this territory with {battleField.recruits} recruits
          </p>
          <div className="flex gap-5 py-3">
            <p className="text-white text-lg font-bold w-[150px]">
              Put in troops:
            </p>
            <input
              value={Number(putTroops).toLocaleString("en-US")}
              className="text-sm w-[100px] rounded px-1"
              onChange={(e) => {
                setPutTroops(e.target.value.replace(/[^0-9]/g, ""));
              }}
            />
            <button
              className="text-[red] text-sm font-bold w-[50px]"
              onClick={handlePutGoClick}
            >
              GO!
            </button>
            <button
              className="text-[red] text-sm font-bold w-[100px]"
              onClick={handlePutAllClick}
            >
              PUT ALL
            </button>
          </div>
          <div className="flex gap-5 py-3">
            <p className="text-white text-lg font-bold w-[150px]">
              Pull out troops:
            </p>
            <input
              className="text-sm w-[100px] rounded px-1"
              value={Number(takeTroops).toLocaleString("en-US")}
              onChange={(e) => {
                setTakeTroops(e.target.value.replace(/[^0-9]/g, ""));
              }}
            />
            <button
              className="text-[red] text-sm font-bold w-[50px]"
              onClick={handleTakeGoClick}
            >
              GO!
            </button>
            <button
              className="text-[red] text-sm font-bold w-[100px]"
              onClick={handleTakeAllClick}
            >
              TAKE ALL
            </button>
          </div>
          <button
            className="text-sm text-[red] font-bold mt-5 w-[250px]"
            onClick={() => handleGoClick(0)}
          >
            Exploit territory resources!
          </button>
          <p className="text-white text-xs">This option uses 25 turns</p>
          <button
            className="text-sm text-[red] font-bold mt-5 w-[250px]"
            onClick={() => handleGoClick(1)}
          >
            Recruit Massively in this region!
          </button>
          <p className="text-white text-xs">This option uses 15 turns</p>
          <button
            className="text-sm text-[red] font-bold mt-5 w-[250px]"
            onClick={() => handleGoClick(2)}
          >
            Gather intelligence in this region!
          </button>
          <p className="text-white text-xs">This option uses 200 turns</p>
        </div>
      )}
    </Layout>
  );
};
