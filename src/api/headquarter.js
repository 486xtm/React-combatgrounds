import axios from "./axios";
import { setRound } from "../redux/roundSlice";
import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";

export const getRound = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/round`);
    const { round, time, remain } = res.data;
    dispatch(setRound({ ...round, time, remain }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
