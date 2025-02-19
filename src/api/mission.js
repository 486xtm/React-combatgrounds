import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";
import { setMission } from "../redux/userSlice";
import { getUserInfo } from "./user";
import axios from "./axios";

export const getMission = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/user/mission`);
    dispatch(setMission(res.data.mission));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const acceptMission = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/user/accept_mission`, data);
    const { msg } = res.data;
    dispatch(setToast({ type: "success", msg }));
    getUserInfo(dispatch);
    getMission(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
