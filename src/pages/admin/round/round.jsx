import React, { useState, useEffect } from "react";
import { getRound } from "../../../api/headquarter";
import { useDispatch, useSelector } from "react-redux";
import { updateBounty, updateIsHolidayRound, updateSalesEnabled } from "../../../api/admin";

export const RoundData = () => {
  const [newBounty, setNewBounty] = useState(""); // Keep initial state as an empty string
  const [salesEnabled, setSalesEnabled] = useState(false);
  const [isHolidayRound, setIsHolidayRound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const round = useSelector(({ round }) => round.info);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await getRound(dispatch);
      } catch (err) {
        setError("Failed to fetch round data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (round) {
      setNewBounty(round.bounty !== undefined ? round.bounty : ""); // Ensure newBounty is always a string
      setSalesEnabled(round.salesEnabled);
      setIsHolidayRound(round.isHolidayRound);
    }
  }, [round]);

  const handleBountyUpdate = async () => {
    setLoading(true);
    try {
      await updateBounty({ newBounty }, dispatch);
    } catch (err) {
      setError("Failed to update bounty.");
    } finally {
      setLoading(false);
    }
  };

  const handleSalesEnabledUpdate = async () => {
    setLoading(true);
    try {
      await updateSalesEnabled({ salesEnabled }, dispatch);
    } catch (err) {
      setError("Failed to update sales enabled status.");
    } finally {
      setLoading(false);
    }
  };

  const handleIsHolidayRoundUpdate = async () => {
    setLoading(true);
    try {
      await updateIsHolidayRound({ isHolidayRound }, dispatch);
    } catch (err) {
      setError("Failed to update sales enabled status.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <p className="text-3xl font-extrabold text-left">Round Data:</p>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex items-center bg-white px-5 py-7 rounded-lg">
        <span className="text-xl font-bold w-[200px]">Cash Bounty: </span>
        <input
          className="border border-gray-400 rounded p-1 ml-2"
          value={newBounty} // Controlled input
          onChange={(e) => setNewBounty(e.target.value)}
        />
        <button
          className="bg-[#014CFA] rounded-lg py-2 px-5 ml-auto text-white shadow-lg hover:bg-blue-500 mt-2"
          onClick={handleBountyUpdate}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
      <div className="flex items-center bg-white px-5 py-7 rounded-lg">
        <span className="text-xl font-bold w-[200px]">Discounted Sales: </span>
        <input
          className="border border-gray-400 rounded ml-5 text-2xl"
          checked={salesEnabled || false}
          type="checkbox"
          onChange={(e) => setSalesEnabled(e.target.checked)}
          aria-label="Sales Enabled Checkbox"
        />
        <button
          onClick={handleSalesEnabledUpdate}
          className="bg-[#014CFA] rounded-lg py-2 px-5 ml-auto text-white shadow-lg hover:bg-blue-500 mt-2"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
      <div className="flex items-center bg-white px-5 py-7 rounded-lg">
        <span className="text-xl font-bold w-[200px]">Holiday Round: </span>
        <input
          className="border border-gray-400 rounded ml-5 text-2xl"
          checked={isHolidayRound || false}
          type="checkbox"
          onChange={(e) => setIsHolidayRound(e.target.checked)}
          aria-label="Sales Enabled Checkbox"
        />
        <button
          onClick={handleIsHolidayRoundUpdate}
          className="bg-[#014CFA] rounded-lg py-2 px-5 ml-auto text-white shadow-lg hover:bg-blue-500 mt-2"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </div>
  );
};
