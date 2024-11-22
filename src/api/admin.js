import { basicURL } from "../common/constant";
import {
  setAds,
  setBattleHistory,
  setBattles,
  setCrews,
  setDashBoard,
  setMails,
  setNukeHisotry,
  setSelectedCrew,
  setTransactionHistory,
  setUsers,
} from "../redux/adminSlice";
import { setToast } from "../redux/toastSlice";
import axios from "./axios";
import { getCountryInfo } from "./country";
import { getBosses } from "./crew";
import { getUserById } from "./user";

//admin
export const getAllUserInfo = async (sortBy, page, dispatch) => {
  try {
    const urlSearchParams = new URLSearchParams(sortBy).toString();
    const res = await axios.get(
      `${basicURL}/user/all_infor?${urlSearchParams}&page=${page.currentPage}`
    );
    const { users, total } = res.data;
    dispatch(setUsers({users, tot: total}));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const deleteUser = async (sortBy, page, data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/user/delete`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getAllUserInfo(sortBy, page, dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const resetUser = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/update_info`, { data });
    dispatch(setToast({ type: "success", msg: res.data.msg || "succeess" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeAvatar = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/remove_avatar`, data);

    dispatch(setToast({ type: "success", msg: res.data.msg || "succeess" }));
    getUserById({ id: data.user_id }, dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getAllCrew = async (sortBy, dispatch) => {
  try {
    const urlSearchParams = new URLSearchParams(sortBy).toString();
    const res = await axios.get(`${basicURL}/crew/crews?${urlSearchParams}`);
    const { crews } = res.data;
    dispatch(
      setCrews(
        sortBy.tag !== "leader" && sortBy.tag !== "members"
          ? crews
          : crews.sort((a, b) => {
              if (sortBy.tag === "leader") {
                return sortBy.des
                  ? a.leader.name.localeCompare(b.leader.name)
                  : -1 * a.leader.name.localeCompare(b.leader.name);
              } else {
                return sortBy.des
                  ? a.members.length - b.members.length
                  : b.members.length - a.members.length;
              }
            })
      )
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCrewAds = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/crew_ads`);
    const { ads } = res.data;
    dispatch(setAds(ads));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeCrew = async (sortBy, data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/crew/remove`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getAllCrew(sortBy, dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCrewInfoById = async (data, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/crew/detail?crew_id=${data.crew_id}`
    );
    const { info, crewNetworth, averageNetworth, board } = res.data;
    dispatch(
      setSelectedCrew({
        ...info,
        netWorth: crewNetworth,
        averageNetworth,
        board,
      })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeChat = async (data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/crew/board`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getCrewInfoById(data, dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeCrewAvatar = async (data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/crew/avatar`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getCrewInfoById(data, dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateCrewInfo = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/crew/update`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getDashBoardData = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/user/dashboard`);
    dispatch(setDashBoard(res.data.dashboard));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getAllMails = async (page, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/message/all?page=${page.currentPage}`
    );
    dispatch(setMails({mails: res.data.mails, tot: res.data.total}));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeMail = async (data, page, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/message/remove`, data);
    getAllMails(page, dispatch);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeAdById = async (data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/crew/ads`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getCrewAds(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const addCountry = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/country/add`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getCountryInfo(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeCountry = async (data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/country/remove`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getCountryInfo(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateCountry = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/country/update`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getCountryInfo(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

// export const removeItem = async (data, dispatch) => {
//   try {
//     const res = await axios.delete(`${basicURL}/shop/remove`, data);
//     dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
//     getCountryInfo(dispatch);
//   } catch (err) {
//     dispatch(
//       setToast({ type: "error", msg: err.response?.data.msg || err.message })
//     );
//   }
// };

export const updateItem = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/shop/update`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const addBoss = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/crew/add_boss`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getBosses(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeBoss = async (data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/crew/remove_boss`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getBosses(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateBoss = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/crew/update_boss`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getBosses(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getAllBattleField = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/battlefield/all`);
    dispatch(setBattles(res.data.battles));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const pullOutBattle = async (battle, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/battlefield/remove`, battle);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getAllBattleField(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getNukeHistory = async (page, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/country/history?page=${page.currentPage}`
    );
    dispatch(setNukeHisotry({ nuke: res.data.history, tot: res.data.total }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getTransactionHistory = async (page, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/payment/history?page=${page.currentPage}`
    );
    dispatch(
      setTransactionHistory({ txs: res.data.history, tot: res.data.total })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getBattleHistory = async (page, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/battlefield/history?page=${page.currentPage}`
    );
    dispatch(setBattleHistory({ bts: res.data.history, tot: res.data.total }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
