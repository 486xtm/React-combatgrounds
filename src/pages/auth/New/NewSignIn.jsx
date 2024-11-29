import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Loading from "../../../common/components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../api/auth";
const NewSignIn = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const loginError = useSelector(({ error }) => error.login);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    await signIn({ username, password }, dispatch);
  };

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (isAuthenticated && token) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/headquarter");
      }, 5000);
    }
  }, [isAuthenticated]);

  // useEffect(() => {
  //   if (loginError) {
  //     navigate("/register");
  //   }
  // }, [loginError]);

  if (isLoading) return <Loading />;

  return (
    <div className={styles["sign_container"]}>
      <div className={styles["sign_height"]}>
        <img
          className="w-[500px]  mx-auto py-[40px]"
          src="/pictures/common/mark.svg"
        />
        <div className="flex flex-col rounded-[1rem] w-[80%] md:w-[500px]  shadow-glow_small  bg-[rgba(255,255,255,0.1)] mx-auto text-center md:pt-10 md:pb-20 pt-5 pb-10 md:px-10 px-5 mb-3">
          <div className="font-[700] md:text-[40px] text-[30px] text-[#F2F2EC] mb-5">
            LOGIN
          </div>

          <div className="flex flex-col gap-[8px] mb-5">
            <div className="text-[#CACAB2] md:text-[20px] font-medium text-left">
              Username
            </div>
            <div className="bg-[#323320] md:h-[56px] h-[40px] md:px-[24px] px-[12px]  md:py-[16px] md:rounded-[16px] rounded-[8px] flex">
              <div className="flex items-center mr-2">
                <img src="/pictures/common/user.svg" />
              </div>
              <input
                className="flex-1 text-[#CACAB2] md:text-[20px] placeholder:text-[#CACAB2] font-semibold bg-[#323320] sign_input"
                placeholder="Enter username"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[8px] mb-2">
            <div className="text-[#CACAB2] md:text-[20px] font-medium text-left">
              Password
            </div>
            <div className="bg-[#323320] md:h-[56px] h-[40px] md:px-[24px] px-[12px] md:py-[16px] md:rounded-[16px] rounded-[8px] flex">
              <div className="flex items-center mr-2">
                <img src="/pictures/common/pass.svg" />
              </div>
              <input
                type="password"
                className="flex-1 text-[#CACAB2] md:text-[20px] placeholder:text-[#CACAB2] font-semibold bg-[#323320] sign_input"
                placeholder="Enter password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Link
            to="/forgotpass"
            className="text-[#CACAB2] md:text-[20px] font-medium text-right mb-10 cursor-pointer"
          >
            Forgot Password?
          </Link>
          <button
            className="bg-[#191A12] hover:bg-[#22241a] md:h-[56px] h-[40px] md:rounded-[16px] rounded-[8px] shadow-lg backdrop-blur-md md:text-[24px] text-[16px] font-extrabold text-[#CACAB2]"
            onClick={() => handleLogin()}
          >
            G O
          </button>
        </div>

        <div className="flex flex-col rounded-[1rem] w-[80%] 2xl:w-[400px] md:w-[500px]  bg-[rgba(255,255,255,0.1)] mx-auto text-center md:pt-10 md:pb-10 pt-5 pb-10 md:px-5 px-5 2xl:absolute left-[1100px] right-0  md:top-[200px] mb-4  shadow-glow_small ">
          <div className="font-[700] md:text-[32px] text-[20px] text-[#CACAB2] md:mb-5 mb-2">
            CREATE ACCOUNT
          </div>
          <button
            onClick={() => navigate('/register')}
            className={"md:h-[47px] h-[35px] md:w-[300px] w-[200px] mx-auto md:rounded-[16px] rounded-[8px] md:text-[24px] text-[16px] font-extrabold text-[#CACAB2] md:mb-10 mb-5 flex items-center justify-center " + styles['gradient_button']}
          >
            Sign Up!
          </button>

          <div className="flex justify-between md:w-[300px] w-[250px] mx-auto">
            <Link
              to="/faq"
              className="underline text-[#F2F2EC] cursor-pointer md:text-[20px]"
            >
              FAQ’s
            </Link>
            <Link
              to="/userguide"
              className="underline text-[#F2F2EC] cursor-pointer md:text-[20px]"
            >
              User Guide
            </Link>
            <Link
              to="mailto:info@combatgrounds.com"
              className="underline text-[#F2F2EC] cursor-pointer md:text-[20px]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className={"text-white text-center md:text-[20px] text-[16px]"}>
        © Combat Grounds 2024 : All Rights Reserved
      </div>
    </div>
  );
};

export default NewSignIn;
