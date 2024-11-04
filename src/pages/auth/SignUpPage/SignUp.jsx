import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../common/components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signUp } from "../../../api/auth";
import { setToast } from "../../../redux/toastSlice";
const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginError = useSelector(({ error }) => error.login);
  const registerError = useSelector(({ error }) => error.register);
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const [isLoading, setIsLoading] = useState(false);
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
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [accountCheck, setAccountCheck] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await signIn({ username: user, password: pass }, dispatch);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!agreeCheck) {
      dispatch(
        setToast({ type: "error", msg: "You must accept the terms of use." })
      );
      return;
    } else if (!accountCheck) {
      dispatch(
        setToast({
          type: "error",
          msg: "You must confirm that this is your only CombatGroudns.com account.",
        })
      );
      return;
    } else {
      await signUp(
        { username, email, cemail, newPass, cpass, characterType },
        dispatch,
        navigate
      );
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/headquarter");
      }, 5000);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (loginError) {
      navigate("/register");
    }
  }, [loginError]);

  if (isLoading) return <Loading />;
  return (
    <div className={"flex flex-col items-center bg-black " + styles["back"]}>
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
              {loginError ? (
                <div
                  className={
                    "text-[#FF0000] text-xs text-center mt-3 font-bold " +
                    styles["fontset"]
                  }
                >
                  {loginError.msg}
                </div>
              ) : null}
              <form name="loginform" method="post" className="ml-5" onSubmit={handleLoginSubmit}>
                <div className="flex items-center mt-3 gap-3">
                  <div className="flex-col flex">
                    <div className="text-white font-bold">UserName</div>
                    <input
                      className="rounded-md outline-none border-[3px] px-1 py-[1px] text-sm border-[#81843C] "
                      size="10"
                      value={user}
                      onChange={(ev) => setUser(ev.target.value)}
                    />
                    <div className="text-white font-bold">Password</div>
                    <input
                      type="password"
                      size="10"
                      className="rounded-md outline-none border-[3px] px-1 py-[1px] text-sm border-[#81843C] "
                      value={pass}
                      onChange={(ev) => setPass(ev.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="image"
                      onClick={handleLoginSubmit}
                      src="imgs/index_r4_c6_f2.jpg"
                    />
                  </div>
                </div>
                <Link
                  to="/forgotpass"
                  className="text-center text-white font-bold text-[11px] leading-none flex items-center justify-center flex-col w-[30%] hover:text-[yellow] my-1"
                >
                  <span>FORGOT YOUR</span>
                  <span>PASSWORD?</span>
                </Link>
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
                  <div className="w-[40%]">
                    <input
                      type="text"
                      className={styles["input_form"]}
                      value={username}
                      onChange={(ev) => setUsername(ev.target.value)}
                    />
                  </div>
                  <div className="w-[30%] px-2">
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
                      className={styles["input_form"]}
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
                      className={styles["input_form"]}
                      value={cemail}
                      onChange={(ev) => setCEmail(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[30%]">Password</div>
                  <div className="w-[40%]">
                    <input
                      type="password"
                      className={styles["input_form"]}
                      value={newPass}
                      onChange={(ev) => setNewPass(ev.target.value)}
                    />
                  </div>
                  <div className="w-[30%] px-2">
                    <div className={"leading-none text-[11px] text-[#CCCCCC] "}>
                      8-15 characters: a-Z and 0-9.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[30%]">Confirm Password</div>
                  <div className="w-[40%]">
                    <input
                      type="password"
                      className={styles["input_form"]}
                      value={cpass}
                      onChange={(ev) => setCPass(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[30%]">Character type</div>
                  <select
                    className="text-black w-[40%] p-1 rounded-md shadow-lg "
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
              <div className="gap-4 my-5 flex flex-col">
                <div className="flex items-center space-x-2">
                  <input
                    name="terms"
                    type="checkbox"
                    value={agreeCheck}
                    onChange={() => setAgreeCheck(!agreeCheck)}
                  />
                  <div>
                    I agree to the{" "}
                    <Link to="/ ">
                      <b className="underline">terms of use</b>.
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    name="multi"
                    type="checkbox"
                    value={accountCheck}
                    onChange={() => setAccountCheck(!accountCheck)}
                  />
                  <div>This is my ONLY CombatGrounds.com Account.</div>
                </div>
              </div>
              <div className="flex flex-col">
                <input
                  className={
                    styles["submit_form"] +
                    " border-[1px] border-white cursor-pointer hover:shadow-[red] hover:border-[red] shadow-glow shadow-[white]"
                  }
                  type="submit"
                  name="Submit"
                  value=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="text-center">
        <b>Copyright © 2024-2025 CombatGrounds.com. All rights reserved.</b>
        <br />
        <a
          className="underline font-bold hover:decoration-[yellow] hover:text-[yellow]"
          href="mailto:info@combatgrounds.com"
        >
          Contact us.
        </a>
        <br />
        <a
          className="underline font-bold hover:decoration-[yellow] hover:text-[yellow]"
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
