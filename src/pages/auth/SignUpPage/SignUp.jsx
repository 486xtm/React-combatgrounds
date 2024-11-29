import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../common/components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signUp } from "../../../api/auth";
import { setToast } from "../../../redux/toastSlice";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaAccessibleIcon } from "react-icons/fa";
const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const loginError = useSelector(({ error }) => error.login);
  // const registerError = useSelector(({ error }) => error.register);
  // const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  // const [isLoading, setIsLoading] = useState(false);
  // const [user, setUser] = useState("");
  // const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [cemail, setCEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [characterType, setCharacterType] = useState("Soldier");
  // const [hover, setHover] = useState(false);
  // const [hoverFag, setHoverFag] = useState(false);
  // const [hoverUserGuid, setHoverUserGuid] = useState(false);
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [accountCheck, setAccountCheck] = useState(false);

  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   await signIn({ username: user, password: pass }, dispatch);
  // };

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
      // await signUp(
      //   { username, email, cemail, newPass, cpass, characterType },
      //   dispatch,
      //   navigate
      // );
      await signUp(
        { username, email, cemail: email, newPass, cpass, characterType },
        dispatch,
        navigate
      );
    }
  };
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       navigate("/headquarter");
  //     }, 5000);
  //   }
  // }, [isAuthenticated]);

  // useEffect(() => {
  //   if (loginError) {
  //     navigate("/register");
  //   }
  // }, [loginError]);

  // if (isLoading) return <Loading />;
  // return (
  //   <div className={"flex flex-col items-center bg-black " + styles["back"]}>
  //     <div className="w-[880px]">
  //       <img src="images/index_r1_c1.jpg" width="880" height="165" alt="" />
  //     </div>

  //     <div className="w-[880px]  flex bg-black border-4 border-[#81843C] h-[684px]">
  //       <div className="w-1/2 p-5">
  //         <div className=" border-[1px] border-[#81843C] p-1">
  //           <div className="w-full border-[1px] border-[#81843C] p-1">
  //             <div
  //               className={
  //                 "text-white mb-3 font-bold text-lg " + styles["fontset"]
  //               }
  //             >
  //               Member login
  //             </div>
  //             <div className={"text-white text-xs " + styles["fontset"]}>
  //               Already have a CombatGrounds account? Login here.
  //             </div>
  //             {loginError ? (
  //               <div
  //                 className={
  //                   "text-[#FF0000] text-xs text-center mt-3 font-bold " +
  //                   styles["fontset"]
  //                 }
  //               >
  //                 {loginError.msg}
  //               </div>
  //             ) : null}
  //             <form name="loginform" method="post" className="ml-5" onSubmit={handleLoginSubmit}>
  //               <div className="flex items-center mt-3 gap-3">
  //                 <div className="flex-col flex">
  //                   <div className="text-white font-bold">UserName</div>
  //                   <input
  //                     className="rounded-md outline-none border-[3px] px-1 py-[1px] text-sm border-[#81843C] "
  //                     size="10"
  //                     value={user}
  //                     onChange={(ev) => setUser(ev.target.value)}
  //                   />
  //                   <div className="text-white font-bold">Password</div>
  //                   <input
  //                     type="password"
  //                     size="10"
  //                     className="rounded-md outline-none border-[3px] px-1 py-[1px] text-sm border-[#81843C] "
  //                     value={pass}
  //                     onChange={(ev) => setPass(ev.target.value)}
  //                   />
  //                 </div>
  //                 <div>
  //                   <input
  //                     type="image"
  //                     onClick={handleLoginSubmit}
  //                     src="imgs/index_r4_c6_f2.jpg"
  //                   />
  //                 </div>
  //               </div>
  //               <Link
  //                 to="/forgotpass"
  //                 className="text-center text-white font-bold text-[11px] leading-none flex items-center justify-center flex-col w-[30%] hover:text-[yellow] my-1"
  //               >
  //                 <span>FORGOT YOUR</span>
  //                 <span>PASSWORD?</span>
  //               </Link>
  //             </form>
  //           </div>
  //         </div>
  //         <br />
  //         <br />
  //         <div className=" border-[1px] border-[#81843C] p-1">
  //           <div className="w-full border-[1px] border-[#81843C] p-1">
  //             <div
  //               className={
  //                 "text-white mb-2 font-bold text-lg " + styles["fontset"]
  //               }
  //             >
  //               What is CombatGrounds?
  //             </div>
  //             <div className={"text-white mb-2 text-xs " + styles["fontset"]}>
  //               <p className="mb-3">
  //                 Combat Grounds is the best text-based strategy game:
  //               </p>
  //               <ul className="list-disc ml-10 mb-3">
  //                 <li>Become a Navy Seal, a Soldier, or a Terrorist.</li>
  //                 <li>
  //                   Win fantastic prizes just by playing and having a great
  //                   time.
  //                 </li>
  //                 <li>
  //                   Experience the game at blazing speeds! No downloads! Nothing
  //                   to install! And best of all, it's FREE to play!
  //                 </li>
  //               </ul>
  //               Sign up NOW and join our great community!
  //               <br />
  //               <br />
  //               <div className="flex">
  //                 <Link
  //                   to="/faq"
  //                   onMouseOver={() => setHoverFag(true)}
  //                   onMouseLeave={() => setHoverFag(false)}
  //                 >
  //                   <img
  //                     name="index_r9_c4"
  //                     src={
  //                       hoverFag
  //                         ? "/imgs/index_r9_c4_f2.jpg"
  //                         : "/imgs/index_r9_c4.jpg"
  //                     }
  //                     width="29"
  //                     height="20"
  //                     alt=""
  //                   />
  //                 </Link>
  //                 &nbsp;&nbsp;&nbsp;&nbsp;
  //                 <Link
  //                   to="/userguide"
  //                   onMouseOver={() => setHoverUserGuid(true)}
  //                   onMouseLeave={() => setHoverUserGuid(false)}
  //                 >
  //                   <img
  //                     name="index_r9_c5"
  //                     src={
  //                       hoverUserGuid
  //                         ? "imgs/index_r9_c5_f2.jpg"
  //                         : "imgs/index_r9_c5.jpg"
  //                     }
  //                     width="70"
  //                     height="20"
  //                     alt=""
  //                   />
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="p-5 w-1/2">
  //         <div
  //           className={"text-white mb-3 font-bold text-lg " + styles["fontset"]}
  //         >
  //           Create your CombatGrounds account
  //         </div>
  //         <div className={"text-white text-xs " + styles["fontset"]}>
  //           It's free and easy. Just fill out the account info below.
  //           <span style={{ color: "red" }}>(All fields required)</span>
  //         </div>
  //         <div className={"text-white text-xs " + styles["fontset"]}>
  //           <form method="post" onSubmit={handleRegisterSubmit}>
  //             <div className="flex flex-col gap-1">
  //               <div className="flex items-center">
  //                 <div className="w-[30%]">Username</div>
  //                 <div className="w-[40%]">
  //                   <input
  //                     type="text"
  //                     className={styles["input_form"]}
  //                     value={username}
  //                     onChange={(ev) => setUsername(ev.target.value)}
  //                   />
  //                 </div>
  //                 <div className="w-[30%] px-2">
  //                   <div className={"leading-none text-[11px] text-[#CCCCCC] "}>
  //                     3-15 characters: a-Z 0-9.
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="flex items-center">
  //                 <div className="w-[30%]">E-mail</div>
  //                 <div className="w-[40%]">
  //                   <input
  //                     type="text"
  //                     className={styles["input_form"]}
  //                     value={email}
  //                     onChange={(ev) => setEmail(ev.target.value)}
  //                   />
  //                 </div>
  //               </div>
  //               <div className="flex items-center">
  //                 <div className="w-[30%]">Verify E-mail</div>
  //                 <div className="w-[40%]">
  //                   <input
  //                     type="text"
  //                     name="username"
  //                     className={styles["input_form"]}
  //                     value={cemail}
  //                     onChange={(ev) => setCEmail(ev.target.value)}
  //                   />
  //                 </div>
  //               </div>
  //               <div className="flex items-center">
  //                 <div className="w-[30%]">Password</div>
  //                 <div className="w-[40%]">
  //                   <input
  //                     type="password"
  //                     className={styles["input_form"]}
  //                     value={newPass}
  //                     onChange={(ev) => setNewPass(ev.target.value)}
  //                   />
  //                 </div>
  //                 <div className="w-[30%] px-2">
  //                   <div className={"leading-none text-[11px] text-[#CCCCCC] "}>
  //                     8-15 characters: a-Z and 0-9.
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="flex items-center">
  //                 <div className="w-[30%]">Confirm Password</div>
  //                 <div className="w-[40%]">
  //                   <input
  //                     type="password"
  //                     className={styles["input_form"]}
  //                     value={cpass}
  //                     onChange={(ev) => setCPass(ev.target.value)}
  //                   />
  //                 </div>
  //               </div>
  //               <div className="flex items-center">
  //                 <div className="w-[30%]">Character type</div>
  //                 <select
  //                   className="text-black w-[40%] p-1 rounded-md shadow-lg "
  //                   name="type"
  //                   value={characterType}
  //                   onChange={(ev) => setCharacterType(ev.target.value)}
  //                 >
  //                   <option value="Soldier">Soldier</option>
  //                   <option value="Navyseal">Navy Seal</option>
  //                   <option value="Terrorist">Terrorist</option>
  //                 </select>
  //               </div>
  //             </div>
  //             <div className="gap-4 my-5 flex flex-col">
  //               <div className="flex items-center space-x-2">
  //                 <input
  //                   name="terms"
  //                   type="checkbox"
  //                   value={agreeCheck}
  //                   onChange={() => setAgreeCheck(!agreeCheck)}
  //                 />
  //                 <div>
  //                   I agree to the{" "}
  //                   <Link to="/ ">
  //                     <b className="underline">terms of use</b>.
  //                   </Link>
  //                 </div>
  //               </div>
  //               <div className="flex items-center space-x-2">
  //                 <input
  //                   name="multi"
  //                   type="checkbox"
  //                   value={accountCheck}
  //                   onChange={() => setAccountCheck(!accountCheck)}
  //                 />
  //                 <div>This is my ONLY CombatGrounds.com Account.</div>
  //               </div>
  //             </div>
  //             <div className="flex flex-col">
  //               <input
  //                 className={
  //                   styles["submit_form"] +
  //                   " border-[1px] border-white cursor-pointer hover:shadow-[red] hover:border-[red] shadow-glow shadow-[white]"
  //                 }
  //                 type="submit"
  //                 name="Submit"
  //                 value=""
  //               />
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>

  //     <footer className="text-center">
  //       <b>Copyright © 2024-2025 CombatGrounds.com. All rights reserved.</b>
  //       <br />
  //       <a
  //         className="underline font-bold hover:decoration-[yellow] hover:text-[yellow]"
  //         href="mailto:info@combatgrounds.com"
  //       >
  //         Contact us.
  //       </a>
  //       <br />
  //       <a
  //         className="underline font-bold hover:decoration-[yellow] hover:text-[yellow]"
  //         href="http://www.xmmorpg.com"
  //         target="_blank"
  //       >
  //         MMORPG
  //       </a>
  //     </footer>
  //   </div>
  // );
  return (
    <div className={styles["signup_container"]}>
      <div
        className={
          styles["signup_height"] + " flex flex-col justify-center py-5"
        }
      >
        <div className="flex flex-col rounded-[1rem] w-[80%] md:w-[500px]  shadow-glow_small  bg-[rgba(255,255,255,0.1)] ml-[10%] text-center md:pt-10 md:pb-10 pt-5 pb-10 md:px-10 px-5 mb-3 md:mb-5">
          <img
            className={"w-[500px]  mx-auto " + styles["mark_svg"]}
            src="/pictures/common/mark.svg"
          />
          <div className="flex flex-col gap-[8px] mb-2">
            <div className="text-[#CACAB2] md:text-[20px] font-medium text-left">
              Username
            </div>
            <div className="bg-[#1b1b13] md:h-[56px] h-[40px] md:px-[24px] px-[12px]  md:py-[16px] md:rounded-[16px] rounded-[8px] flex">
              <div className="flex items-center mr-2">
                <img src="/pictures/common/user.svg" />
              </div>
              <input
                className="flex-1 text-[#CACAB2] md:text-[20px] placeholder:text-[#CACAB2] font-semibold bg-transparent signup_input"
                placeholder="Enter username"
                autoComplete="off"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[8px] mb-2">
            <div className="text-[#CACAB2] md:text-[20px] font-medium text-left">
              Email
            </div>
            <div className="bg-[#1b1b13] md:h-[56px] h-[40px] md:px-[24px] px-[12px]  md:py-[16px] md:rounded-[16px] rounded-[8px] flex">
              <div className="flex items-center mr-2 text-[#7D7E42] text-[24px]">
                <MdOutlineMail />
              </div>
              <input
                className="flex-1 text-[#CACAB2] md:text-[20px] placeholder:text-[#CACAB2] font-semibold bg-transparent signup_input"
                placeholder="Enter Email"
                autoComplete="off"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>

            <div className="flex flex-col gap-[8px] mb-2">
              <div className="text-[#CACAB2] md:text-[20px] font-medium text-left">
                Password
              </div>
              <div className="bg-[#1b1b13] md:h-[56px] h-[40px] md:px-[24px] px-[12px] md:py-[16px] md:rounded-[16px] rounded-[8px] flex">
                <div className="flex items-center mr-2">
                  <img src="/pictures/common/pass.svg" />
                </div>
                <input
                  type="password"
                  className="flex-1 text-[#CACAB2] md:text-[20px] placeholder:text-[#CACAB2] font-semibold bg-transparent signup_input"
                  placeholder="Enter password"
                  autoComplete="off"
                  value={newPass}
                  onChange={(ev) => setNewPass(ev.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-[8px] mb-2">
              <div className="text-[#CACAB2] md:text-[20px] font-medium text-left">
                Confirm Password
              </div>
              <div className="bg-[#1b1b13] md:h-[56px] h-[40px] md:px-[24px] px-[12px] md:py-[16px] md:rounded-[16px] rounded-[8px] flex">
                <div className="flex items-center mr-2">
                  <img src="/pictures/common/pass.svg" />
                </div>
                <input
                  type="password"
                  className="flex-1 text-[#CACAB2] md:text-[20px] placeholder:text-[#CACAB2] font-semibold bg-transparent signup_input"
                  placeholder="Enter Confirm Password"
                  autoComplete="off"
                  value={cpass}
                  onChange={(ev) => setCPass(ev.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-[8px] mb-5">
              <div className="text-[#CACAB2] md:text-[20px] font-medium text-left">
                Character Type
              </div>
              <div className="bg-[#1b1b13] md:h-[56px] h-[40px] md:px-[24px] px-[12px] md:py-[16px] md:rounded-[16px] rounded-[8px] flex items-center">
                <div className="flex items-center mr-2 text-[24px] text-[#7D7E42]">
                  <FaAccessibleIcon />
                </div>
                <select
                  className="bg-transparent text-[#CACAB2] flex-1 md:text-[20px] font-semibold md:h-[56px] h-[40px]"
                  name="type"
                  value={characterType}
                  onChange={(ev) => setCharacterType(ev.target.value)}
                >
                  <option className="bg-[#1b1b13]" value="Soldier">
                    Soldier
                  </option>
                  <option className="bg-[#1b1b13]" value="Navyseal">
                    Navy Seal
                  </option>
                  <option className="bg-[#1b1b13]" value="Terrorist">
                    Terrorist
                  </option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-3  text-[#CACAB2] md:text-[17px] text-[13px] font-semibold">
              <input
                type="checkbox"
                id="custom-checkbox"
                className="peer hidden" // Hide the actual checkbox
                value={agreeCheck}
                onChange={() => setAgreeCheck(!agreeCheck)}
              />

              {/* Custom Checkbox */}
              <label
                htmlFor="custom-checkbox"
                className="w-5 h-5 bg-gray-300 rounded-md flex items-center justify-center
                   border border-gray-400 cursor-pointer peer-checked:bg-[#1b1b13]
                   peer-checked:border-gray-700 peer-checked:text-white transition-all"
              >
                {/* Checkmark when checked */}
                <span className=" peer-checked:inline text-lg text-[#CACAB2]">
                  <FaCheck />
                </span>
              </label>
              <div> I agree to the terms of use.</div>
            </div>
            <div className="flex items-center space-x-3  text-[#CACAB2] md:text-[17px] text-[13px] font-semibold">
              <input
                type="checkbox"
                id="custom-checkbox1"
                className="peer hidden" // Hide the actual checkbox
                value={accountCheck}
                onChange={() => setAccountCheck(!accountCheck)}
              />

              {/* Custom Checkbox */}
              <label
                htmlFor="custom-checkbox1"
                className="w-5 h-5 bg-gray-300 rounded-md flex items-center justify-center
                   border border-gray-400 cursor-pointer peer-checked:bg-[#1b1b13]
                   peer-checked:border-gray-700 peer-checked:text-white transition-all"
              >
                {/* Checkmark when checked */}
                <span className=" peer-checked:inline text-lg text-[#CACAB2]">
                  <FaCheck />
                </span>
              </label>
              <div>This is my ONLY CombatGrounds.com Account.</div>
            </div>

            <button
              onClick={handleRegisterSubmit}
              className={
                "md:h-[47px] h-[35px] md:w-[300px] w-[200px] mt-3 mx-auto md:rounded-[16px] rounded-[8px] md:text-[24px] text-[16px] font-extrabold text-[#CACAB2] flex items-center justify-center " +
                styles["gradient_button"]
              }
            >
              Sign Up!
            </button>
          </div>
        </div>

        <div className="flex flex-col rounded-[1rem] w-[80%]  md:w-[500px]  bg-[rgba(255,255,255,0.1)] 2xl:ml-[0px]  ml-[10%]  md:pt-10 md:pb-10 pt-5  md:px-10 px-4 2xl:absolute 2xl:right-[7%]  2xl:mt-[15vh] 2xl:top-0  mb-4  shadow-glow_small text-[#dfdfc3]">
          <div
            className={" mb-2 font-bold md:text-2xl text-lg " + styles["fontset"]}
          >
            What is CombatGrounds?
          </div>
          <div className={" mb-2 md:text-lg font-semibold text-sm " + styles["fontset"]}>
            <p className="mb-3">
              Combat Grounds is the best text-based strategy game:
            </p>
            <ul className="list-disc ml-10 mb-3">
              <li>Become a Navy Seal, a Soldier, or a Terrorist.</li>
              <li>
                Win fantastic prizes just by playing and having a great time.
              </li>
              <li>
                Experience the game at blazing speeds! No downloads! Nothing to
                install! And best of all, it's FREE to play!
              </li>
            </ul>
            Sign up NOW and join our great community!
            <br />
            <br />
            <button
              onClick={() => navigate("/login")}
              className={
                "md:h-[47px] h-[35px] md:w-[300px] w-[200px] mt-3 mx-auto md:rounded-[16px] rounded-[8px] md:text-[24px] text-[16px] font-extrabold text-[#CACAB2] flex items-center justify-center mb-4 " +
                styles["gradient_button"]
              }
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className={"text-white text-center md:text-[20px] text-[16px]"}>
        © Combat Grounds 2024 : All Rights Reserved
      </div>
    </div>
  );
};

export default React.memo(SignUpPage);
