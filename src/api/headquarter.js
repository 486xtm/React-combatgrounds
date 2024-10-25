import axios from "./axios";
const basicURL = "http://89.111.170.43:5000/api";
import { setRound } from "../redux/roundSlice";
import { setUpdateError } from "../redux/errorSlice";

export const getRound = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/round`);
    const { round } = res.data;
    dispatch(setRound(round));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};
