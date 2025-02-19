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
  conquerRegion,
} from "../../../api/battlefield";
import { socket } from "../../../socket/socket";

import {
  setBattleField,
  setIsRuler,
  setRegion,
} from "../../../redux/battlefieldSlice";
import { ConfirmAlert } from "../../../common/components/confirm_alert/confirm_alert";

export const BattleFieldRegion = () => {
  const { region_id } = useParams();

  const battleField = useSelector(({ battleField }) => battleField.info);
  const isRuler = useSelector(({ battleField }) => battleField.isRuler);
  const region = useSelector(({ battleField }) => battleField.region);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [takeTroops, setTakeTroops] = useState("");
  const [putTroops, setPutTroops] = useState("");
  const [showConfirmAlert, setShowConfirmAlert] = useState(false);

  const handleConquer = () => {
    conquerRegion(
      { region_id, type: !!battleField },
      dispatch,
      navigate,
      socket
    );
  };

  const handlePutGoClick = () => {
    if (!battleField) return;
    putGo({ putTroops, battleFieldId: battleField._id }, dispatch);
    setPutTroops(0);
  };
  const handleTakeGoClick = () => {
    if (!battleField) return;
    takeGo({ takeTroops, battleFieldId: battleField._id }, dispatch);
    setTakeTroops(0);
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
    if (operationType === 2) {
      setShowConfirmAlert(true);
      return;
    }
    go({ battleFieldId: battleField._id, operationType }, dispatch);
  };

  useEffect(() => {
    getBattleField({ region_id }, dispatch);
  }, [region_id, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setBattleField(null));
      dispatch(setRegion(null));
      dispatch(setIsRuler(null));
    };
  }, []);

  return (
    <Layout>
      {battleField && isRuler ? (
        <div className="flex flex-col flex-1 items-center">
          <img
            src={`/pics/region${battleField.region.id}.gif`}
            width="350"
            height="150"
            className="mt-5"
            alt="region.png"
          />
          <p className="text-[red] text-lg font-bold">
            You control this territory with {battleField.recruits} recruits
          </p>
          <div className="flex gap-5 py-3">
            <p className="text-white text-lg font-bold w-[150px]">
              Put in troops:
            </p>
            <input
              value={putTroops ? Number(putTroops).toLocaleString("en-US") : ""}
              className="text-sm w-[100px] rounded px-1"
              onChange={(e) => {
                setPutTroops(e.target.value.replace(/[^0-9]/g, ""));
              }}
            />
            <button
              className="text-[red] text-sm font-bold w-[50px] bg-gray-100 px-2 rounded-md"
              onClick={handlePutGoClick}
            >
              GO!
            </button>
            <button
              className="text-[red] text-sm font-bold w-[100px] bg-gray-100 px-2 rounded-md"
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
              value={
                takeTroops ? Number(takeTroops).toLocaleString("en-US") : ""
              }
              onChange={(e) => {
                setTakeTroops(e.target.value.replace(/[^0-9]/g, ""));
              }}
            />
            <button
              className="text-[red] text-sm font-bold w-[50px] bg-gray-100 px-2 rounded-md"
              onClick={handleTakeGoClick}
            >
              GO!
            </button>
            <button
              className="text-[red] text-sm font-bold w-[100px] bg-gray-100 px-2 rounded-md"
              onClick={handleTakeAllClick}
            >
              TAKE ALL
            </button>
          </div>
          <button
            className="text-sm text-[red] font-bold mt-5 w-[250px] bg-gray-100 px-2 rounded-md"
            onClick={() => handleGoClick(0)}
          >
            Exploit territory resources!
          </button>
          <p className="text-white text-xs">This option uses 25 turns</p>
          <button
            className="text-sm text-[red] font-bold mt-5 w-[250px] bg-gray-100 px-2 rounded-md"
            onClick={() => handleGoClick(1)}
          >
            Recruit Massively in this region!
          </button>
          <p className="text-white text-xs">This option uses 15 turns</p>
          <button
            className="text-sm text-[red] font-bold mt-5 w-[250px] bg-gray-100 px-2 rounded-md"
            onClick={() => handleGoClick(2)}
          >
            Gather intelligence in this region!
          </button>
          <p className="text-white text-xs">This option uses 200 turns</p>
        </div>
      ) : (
        region && (
          <div className="flex flex-col flex-1 items-center mt-5">
            <img
              src={`/pics/region${region.id}.gif`}
              width="350"
              height="150"
              alt="region.png"
            />
            <p className="text-[red] text-xl font-bold my-5">
              {!battleField ? (
                "Free Territory"
              ) : (
                <>
                  <span className="text-secondary underline">
                    {battleField.player.name}
                  </span>
                  {` conquered this region with ${battleField.recruits} troops`}
                </>
              )}
            </p>
            <button
              className="bg-gray-200 px-2 text-sm font-bold text-[red] my-3"
              onClick={handleConquer}
            >
              {battleField ? "Ambush!" : "Conquer Territory!"}
            </button>
            <p className="text-white text-xs">
              {battleField
                ? "This option uses 7 turns"
                : "This option uses 15 turns"}
            </p>
          </div>
        )
      )}

      <ConfirmAlert
        isOpen={showConfirmAlert}
        onAccept={() => {
          go({ battleFieldId: battleField._id, operationType: 2 }, dispatch);
          setShowConfirmAlert(false);
        }}
        onClose={() => setShowConfirmAlert(false)}
        description={
          "This operation requires 200 turns.\nAlso you should have at least 75,000 troops.\nAre you ready?"
        }
      />
    </Layout>
  );
};
