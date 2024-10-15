import React, { useState } from "react";

const SignUpPage = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cemail, setCEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [characterType, setCharacterType] = useState("Soldier");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div style={{ backgroundColor: "#000000", textAlign: "center" }}>
      <table width="760" cellPadding="0" cellSpacing="0" border="0">
        <tbody>
          <tr>
            <td>
              <img src="images/spacer.gif" width="111" height="1" alt="" />
            </td>
            <td>
              <img src="images/spacer.gif" width="143" height="1" alt="" />
            </td>
            <td>
              <img src="images/spacer.gif" width="99" height="1" alt="" />
            </td>
            <td>
              <img src="images/spacer.gif" width="149" height="1" alt="" />
            </td>
            <td>
              <img src="images/spacer.gif" width="76" height="1" alt="" />
            </td>
            <td>
              <img src="images/spacer.gif" width="116" height="1" alt="" />
            </td>
            <td>
              <img src="images/spacer.gif" width="66" height="1" alt="" />
            </td>
            <td>
              <img src="images/spacer.gif" width="1" height="1" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
      <table width="880" id="table2" border="0" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td colSpan="7">
              <img
                src="images/index_r1_c1.jpg"
                width="880"
                height="165"
                alt=""
              />
            </td>
            <td>
              <img src="images/spacer.gif" width="1" height="165" alt="" />
            </td>
          </tr>
        </tbody>
      </table>

      <table
        border="4"
        style={{ borderCollapse: "collapse" }}
        width="880"
        height="684"
        bgcolor="#000000"
        borderColor="#81843C"
      >
        <tbody>
          <tr>
            <td valign="top">
              <table width="100%" border="0" cellPadding="10" cellSpacing="10">
                <tbody>
                  <tr>
                    <td width="50%" valign="top">
                      <table
                        width="100%"
                        border="1"
                        cellPadding="4"
                        cellSpacing="4"
                        borderColor="#81843C"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <font
                                color="#FFFFFF"
                                size="4"
                                face="Verdana, Arial, Helvetica, sans-serif"
                              >
                                <b>Member login</b>
                              </font>
                              <br />
                              <br />
                              <font
                                color="#FFFFFF"
                                size="2"
                                face="Verdana, Arial, Helvetica, sans-serif"
                              >
                                Already have a CombatGrounds account? Login
                                here.
                              </font>
                              <form
                                name="loginform"
                                method="post"
                                action="https://combatgrounds.com/authenticate.php"
                              >
                                <table
                                  width="100%"
                                  border="0"
                                  cellPadding="0"
                                  cellSpacing="0"
                                >
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
                                              <td
                                                width="14"
                                                rowSpan="3"
                                                align="left"
                                              ></td>
                                              <td width="105" height="30">
                                                &nbsp;
                                              </td>
                                            </tr>
                                            <tr>
                                              <td width="105" align="left">
                                                <input
                                                  type="text"
                                                  name="user"
                                                  size="10"
                                                  style={{
                                                    border: "0 solid #FFFFFF",
                                                  }}
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
                                                  name="pass"
                                                  size="10"
                                                  style={{
                                                    border: "0 solid #FFFFFF",
                                                  }}
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td>
                                        <input
                                          type="image"
                                          src="imgs/index_r4_c6_f2.jpg"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a
                                          href="forgotpass.php"
                                          onClick={() => {
                                            /* Add your popup logic here */
                                          }}
                                        >
                                          <img
                                            name="index_r5_c6"
                                            src="imgs/index_r5_c6.jpg"
                                            width="96"
                                            height="31"
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td>
                                        <img
                                          src="imgs/spacer.gif"
                                          width="1"
                                          height="31"
                                          alt=""
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </form>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <br />
                      <table
                        width="100%"
                        border="1"
                        cellPadding="4"
                        cellSpacing="4"
                        borderColor="#81843C"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <font
                                color="#FFFFFF"
                                size="4"
                                face="Verdana, Arial, Helvetica, sans-serif"
                              >
                                <b>What is CombatGrounds?</b>
                              </font>
                              <font
                                color="#FFFFFF"
                                size="2"
                                face="Verdana, Arial, Helvetica, sans-serif"
                              >
                                <p>
                                  Combat Grounds is the best text-based strategy
                                  game:
                                </p>
                                <ul>
                                  <li>
                                    Become a Navy Seal, a Soldier, or a
                                    Terrorist.
                                  </li>
                                  <li>
                                    Win fantastic prizes just by playing and
                                    having a great time.
                                  </li>
                                  <li>
                                    Experience the game at blazing speeds! No
                                    downloads! Nothing to install! And best of
                                    all, it's FREE to play!
                                  </li>
                                </ul>
                                Sign up NOW and join our great community!
                                <br />
                                <a href="faq.php">
                                  <img
                                    name="index_r9_c4"
                                    src="https://combatgrounds.com/imgs/index_r9_c4.jpg"
                                    width="29"
                                    height="20"
                                    alt=""
                                  />
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="userguide.php">
                                  <img
                                    name="index_r9_c5"
                                    src="https://combatgrounds.com/imgs/index_r9_c5.jpg"
                                    width="70"
                                    height="20"
                                    alt=""
                                  />
                                </a>
                              </font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td valign="top">
                      <font
                        color="#FFFFFF"
                        size="4"
                        face="Verdana, Arial, Helvetica, sans-serif"
                      >
                        <b>Create your CombatGrounds account</b>
                      </font>
                      <br />
                      <br />
                      <font
                        color="#FFFFFF"
                        size="2"
                        face="Verdana, Arial, Helvetica, sans-serif"
                      >
                        It's free and easy. Just fill out the account info
                        below.
                        <span style={{ color: "red" }}>
                          (All fields required)
                        </span>
                      </font>
                      <div align="left">
                        <font
                          color="#FFFFFF"
                          size="2"
                          face="Verdana, Arial, Helvetica, sans-serif"
                        >
                          <form
                            action="https://combatgrounds.com/register.php"
                            method="post"
                            onSubmit={(e) => {
                              e.preventDefault(); /* Add your validation here */
                            }}
                          >
                            <table
                              width="100%"
                              border="0"
                              cellPadding="1"
                              cellSpacing="1"
                            >
                              <tbody>
                                <tr>
                                  <td width="40%">
                                    <font
                                      color="#FFFFFF"
                                      size="2"
                                      face="Verdana, Arial, Helvetica, sans-serif"
                                    >
                                      Username
                                    </font>
                                  </td>
                                  <td width="30%">
                                    <input
                                      type="text"
                                      name="username"
                                      size="15"
                                      maxLength="50"
                                    />
                                  </td>
                                  <td width="30%">
                                    <font
                                      color="#CCCCCC"
                                      size="1"
                                      face="Verdana"
                                    >
                                      3-15 characters: a-Z 0-9.
                                    </font>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <font
                                      color="#FFFFFF"
                                      size="2"
                                      face="Verdana, Arial, Helvetica, sans-serif"
                                    >
                                      E-mail
                                    </font>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="email"
                                      maxLength="60"
                                    />
                                  </td>
                                  <td>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>
                                    <font
                                      color="#FFFFFF"
                                      size="2"
                                      face="Verdana, Arial, Helvetica, sans-serif"
                                    >
                                      Verify E-mail
                                    </font>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="cemail"
                                      maxLength="60"
                                    />
                                  </td>
                                  <td>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>
                                    <font
                                      color="#FFFFFF"
                                      size="2"
                                      face="Verdana, Arial, Helvetica, sans-serif"
                                    >
                                      Password
                                    </font>
                                  </td>
                                  <td>
                                    <input
                                      type="password"
                                      name="pass"
                                      maxLength="50"
                                      size="15"
                                    />
                                  </td>
                                  <td>
                                    <font
                                      color="#CCCCCC"
                                      size="1"
                                      face="Verdana"
                                    >
                                      8-15 characters: a-Z and 0-9.
                                    </font>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <font
                                      color="#FFFFFF"
                                      size="2"
                                      face="Verdana, Arial, Helvetica, sans-serif"
                                    >
                                      Confirm Password
                                    </font>
                                  </td>
                                  <td>
                                    <input
                                      type="password"
                                      name="cpass"
                                      maxLength="50"
                                      size="15"
                                    />
                                  </td>
                                  <td>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>
                                    <font
                                      color="#FFFFFF"
                                      size="2"
                                      face="Verdana, Arial, Helvetica, sans-serif"
                                    >
                                      Character type
                                    </font>
                                  </td>
                                  <td>
                                    <select name="type">
                                      <option value="Soldier">Soldier</option>
                                      <option value="Navyseal">
                                        Navy Seal
                                      </option>
                                      <option value="Terrorist">
                                        Terrorist
                                      </option>
                                    </select>
                                  </td>
                                  <td>&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                            <p>
                              <input name="terms" type="checkbox" value="1" />I
                              agree to the{" "}
                              <a href="termsofuse.php" target="_blank">
                                <b>terms of use</b>
                              </a>
                              .
                            </p>
                            <p>
                              <input name="multi" type="checkbox" value="1" />
                              This is my ONLY CombatGrounds.com Account.
                            </p>
                            <input type="submit" name="Submit" value="Submit" />
                          </form>
                        </font>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <footer style={{ color: "#000000" }}>
        <b>Copyright © 2005-2006 CombatGrounds.com. All rights reserved.</b>
        <br />
        <a href="mailto:info@combatgrounds.com">Contact us.</a>
        <br />
        <a href="http://www.xmmorpg.com" target="_blank">
          MMORPG
        </a>
      </footer>
    </div>
  );
};

export default SignUpPage;
