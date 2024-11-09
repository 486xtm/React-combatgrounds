import { basicURL } from "../common/constant";
import { setBank, setBosses, setCrew, setCrewAds } from "../redux/crewSlice";
import { setToast } from "../redux/toastSlice";
import { setUser } from "../redux/userSlice";
import axios from "./axios";

export const createCrew = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/crew/create_crew`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

//ads

export const create_ads = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/crew/create_crew_ads`, data);
    const { ads } = res.data;
    dispatch(setCrewAds(ads));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCrewAds = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/crew_ads`);
    const { ads } = res.data;
    dispatch(setCrewAds(ads));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

//bank
export const deposit = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/crew/deposit`, data);
    const { countDeposit, crew, user } = res.data;
    dispatch(setCrew({ ...crew, countDeposit }));
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCrew = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/my_crew`);
    const { countDeposit, crew } = res.data;
    dispatch(setCrew({ ...crew, countDeposit }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getBosses = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/crew_bosses`);
    const { bosses } = res.data;
    dispatch(setBosses(bosses));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const attackBoss = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/crew/attack_boss`, data);
    const { bosses } = res.data;
    dispatch(setBosses(bosses));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
