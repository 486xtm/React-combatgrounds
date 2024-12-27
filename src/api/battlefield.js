import axios from "./axios";

import {
  setBFs,
  setBattleField,
  setIsRuler,
  setParams,
  setRegion,
} from "../redux/battlefieldSlice";
import { setUser } from "../redux/userSlice";
import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";

export const entryRegion = async (data, navigate, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/battlefield/entry-region?regionId=${data.regionId}`
    );
    navigate(`/battlefield/${res.data.region}`);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getBattleField = async (data, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/battlefield/get-battlefield?region_id=${data.region_id}`
    );
    const { battleField, isRuler, region } = res.data;
    dispatch(setBattleField(battleField));
    dispatch(setRegion(region));
    dispatch(setIsRuler(isRuler));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const conquerRegion = async (data, dispatch, navigate, socket) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/conquer`, data);
    const {
      user,
      battleField,
      region,
      isRuler,
      ambushType,
      amount,
      _msg,
      oldOwner,
      region_id,
    } = res.data;
    dispatch(setUser(user));
    dispatch(setRegion(region));
    dispatch(setBattleField(battleField));
    dispatch(setIsRuler(isRuler));
    if (data.type) {
      socket.emit("ambush", { ambushType, amount, _msg, oldOwner, region_id });
    }
    dispatch(setToast({ type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    if (err.response?.data.msg.indexOf("No one") > -1) {
    } else if (err.response?.data.msg.indexOf("Someone") > -1) {
      // dispatch(setIsConqueredByOthers(true));
    }
  }
};

export const takeGo = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/take-go`, data);
    const { battleField, user } = res.data;
    dispatch(setUser(user));
    dispatch(setBattleField(battleField));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const putAll = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/put-all`, data);
    const { battleField, user } = res.data;
    dispatch(setUser(user));
    dispatch(setBattleField(battleField));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const takeAll = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/take-all`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    navigate("/map");
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const putGo = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/put-go`, data);
    const { battleField, user } = res.data;
    dispatch(setBattleField(battleField));
    dispatch(setUser(user));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const go = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/go`, data);
    const { user, battleField } = res.data;
    dispatch(setUser(user));
    dispatch(setBattleField(battleField));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const checkBFs = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/battlefield/all`);
    const { battles } = res.data;
    dispatch(setBFs(battles));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

//admin-params
export const getAllParams = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/battlefield/params`);
    const { params } = res.data;
    dispatch(setParams(params));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
}

export const removeParams = async(data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/battlefield/params`, data);
    dispatch(setToast({type: 'success', msg: res.data.msg || "success"}));
    getAllParams(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
}

export const updateParams = async(data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/battlefield/params`, data);
    dispatch(setToast({type: 'success', msg: res.data.msg || "success"}));
    getAllParams(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
}

export const addParams = async(data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/battlefield/params`, data);
    dispatch(setToast({type: 'success', msg: res.data.msg || "success"}));
    getAllParams(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
}