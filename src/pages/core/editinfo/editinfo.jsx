import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";
import {
  getUserInfo,
  updateAvatar,
  updateCharacterType,
  updateEmail,
  updateName,
  updatePassword,
  updateProfileInfo,
  updateYoutube,
} from "../../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const EditInfo = () => {
  const user = useSelector(({ user }) => user.user);

  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [characterType, setCharacterType] = useState(user.characterType || "Soldier");
  const [newName, setNewName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [aimName, setAIMName] = useState(user.aimName || "");
  const [description, setDescription] = useState(user.description || "");
  const [youtube, setYoutube] = useState(user.youtube.youtube || "");
  const [enableYoutube, setEnableYoutube] = useState(user.youtube.enableYoutube|| false);
  const [autoYoutube, setAutoYoutube] = useState(user.youtube.autoYoutube|| false);
  const [descriptionReaminLetters, setDescriptionReaminLetters] = useState(450);
  const [avatar, setAvatar] = useState(null);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEmailSubmit = () => {
    updateEmail({ newEmail }, dispatch);
  };

  const changeNameSubmit = () => {
    updateName({ newName }, dispatch);
  };

  const changePasswordSubmit = () => {
    updatePassword(
      {
        oldPassword,
        newPassword: password,
        confirmNewPassword: confirmPassword,
      },
      dispatch
    );
  };

  const changeCharacterTypeSubmit = () => {
    updateCharacterType({ characterType }, dispatch);
  };

  const changeBioSubmit = () => {
    updateProfileInfo({ aimName, description }, dispatch);
  };

  const changeYoutubeSubmit = () => {
    updateYoutube(
      { youtube: { youtube, enableYoutube, autoYoutube } },
      dispatch
    );
  };

  const changeAvatar = () => {
    updateAvatar({ avatar }, dispatch);
  };

  useEffect(() => {
    setDescriptionReaminLetters(450 - description.length);
  }, [description]);

  return (
    <Layout currentActiveTab={"headquarters"}>
      <div className="flex-1 flex flex-col mx-[40px]">
        <p className="text-secondary text-xl font-bold text-center mt-5">
          Edit Profile info
        </p>
        <div className="flex flex-col border-2 border-gray-500 bg-custom-gray mt-5">
          <div className="flex flex-col p-3">
            <div className="flex gap=30px">
              <span className="text-white font-bold text-sm w-[110px]">
                Discord name:
              </span>
              <input
                className="flex-1 text-sm px-2 py-1"
                value={aimName}
                onChange={(e) => setAIMName(e.target.value)}
              />
            </div>
            <div className="flex gap-30px mt-5">
              <span className="text-white font-bold text-sm w-[110px]">
                Profile description
              </span>
              <textarea
                className="flex-1 text-sm px-2 py-1"
                maxLength={450}
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex mt-5 mx-auto gap-3">
              <span className="text-sm text-white text-bold">
                {descriptionReaminLetters} characters left
              </span>
              <button onClick={changeBioSubmit}>Update Info</button>
            </div>
          </div>
          <div className="flex flex-col p-3 gap-3 border-t-2 border-gray-400">
            <div className="flex justify-between">
              <span className="text-white text-sm font-bold">
                Upload image:
              </span>
              <input
                type="file"
                className="text-xs min-w-[400px]"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[red] text=xs font-bold">
                Only GIF's-max 300*300/60k
              </span>
              <button onClick={changeAvatar}>Submit</button>
            </div>
          </div>
          <div className="flex flex-col border-t-2 border-gray-400 p-3 gap-5">
            <div className="flex justify-between">
              <span className="text-sm font-bold text-white">
                YouTube Video
              </span>
              <input
                placeholder="example: www.youtube.com/watch?v=abcdef"
                className="min-w-[400px] text-xs px-1"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
            </div>
            <div className="flex">
              <span className="text-sm text-white font-bold min-w-[250px]">
                Enable Youtube on your profile
              </span>
              <input
                type="checkbox"
                className="ml-5"
                checked={enableYoutube}
                onChange={(e) => setEnableYoutube(e.target.checked)}
              />
            </div>
            <div className="flex">
              <span className="text-sm text-white font-bold min-w-[250px]">
                Enable autostart of Youtube videos
              </span>
              <input
                type="checkbox"
                className="ml-5"
                checked={autoYoutube}
                onChange={(e) => setAutoYoutube(e.target.checked)}
              />
            </div>
            <button className="mx-auto" onClick={changeYoutubeSubmit}>
              submit
            </button>
          </div>
          <div className="flex gap-4 p-3 border-t-2 border-gray-400">
            <span className="text-white text-sm font-bold">
              Change your character type
            </span>
            <select
              className="text-sm rounded"
              value={characterType}
              onChange={(e) => setCharacterType(e.target.value)}
            >
              <option value="Soldier">Soldier</option>
              <option value="Navyseal">Navyseal</option>
              <option value="Terrorist">Terrorist</option>
            </select>
            <button className="ml-auto" onClick={changeCharacterTypeSubmit}>
              submit
            </button>
          </div>
          <div className="flex flex-col p-3 gap-3 border-t-2 border-gray-400">
            <div className="flex justify-between">
              <span className="text-white text-sm font-bold min-w-[200px]">
                Old password:
              </span>
              <input
                className="flex-1 ml-5"
                onChange={(e) => setOldPassword(e.target.value)}
                type="password"
              />
            </div>

            <div className="flex justify-between">
              <span className="text-white text-sm font-bold min-w-[200px]">
                New password:
              </span>
              <input
                className="flex-1 ml-5"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <span className="text-white text-sm font-bold min-w-[200px]">
                Confirm password:
              </span>
              <input
                className="flex-1 ml-5"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="ml-auto" onClick={changePasswordSubmit}>
              update
            </button>

            <div className="flex">
              <span className="text-white text-sm font-bold">
                Your current E-mail is:
              </span>
              <span className="text-white text-sm font-bold ml-5">
                {user && user.email}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white text-sm font-bold">
                Change E-mail:
              </span>
              <input
                className="flex=1 ml-5"
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[red] font-bold text-sm">
                An account activation Email is sent
              </span>
              <button onClick={changeEmailSubmit}>submit</button>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-3 border-t-2 border-gray-400">
            <div className="flex">
              <span className="text-white text-sm font-bold">
                Your current Name is:
              </span>
              <span className="text-white text-sm font-bold ml-5">
                {user && user.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white text-sm font-bold">
                Change your current name:
              </span>
              <input
                className="flex-1 ml-5"
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[red] font-bold">
                You can change your name only on the first day of a round
              </span>
              <button onClick={changeNameSubmit}>submit</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
