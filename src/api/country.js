import axios from "./axios";
import { setNukeCountryError } from "../redux/errorSlice";
import { setCountries } from "../redux/nukeSlice";
import { login } from "../redux/authSlice";
import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";

export const nukeCountry = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/country/nuke`, data);
    const { user } = res.data;
    dispatch(login(user));
    dispatch(setNukeCountryError(null));
    dispatch(setToast({type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(setToast({type: "error", msg: err.response?.data.msg || err.message}));
    dispatch(
      setNukeCountryError({ msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCountryInfo = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/country/info`);
    dispatch(setCountries(res.data));
    dispatch(setNukeCountryError({ msg: null }));
  } catch (err) {
    dispatch(
      setNukeCountryError({ msg: err.response?.data.msg || err.message })
    );
  }
};
