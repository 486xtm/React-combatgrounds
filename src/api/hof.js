import axios from "./axios";
import { ROUTES, basicURL } from "../common/constant";
import { setHofRound } from "../redux/roundSlice";
import { setToast } from "../redux/toastSlice";

export const getRoundLog = async (data, dispatch, navigate) => {
  try {
    const res = await axios.get(
      `${basicURL}/round/hof?roundId=${data.roundId || ""}`
    );
    if (!res.data.round) {
      dispatch(setToast({ type: "error", msg: res.data.msg }));
      navigate(ROUTES.MAIN_ROUTES.HEADQUARTER);
      return;
    }
    dispatch(setHofRound(res.data));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
    navigate(ROUTES.MAIN_ROUTES.HEADQUARTER);
  }
};
