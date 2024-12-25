import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import Modal from "../../../common/components/modal/modal";
import { getAttackableUsers, attackUser } from "../../../api/attack";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModal } from "../../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { publicURL } from "../../../common/constant";
const mock = [
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
];

export const Attack = () => {
  const [tab, setTab] = useState(0);
  const [name, setName] = useState("");
  const [attackType, setAttackType] = useState(0);
  const [attackMsg, setAttackMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [key, setKey] = useState("");
  const [oponents, setOponents] = useState([]);

  const dispatch = useDispatch();

  const atts = useSelector(({ user }) => user.atts);
  const attackResult = useSelector(({ user }) => user.attackResult);
  const user = useSelector(({ user }) => user.user);
  const smodal = useSelector(({ user }) => user.showModal);
  const navigate = useNavigate();
  const closeModal = () => {
    setName("");
    setAttackMsg("");
    dispatch(toggleShowModal(false));
  };

  const handleAttack = () => {
    attackUser(
      { name, type: attackType, message: attackMsg },
      { key },
      dispatch
    );
    // setShowModal(true)

  };

  const handleSearch = () => {
    getAttackableUsers({ key }, dispatch);
  };

  const handleUserClick = (user) => {
    if (user) {
      navigate("/profile", { state: user });
    }
  };

  useEffect(() => {
    if (!atts) return;
    setOponents(atts[tab ? "supporters" : "frees"] || []);
  }, [tab, atts]);

  useEffect(() => {
    if (smodal === undefined || smodal === null) return;
    setShowModal(smodal);
    handleSearch();
  }, [smodal]);

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Layout currentActiveTab={"headquarters"} isHeaderFull>
      <div className="flex flex-1 flex-col items-center  py-5 relative mx-5">
        <img width="500" height="50" src="/pics/attackplay.gif" />
        <img src="/attack/back.svg" className="w-full absolute top-[70px]" />
        <div className=" w-full min-h-[750px] text-white px-5 pt-10 z-10 flex flex-col gap-3">
          <div className="gap-3 flex flex-col mx-auto">
            <div className="flex">
              <div className="w-[70%] text-yellow-200 font-medium">
                Name of player to attack:
              </div>
              <input
                className="bg-transparent border-secondary-green shadow-inner w-[250px] shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm px-1 text-sm py-[1px] text-yellow-200"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
            <div className="flex">
              <div className="w-[70%] text-yellow-200 font-medium">
                Attack type:
              </div>
              <select
                className="w-[250px] text-yellow-200 bg-transparent border-secondary-green shadow-inner border-[1px] shadow-[rgba(255,255,255,0.3)] rounded-sm"
                value={attackType}
                onChange={(ev) => setAttackType(ev.target.value)}
              >
                <option className="bg-secondary-green" value={0}>
                  Troops Barracks
                </option>
                <option className="bg-secondary-green" value={1}>
                  Cash + Items
                </option>
              </select>
            </div>
            <div className="flex">
              <div className="w-[70%] text-yellow-200 font-medium">
                Attack Message:
              </div>
              <textarea
                rows={2}
                className="bg-transparent border-secondary-green shadow-inner w-[250px] shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm px-1 text-sm py-[1px] text-yellow-200"
                value={attackMsg}
                onChange={(ev) => setAttackMsg(ev.target.value)}
              />
            </div>
          </div>

          <button
            className="mx-auto mt-4 rounded-lg border-2 font-bold  w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
            onClick={handleAttack}
          >
            Attack
          </button>
          <hr className="border-dark-primary mt-2 mb-1" />
          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                className="bg-transparent border-secondary-green shadow-inner w-[150px] shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm px-1 text-sm py-[1px] text-yellow-200 placeholder-yellow-200 placeholder:opacity-70"
                placeholder="Search By Name"
                onChange={(e) => setKey(e.target.value)}
              />

              <button
                className="ml-3 rounded-lg border font-bold  w-[100px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="flex items-center">
              <div className="absolute flex right-0 text-white font-bold gap-2 mr-10 -mt-8">
                <div
                  className={`${tab == 0 && "text-yellow-200"} cursor-pointer`}
                  onClick={() => setTab(0)}
                >
                  Free Players
                </div>
                <div
                  className={`${tab == 1 && "text-yellow-200"} cursor-pointer`}
                  onClick={() => setTab(1)}
                >
                  Supporters
                </div>
              </div>
              <div
                className={` absolute right-0 rounded-lg h-[2px] bg-yellow-200 -mt-2 ${
                  tab == 0 ? "mr-[125px] w-[100px]" : "mr-[35px] w-[90px]"
                } transition-all duration-200`}
              ></div>
            </div>
          </div>

          <div className="text-white border-[1px] border-secondary-green rounded-md mt-2 h-[430px] ">
            <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
              <div className="w-[10%] py-1">No</div>
              <div className="w-[20%] py-1">Name</div>
              <div className="w-[20%] py-1">Recruits</div>
              <div className="w-[20%] py-1">Net Worth</div>
              <div className="w-[20%] py-1">Money</div>
              <div className="w-[10%] py-1">Action</div>
            </div>
            <div className="h-[395px] overflow-y-auto">
              {oponents &&
                oponents.map((user, index) => (
                  <div
                    className="flex w-full text-center border-b-[1px] border-secondary-green"
                    key={`attack_list_${index}`}
                  >
                    <div className="w-[10%] py-1">{index + 1}</div>
                    <div
                      className="w-[20%] py-1 underline text-yellow-200 cursor-pointer"
                      onClick={() => handleUserClick(user)}
                    >
                      {user.name}
                    </div>
                    <div className="w-[20%] py-1">
                      {Number(user.recruits).toLocaleString()}
                    </div>
                    <div className="w-[20%] py-1">
                      {Number(user.netWorth).toLocaleString()}
                    </div>
                    <div className="w-[20%] py-1">
                      ${Number(user.money).toLocaleString()}
                    </div>
                    <div className="w-[10%] py-1">
                      <button
                        className="mx-auto rounded-lg border font-bold text-xs px-2 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                        onClick={() => setName(user.name)}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={closeModal}>
        {attackResult && (
          <div className="flex flex-col w-[600px] p-5 text-yellow-200 text-center">
            <div className="flex justify-center gap-6 items-center">
              <div className="w-[70px] text-center font-[900] text-red-500">
                <div className="flex rounded-full mb-2 overflow-hidden w-[70px] h-[70px] border border-[red] shadow-glow shadow-[red]">
                  <img
                    src={
                      user.avatar
                        ? `${publicURL}/${user.avatar}`
                        : "/pics/avatar.gif"
                    }
                    className="w-full h-auto"
                  />
                </div>
                {user && user.name}
              </div>
              <img src="/attack/vs.png" className="w-[120px]" />
              <div className="w-[70px] text-center font-[900] text-blue-500">
                <div className="flex rounded-full mb-2 overflow-hidden w-[70px] h-[70px] border border-[blue] shadow-glow shadow-[blue]">
                  <img
                    src={
                      attackResult.def && attackResult.def.avatar
                        ? `${publicURL}/${attackResult.def.avatar}`
                        : "/pics/avatar.gif"
                    }
                    className="w-full h-auto"
                  />
                </div>
                {attackResult.def && attackResult.def.name}
              </div>
            </div>
            <hr className="my-2" />
            <div className="mb-5 text-white leading-[30px] font-bold">
              <div className="">
                You just attacked {attackResult.def && attackResult.def.name}
              </div>
              <div>
                Your{" "}
                <span className="text-green-500">
                  {attackResult.att &&
                    Number(attackResult.att.recruits).toLocaleString()}
                </span>{" "}
                recruits shoot for{" "}
                <span className="text-green-500">
                  {attackResult.att &&
                    Number(attackResult.att.damage).toLocaleString()}
                </span>{" "}
                damage!
              </div>
              <div>{attackResult.def.name} defends your attack!</div>
              <div>
                {attackResult.def.name}'s{" "}
                <span className="text-red-500">
                  {attackResult.def &&
                    Number(attackResult.def.recruits).toLocaleString()}
                </span>{" "}
                recruits shoot for{" "}
                <span className="text-red-500">
                  {attackResult.def &&
                    Number(attackResult.def.damage).toLocaleString()}
                </span>{" "}
                damage!
              </div>
            </div>
            <div className="mb-2 text-white leading-[30px] font-bold">
              <div
                className={attackResult.win ? "text-green-500" : "text-red-600"}
              >
                {attackResult && attackResult.level} Level has been
                {attackResult.win ? " rewarded" : " deducted"}!
              </div>
              <div
                className={`text-[25px] ${
                  attackResult.win ? "text-green-500" : "text-red-700"
                } my-2`}
              >
                You {attackResult.win ? "have won" : "have lost"} the
                attack!
              </div>
              {/* <div>
                Earning Yourself{" "}
                <span className="text-green-500">$2,822,494</span>
              </div>
              <div>
                You inflicted a loss of{" "}
                <span className="text-green-500"> $19,354,243</span>
              </div> */}
              {Number(attackType) === 0 ? (
                <>
                  {attackResult.win && <div>
                    {"You killed "}
                    <span className="text-green-500">
                      {attackResult.def &&
                        Number(attackResult.def.loss || 0).toLocaleString(
                          "en-US"
                        )}
                    </span>{" "}
                    troops during the conflict
                  </div>}
                  {!attackResult.win && <div>
                    {`${attackResult.def && attackResult.def.name} killed `}
                    <span className="text-green-500">
                      {attackResult.att &&
                        Number(attackResult.att.loss || 0).toLocaleString(
                          "en-US"
                        )}
                    </span>
                    {" troops during the conflict"}
                  </div>}
                </>
              ) : (
                <>
                  <div>
                    {`${
                      attackResult && attackResult.win
                        ? "you cause "
                        : "The enemy cause "
                    }`}
                    <span className="text-green-500">
                      $
                      {attackResult.win
                        ? attackResult.def &&
                          (attackResult.def.loss || 0).toLocaleString("en-US")
                        : attackResult.att &&
                          (attackResult.att.loss || 0).toLocaleString("en-US")}
                    </span>
                    {` worth of damage to ${
                      attackResult && attackResult.win ? "your enemy" : "you"
                    }`}
                  </div>
                  {/* <div>
                    Your items got destroyed of worth{" "}
                    <span className="text-green-500">
                      $
                      {attackResult.att &&
                        (attackResult.att.loss || 0).toLocaleString()}
                    </span>
                  </div> */}
                  <div>
                    {`${
                      attackResult && attackResult.win ? "You" : "The enemy"
                    } got `}
                    <span className="text-green-500">
                      $
                      {Number(
                        (attackResult && attackResult.rewards) || 0
                      ).toLocaleString()}
                    </span>{" "}
                    {" as reward"}
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col mx-auto gap-2">
              {attackResult.destroyedItems &&
                attackResult.destroyedItems.map((i, id) => (
                  <div className="flex" key={`destroyed_${id}`}>
                    <img
                      src={`/images/items/${i.item.avatar}`}
                      alt={i.item.avatar}
                      className="w-[25px] h-[25px] border"
                    />
                    <span className="text-white ml-4">{`You destroyed ${i.count} of ${i.item.name}`}</span>
                  </div>
                ))}
            </div>
            <div className="flex">
              <button
                className="mt-3 mx-auto rounded-lg border font-bold text-xs px-10 py-1 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                onClick={closeModal}
              >
                Close
              </button>

              <button
                className="mt-3 mx-auto rounded-lg border font-bold text-xs px-10 py-1 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                onClick={handleAttack}
              >
                Attack Again
              </button>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
};
