import { basicURL } from "../common/constant";
import { setBoard, setInfo, setInvites, setMembers } from "../redux/crewSlice";
import { setBank, setBosses, setCrew, setCrewAds } from "../redux/crewSlice";
import { setToast } from "../redux/toastSlice";
import { setUser } from "../redux/userSlice";
import axios from "./axios";

export const createCrew = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${basicURL}/crew/create_crew`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
    // setTimeout(() => {
    navigate(`/crew_profile/${user.crew}`);
    // },2000)
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const editCrew = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/crew/update_crew`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

//ads

export const create_ads = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/crew/create_crew_ads`, data);
    const { ads } = res.data;
    dispatch(setCrewAds(ads));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
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
    dispatch(setCrewAds(ads));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

//bank
export const deposit = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/crew/deposit`, data);
    const { countDeposit, crew, user } = res.data;
    dispatch(setCrew({ ...crew, countDeposit }));
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCrew = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/my_crew`);
    const { countDeposit, crew } = res.data;
    dispatch(setCrew({ ...crew, countDeposit }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCrewMembers = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/crew_members`);
    dispatch(setMembers(res.data.members));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getBosses = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/crew_bosses`);
    const { bosses } = res.data;
    dispatch(setBosses(bosses));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const attackBoss = async (data, dispatch, socket) => {
  try {
    const res = await axios.post(`${basicURL}/crew/attack_boss`, data);
    const { bosses, rewards, _msg, crew_members } = res.data;
    dispatch(setBosses(bosses));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    socket.emit("attack_boss", { crew_members, msg: _msg, rewards });
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getInvites = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/invites`);
    const { invites } = res.data;
    dispatch(setInvites(invites));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const createInvite = async (data, dispatch, socket) => {
  try {
    const res = await axios.post(`${basicURL}/crew/create_invites`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    socket.emit("send invite request", { ...data, from: res.data.crew_name });
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const dealInvite = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${basicURL}/crew/deal_invites`, data);
    const { invites, user } = res.data;
    dispatch(setInvites(invites));
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    if(data.type) navigate(`/crew_profile/${user.crew}`);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const leaveCrew = async (dispatch, navigate) => {
  try {
    const res = await axios.delete(`${basicURL}/crew/leave_crew`);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    navigate("/crew_invites");
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const bootMember = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/crew/boot_member`, data);
    const { members } = res.data;
    dispatch(setMembers(members));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const makeLeader = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/crew/change_leader`, data);
    const { members } = res.data;
    dispatch(setMembers(members));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const uplaodAvatar = async (data, dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", data.crewAvatar);

    const res = await axios.post(`${basicURL}/upload/upload_avatar`, formData, {
      "Content-Type": "multipart/form-data",
    });

    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCrewInfo = async (data, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/crew/crew_info?crew_id=${data.crew_id}`
    );
    const { info, crewNetworth, averageNetworth } = res.data;
    dispatch(setInfo({ ...info, netWorth: crewNetworth, averageNetworth }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

//crew-chat
export const getCrewBoard = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/crew_board`);
    const { board } = res.data;
    dispatch(setBoard(board));
  } catch (err) {
    setToast({ type: "error", msg: err.response?.data.msg || err.message });
  }
};

export const createCrewChat = async (data, dispatch, socket) => {
  try {
    const res = await axios.post(`${basicURL}/crew/crew_board`, data);
    const { board, chat_members } = res.data;
    socket.emit("crew_chat", { chat_members });
    dispatch(setBoard(board));
  } catch (err) {
    setToast({ type: "error", msg: err.response?.data.msg || err.message });
  }
};

export const crewDisbaned = async (dispatch, navigate) => {
  try {
    const res = await axios.delete(`${basicURL}/crew/disbaned`);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    navigate("/crew_invites");
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateRole = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/crew/change_role`, data);
    const { members } = res.data;
    dispatch(setMembers(members));
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
