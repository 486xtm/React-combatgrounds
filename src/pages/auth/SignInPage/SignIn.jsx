import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { Link, useNavigate } from "react-router-dom";

const MyComponent = () => {
  // Preload images on component mount

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("loginfo==>", username, password);
    navigate("/choose-helper");
  };

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
                          style={{ border: "0" }}
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
                          style={{ border: "0" }}
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
                  onClick={() => popupfp(this, "forgotpass")}
                >
                  <img
                    src="imgs/index_r5_c6.jpg"
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
              <td colSpan="7" valign="top">
                <p>&nbsp;</p>
                <span
                  style={{
                    color: "#FF0000",
                    fontSize: "2",
                    fontFamily: "Verdana",
                  }}
                >
                  <b>
                    <div className="desc error">
                      You must be logged in to view that page.
                    </div>
                  </b>
                </span>
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
                <Link to="faq">
                  <img
                    src="imgs/index_r9_c4.jpg"
                    width="29"
                    height="20"
                    alt=""
                  />
                </Link>
              </td>
              <td colSpan="2">
                <Link to="userguide">
                  <img
                    src="imgs/index_r9_c5.jpg"
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
            <tr>
              <td colSpan="12">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="12" align="center">
                <embed
                  width="728"
                  height="90"
                  quality="high"
                  bgcolor="#000000"
                  src="070912_728x90_gangster.swf"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="http://www.xmmorpg.com" target="_blank">
          <span
            style={{
              fontSize: "1",
              fontFamily: "Arial, Helvetica, sans-serif",
              marginTop: "20px",
            }}
          >
            MMORPG
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MyComponent;
