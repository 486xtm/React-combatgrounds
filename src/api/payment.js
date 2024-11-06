import axios from "./axios";
import { basicURL } from "../common/constant";

export const verifyPaymentOrder = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/payment/verify`, data);
    
    // dispatch(setRound({...round, time, remain }));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};
