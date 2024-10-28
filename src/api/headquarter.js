import axios from "./axios";
import { setRound } from "../redux/roundSlice";
import { setUpdateError } from "../redux/errorSlice";
import { basicURL } from "../common/constant";

export const getRound = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/round`);
    const { round, time, remain } = res.data;
    dispatch(setRound({...round, time, remain }));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};
