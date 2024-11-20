import { setToast } from "../redux/toastSlice";
import { setMission, setUser } from "../redux/userSlice";

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
    const res = await axios.post(`${basicURL}/user/accept_mission`);
    const { user, msg } = res.data;
    dispatch(setUser(user));
    dispatch(setToast({ type: "succeess", msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
