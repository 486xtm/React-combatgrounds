import axios from "./axios";

import { setUpdateError } from "../redux/errorSlice";
import { setBattleField } from "../redux/battlefieldSlice";
import { setUser } from "../redux/userSlice";
import { basicURL } from "../common/constant";

export const conquerRegion = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/conquer`, data);
    const { user, battleField } = res.data;
    dispatch(setUser(user));
    console.log("battleField", battleField);
    dispatch(setBattleField(battleField));
    dispatch(setUpdateError(null));
    navigate(`/battlefield/${battleField.region._id}`);
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const entryRegion = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/entry-region`, data);
    // const { user } = res.data;
    const { isAlreadyConquered, battleField } = res.data;
    dispatch(setBattleField(battleField));
    dispatch(setUpdateError(null));
    if (isAlreadyConquered && navigate) {
      console.log("okokok", battleField);
      navigate(`/battlefield/${battleField.region._id}`);
    }
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const getBattleField = async (data, dispatch) => {
  console.log("data===>", data);
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
  }
};

export const takeGo = async (data, dispatch) => {
  console.log("data===>", data);
  try {
    const res = await axios.post(`${basicURL}/battlefield/take-go`, data);
    // const { user } = res.data;
    const { battleField, user } = res.data;
    dispatch(setUser(user));
    dispatch(setBattleField(battleField));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const putAll = async (data, dispatch) => {
  console.log("data===>", data);
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

export const takeAll = async (data, dispatch) => {
  console.log("data===>", data);
  try {
    const res = await axios.post(`${basicURL}/battlefield/take-all`, data);
    // const { user } = res.data;
    const { battleField, user } = res.data;
    dispatch(setUser(user));
    dispatch(setBattleField(battleField));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const putGo = async (data, dispatch) => {
  console.log("data===>", data);
  try {
    const res = await axios.post(`${basicURL}/battlefield/put-go`, data);
    // const { user } = res.data;
    const { battleField, user } = res.data;
    dispatch(setBattleField(battleField));
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const go = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/go`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};
