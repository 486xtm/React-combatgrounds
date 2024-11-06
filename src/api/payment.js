import axios from "./axios";
import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";
import { setUser } from "../redux/userSlice";

export const verifyPaymentOrder = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/payment/verify`, data);
    const { user } = res.data;
    if (!data.receiver) dispatch(setUser(user));
    dispatch(
      setToast({
        type: "success",
        msg: `You've just purchased ${data.buyTurn.total.toLocaleString(
          "en-US"
        )} turns ${data.receiver ? `for ${data.receiver} ` : ""}successfully!`,
      })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const transfer = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/payment/transfer`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(
      setToast({
        type: "success",
        msg: `You've just transfered ${data.transferTurn.toLocaleString(
          "en-US"
        )} turns from your bank to the round.`,
      })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const subscribe = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/payment/subscribe`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: "Successfully Subscribed!" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
