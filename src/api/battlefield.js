import axios from "./axios";

import { setUpdateError } from "../redux/errorSlice";
import {
  setBattleField,
  setIsConqueredByOthers,
} from "../redux/battlefieldSlice";
import { setUser } from "../redux/userSlice";
import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";

export const conquerRegion = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/conquer`, data);
    const { user, battleField } = res.data;
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
    if (!data.type) {
      dispatch(setBattleField(battleField));
      navigate(`/battlefield/${battleField.region._id}`);
    }
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    if (err.response?.data.msg.indexOf("No one") > -1) {
      dispatch(setIsConqueredByOthers(false));
    } else if (err.response?.data.msg.indexOf("Someone") > -1) {
      dispatch(setIsConqueredByOthers(true));
    }
  }
};

export const entryRegion = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/entry-region`, data);
    // const { user } = res.data;
    const { isAlreadyConquered, battleField, isOwnerOfRegion } = res.data;
    dispatch(setUpdateError(null));
    if (isOwnerOfRegion) {
      dispatch(setBattleField(battleField));
      dispatch(setIsConqueredByOthers(false));
      navigate(`/battlefield/${battleField.region._id}`);
    } else if (isAlreadyConquered) {
      dispatch(setIsConqueredByOthers(true));
    }
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const getBattleField = async (data, dispatch) => {
  try {
    const res = await axios.post(
      `${basicURL}/battlefield/get-battlefield`,
      data
    );
    // const { user } = res.data;
    const { battleField } = res.data;
    dispatch(setBattleField(battleField));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const takeGo = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/take-go`, data);
    // const { user } = res.data;
    const { battleField, user } = res.data;
    dispatch(setUser(user));
    dispatch(setBattleField(battleField));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const putAll = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/put-all`, data);
    // const { user } = res.data;
    const { battleField, user } = res.data;
    dispatch(setUser(user));
    dispatch(setBattleField(battleField));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const takeAll = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/take-all`, data);
    // const { user } = res.data;
    const { user } = res.data;
    dispatch(setUser(user));
    // dispatch(setBattleField(battleField));
    dispatch(setUpdateError(null));
    navigate("/map");
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const putGo = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/put-go`, data);
    // const { user } = res.data;
    const { battleField, user } = res.data;
    dispatch(setBattleField(battleField));
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const go = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/go`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
