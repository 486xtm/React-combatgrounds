import { setToast } from "../redux/toastSlice";

export const homeleave = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/user/homeleave`, data);
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: "success" }));
  } catch (err) {
    dispatch(setUpdateError(err.message));
  }
};

export const training = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/user/train`, data);
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: "success" }));
  } catch (err) {
    dispatch(setUpdateError(err.message));
  }
};
