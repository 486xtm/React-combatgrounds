import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Loading from "../../../common/components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../api/auth";
const MyComponent = () => {
  // Preload images on component mount

  const navigate = useNavigate();
  const isInitial = useSelector(({ auth }) => auth.isInitial);
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const loginError = useSelector(({ error }) => error.login);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hover, setHover] = useState(false);
  const [hoverFag, setHoverFag] = useState(false);
  const [hoverUserGuid, setHoverUserGuid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(({user}) => user.user);
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

  useEffect(() => {
    if (loginError) {
      navigate("/register");
    }
  }, [loginError]);
  useEffect(() => {
    const preloadImages = (imageArray) => {
      imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages([
      "imgs/index_r4_c6_f2.jpg",
      "imgs/index_r5_c6_f2.jpg",
      "imgs/index_r9_c4_f2.jpg",
      "imgs/index_r9_c5_f2.jpg",
      "imgs/index_r11_c12_f2.jpg",
    ]);

    // Disable right-click context menu
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div className={styles["sign-in-container"]}>
      <div align="center">
        <table border="0" cellPadding="0" cellSpacing="0" width="880">
          <tbody>
            <tr>
              {[22, 54, 66, 29, 25, 45, 51, 50, 25, 236, 206, 71].map(
                (width, index) => (
                  <td key={index}>
                    <img
                      src="imgs/spacer.gif"
                      width={width}
                      height="1"
                      alt=""
                    />
                  </td>
                )
              )}
            </tr>

            <tr>
              <td rowSpan="3" colSpan="10">
                <img
                  src="imgs/index_r1_c1.jpg"
                  width="603"
                  height="150"
                  alt=""
                />
              </td>
              <td colSpan="2">
                <img
                  src="imgs/index_r1_c11.jpg"
                  width="277"
                  height="51"
                  alt=""
                />
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="51" alt="" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <Link to="/register">
                  <img
                    src="imgs/index_r2_c11.png"
                    width="277"
                    height="78"
                    alt="Sign Up!"
                  />
                </Link>
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="78" alt="" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <img
                  src="imgs/index_r3_c11.jpg"
                  width="277"
                  height="21"
                  alt=""
                />
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="21" alt="" />
              </td>
            </tr>
            <tr>
              <td rowSpan="2" colSpan="2">
                <img
                  src="imgs/index_r4_c1.jpg"
                  width="76"
                  height="101"
                  alt=""
                />
              </td>
              <td
                rowSpan="2"
                colSpan="3"
                style={{
                  backgroundImage: 'url("imgs/index_r4_c3.jpg")',
                  verticalAlign: "top",
                }}
              >
                <table
                  cellPadding="0"
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
                      <td width="105" align="left" className="pass">
                        <input
                          type="text"
                          name="username"
                          size="10"
                          className="border-0 rounded-lg"
                          onChange={(e) => setUsername(e.target.value)}
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
                      <td width="105" align="left" className="pass">
                        <input
                          type="password"
                          name="password"
                          size="10"
                          className="border-0 rounded-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td colSpan="2">
                <input
                  type="image"
                  src="imgs/index_r4_c6_f2.jpg"
                  onClick={() => handleLogin()}
                />
              </td>
              <td rowSpan="2" colSpan="5">
                <img
                  src="imgs/index_r4_c8.jpg"
                  width="588"
                  height="101"
                  alt=""
                />
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="70" alt="" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <Link
                  to="/forgotpass"
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <img
                    name="index_r5_c6"
                    src={
                      hover ? "imgs/index_r5_c6_f2.jpg" : "imgs/index_r5_c6.jpg"
                    }
                    width="96"
                    height="31"
                    alt=""
                  />
                </Link>
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="31" alt="" />
              </td>
            </tr>
            <tr>
              <td colSpan="9">
                <img
                  src="imgs/index_r6_c1.jpg"
                  width="367"
                  height="31"
                  alt=""
                />
              </td>
              <td rowSpan="5" colSpan="3">
                <img
                  src="imgs/index_r6_c10.jpg"
                  width="513"
                  height="279"
                  alt=""
                />
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="31" alt="" />
              </td>
            </tr>
            <tr>
              <td rowSpan="5">
                <img
                  src="imgs/index_r7_c1.jpg"
                  width="22"
                  height="268"
                  alt=""
                />
              </td>
              <td colSpan="7" valign="center" align="center">
                {isInitial ? (
                  <div className="desc text-left leading-4 w-[320px]">
                    Combat Grounds is a text-based multiplayer strategy game for
                    those who want to jump into a world of politics and dominate
                    the battlefield through words and strength.
                    <br />
                    <br />
                    At Combat Grounds you can become a Navy Seal, a Soldier, or
                    a Terrorist. Where is the enemy? Who are your allies? In an
                    environment where the only certainty you have is yourself,
                    can you survive?
                    <a href="intro.htm" className="text-white">
                      {" "}
                      [+]
                    </a>
                  </div>
                ) : (
                  <span>
                    <p>&nbsp;</p>
                    <span
                      style={{
                        color: "#FF0000",
                        fontSize: "2",
                        fontFamily: "Verdana",
                      }}
                    >
                      <div className="desc error">
                        <b>You must be logged in to view that page.</b>
                      </div>
                    </span>
                  </span>
                )}
                {/*  */}
              </td>
              <td rowSpan="2">
                <img
                  src="imgs/index_r7_c9.jpg"
                  width="25"
                  height="181"
                  alt=""
                />
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="169" alt="" />
              </td>
            </tr>
            <tr>
              <td colSpan="7">
                <img
                  src="imgs/index_r8_c2.jpg"
                  width="320"
                  height="12"
                  alt=""
                />
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="12" alt="" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <img
                  src="imgs/index_r9_c2.jpg"
                  width="120"
                  height="20"
                  alt=""
                />
              </td>
              <td>
                <Link
                  to="/faq"
                  onMouseOver={() => setHoverFag(true)}
                  onMouseLeave={() => setHoverFag(false)}
                >
                  <img
                    src={
                      hoverFag
                        ? "imgs/index_r9_c4_f2.jpg"
                        : "imgs/index_r9_c4.jpg"
                    }
                    width="29"
                    height="20"
                    alt=""
                  />
                </Link>
              </td>
              <td colSpan="2">
                <Link
                  to="/userguide"
                  onMouseOver={() => setHoverUserGuid(true)}
                  onMouseLeave={() => setHoverUserGuid(false)}
                >
                  <img
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
              </td>
              <td colSpan="3">
                <img
                  src="imgs/index_r9_c7.jpg"
                  width="126"
                  height="20"
                  alt=""
                />
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="20" alt="" />
              </td>
            </tr>
            <tr>
              <td rowSpan="2" colSpan="8">
                <Link to="/register">
                  <img
                    src="imgs/index_r10_c2.gif"
                    width="345"
                    height="67"
                    alt="Sign Up!"
                  />
                </Link>
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="47" alt="" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <img
                  src="imgs/index_r11_c10.jpg"
                  width="442"
                  height="20"
                  alt=""
                />
              </td>
              <td>
                <Link to="mailto:info@combatgrounds.com">
                  <img
                    src="imgs/index_r11_c12.jpg"
                    width="71"
                    height="20"
                    alt=""
                  />
                </Link>
              </td>
              <td>
                <img src="imgs/spacer.gif" width="1" height="20" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(MyComponent);
