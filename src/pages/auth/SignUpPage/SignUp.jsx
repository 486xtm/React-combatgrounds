import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cemail, setCEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [characterType, setCharacterType] = useState("Soldier");
  const [hover, setHover] = useState(false);
  const [hoverFag, setHoverFag] = useState(false);
  const [hoverUserGuid, setHoverUserGuid] = useState(false);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("loginfo==>", user, pass);
    navigate("/choosehelper");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(
      "register==>",
      username,
      email,
      cemail,
      newPass,
      cpass,
      characterType
    );

    navigate("/login");
  };

  return (
    <div
      className={
        "flex flex-col justify-center items-center bg-black " + styles["back"]
      }
    >
      <div className="w-[880px]">
        <img src="images/index_r1_c1.jpg" width="880" height="165" alt="" />
      </div>

      <div className="w-[880px]  flex bg-black border-4 border-[#81843C] h-[684px]">
        <div className="w-1/2 p-5">
          <div className=" border-[1px] border-[#81843C] p-1">
            <div className="w-full border-[1px] border-[#81843C] p-1">
              <div
                className={
                  "text-white mb-3 font-bold text-lg " + styles["fontset"]
                }
              >
                Member login
              </div>
              <div className={"text-white text-xs " + styles["fontset"]}>
                Already have a CombatGrounds account? Login here.
              </div>
              <form name="loginform" method="post" onSubmit={handleLoginSubmit}>
                <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td
                        background="imgs/index_r4_c3.jpg"
                        valign="top"
                        width="100"
                      >
                        <table
                          id="table1"
                          width="117"
                          height="88"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <tbody>
                            <tr>
                              <td width="14" rowSpan="3" align="left"></td>
                              <td width="105" height="30">
                                &nbsp;
                              </td>
                            </tr>
                            <tr>
                              <td width="105" align="left">
                                <input
                                  className="rounded-lg"
                                  size="10"
                                  value={user}
                                  onChange={(ev) => setUser(ev.target.value)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td width="105" height="18">
                                &nbsp;
                              </td>
                            </tr>
                            <tr>
                              <td width="14" align="left"></td>
                              <td width="105" align="left">
                                <input
                                  type="password"
                                  size="10"
                                  className="rounded-lg"
                                  value={pass}
                                  onChange={(ev) => setPass(ev.target.value)}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <input
                          type="image"
                          onClick={handleLoginSubmit}
                          src="imgs/index_r4_c6_f2.jpg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          to="/forgotpass"
                          onMouseOver={() => setHover(true)}
                          onMouseLeave={() => setHover(false)}
                        >
                          <img
                            name="index_r5_c6"
                            src={
                              hover
                                ? "imgs/index_r5_c6_f2.jpg"
                                : "imgs/index_r5_c6.jpg"
                            }
                            width="96"
                            height="31"
                            alt=""
                          />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
          <br />
          <br />
          <div className=" border-[1px] border-[#81843C] p-1">
            <div className="w-full border-[1px] border-[#81843C] p-1">
              <div
                className={
                  "text-white mb-2 font-bold text-lg " + styles["fontset"]
                }
              >
                What is CombatGrounds?
              </div>
              <div className={"text-white mb-2 text-xs " + styles["fontset"]}>
                <p className="mb-3">
                  Combat Grounds is the best text-based strategy game:
                </p>
                <ul className="list-disc ml-10 mb-3">
                  <li>Become a Navy Seal, a Soldier, or a Terrorist.</li>
                  <li>
                    Win fantastic prizes just by playing and having a great
                    time.
                  </li>
                  <li>
                    Experience the game at blazing speeds! No downloads! Nothing
                    to install! And best of all, it's FREE to play!
                  </li>
                </ul>
                Sign up NOW and join our great community!
                <br />
                <br />
                <div className="flex">
                  <Link
                    to="/faq"
                    onMouseOver={() => setHoverFag(true)}
                    onMouseLeave={() => setHoverFag(false)}
                  >
                    <img
                      name="index_r9_c4"
                      src={
                        hoverFag
                          ? "/imgs/index_r9_c4_f2.jpg"
                          : "/imgs/index_r9_c4.jpg"
                      }
                      width="29"
                      height="20"
                      alt=""
                    />
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link
                    to="/userguide"
                    onMouseOver={() => setHoverUserGuid(true)}
                    onMouseLeave={() => setHoverUserGuid(false)}
                  >
                    <img
                      name="index_r9_c5"
                      src={
                        hoverUserGuid
                          ? "imgs/index_r9_c5_f2.jpg"
                          : "imgs/index_r9_c5.jpg"
                      }
                      width="70"
                      height="20"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 w-1/2">
          <div
            className={"text-white mb-3 font-bold text-lg " + styles["fontset"]}
          >
            Create your CombatGrounds account
          </div>
          <div className={"text-white text-xs " + styles["fontset"]}>
            It's free and easy. Just fill out the account info below.
            <span style={{ color: "red" }}>(All fields required)</span>
          </div>
          <div className={"text-white text-xs " + styles["fontset"]}>
            <form method="post" onSubmit={handleRegisterSubmit}>
              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  <div className="w-[30%]">Username</div>
                  <div className="w-[40%] pr-10">
                    <input
                      type="text"
                      name="username"
                      className="w-full h-[20px] rounded-sm border-[1px] border-[#CCCCCC] text-black"
                      value={username}
                      onChange={(ev) => setUsername(ev.target.value)}
                    />
                  </div>
                  <div className="w-[30%] pr-3">
                    <div className={"leading-none text-[11px] text-[#CCCCCC] "}>
                      3-15 characters: a-Z 0-9.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[30%]">E-mail</div>
                  <div className="w-[40%]">
                    <input
                      type="text"
                      name="username"
                      className="w-full h-[20px] rounded-sm border-[1px] border-[#CCCCCC] text-black"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[30%]">Verify E-mail</div>
                  <div className="w-[40%]">
                    <input
                      type="text"
                      name="username"
                      className="w-full h-[20px] rounded-sm border-[1px] border-[#CCCCCC] text-black"
                      value={cemail}
                      onChange={(ev) => setCEmail(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[30%]">Password</div>
                  <div className="w-[40%] pr-10">
                    <input
                      type="text"
                      name="username"
                      className="w-full h-[20px] rounded-sm border-[1px] border-[#CCCCCC] text-black"
                      value={newPass}
                      onChange={(ev) => setNewPass(ev.target.value)}
                    />
                  </div>
                  <div className="w-[30%] pr-3">
                    <div className={"leading-none text-[11px] text-[#CCCCCC] "}>
                      8-15 characters: a-Z and 0-9.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[30%]">Confirm Password</div>
                  <div className="w-[40%]">
                    <input
                      type="text"
                      name="username"
                      className="w-full h-[20px] rounded-sm border-[1px] border-[#CCCCCC] text-black"
                      value={cpass}
                      onChange={(ev) => setCPass(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[30%]">Character type</div>
                  <select
                    className="text-black"
                    name="type"
                    value={characterType}
                    onChange={(ev) => setCharacterType(ev.target.value)}
                  >
                    <option value="Soldier">Soldier</option>
                    <option value="Navyseal">Navy Seal</option>
                    <option value="Terrorist">Terrorist</option>
                  </select>
                </div>
              </div>
              <div className="gap-4 my-4 flex flex-col">
                <div className="flex items-center space-x-2">
                  <input name="terms" type="checkbox" value="1" />
                  <div>
                    I agree to the{" "}
                    <Link to="/termsofuse">
                      <b className="underline">terms of use</b>.
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input name="multi" type="checkbox" value="1" />
                  <div>This is my ONLY CombatGrounds.com Account.</div>
                </div>
              </div>
              <input
                className="bg-white text-black px-3 border-[1px] border-[#CCCCCC]"
                type="submit"
                name="Submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>

      <footer className="text-center">
        <b>Copyright © 2005-2006 CombatGrounds.com. All rights reserved.</b>
        <br />
        <a
          className="underline decoration-white hover:decoration-yellow-400"
          href="mailto:info@combatgrounds.com"
        >
          Contact us.
        </a>
        <br />
        <a
          className="underline decoration-white hover:decoration-yellow-400"
          href="http://www.xmmorpg.com"
          target="_blank"
        >
          MMORPG
        </a>
      </footer>
    </div>
  );
};

export default SignUpPage;
