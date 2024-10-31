import axios from "./axios";
import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";
import { setItems } from "../redux/shopSlice";
import { setUser } from "../redux/userSlice";
import { setUpdateError } from "../redux/errorSlice";

export const getItems = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/shop/items`);
    const { items } = res.data;
    dispatch(setItems(items));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const buyItems = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/shop/buy`, data);
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

export const sellItems = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/shop/sell`, data);
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
