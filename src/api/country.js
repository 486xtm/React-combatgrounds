import axios from "./axios";
const basicURL = "http://89.111.170.43:5000/api";
import { setNukeCountryError } from "../redux/errorSlice";
import { setCountries } from "../redux/nukeSlice";
import { login } from "../redux/authSlice";

export const nukeCountry = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/country/nuke`, data);
    const { user } = res.data;
    dispatch(login(user));
    dispatch(setNukeCountryError(null));
  } catch (err) {
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
