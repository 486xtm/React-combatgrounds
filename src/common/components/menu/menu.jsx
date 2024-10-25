import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/authSlice";
export const Menu = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles["menu-container"]}>
      <div className={styles["menu-item"]}>MEMBERS</div>
      <div className={styles["sub-menu"]}>
        <Link to="/headquarter" className={styles["link"]}>
          - <u>HEADQUARTERS</u>
        </Link>
        <Link to="/choosehelper" className={styles["link"]}>
          - <u>FIND A HELPER</u>
        </Link>
        <Link to="/attacklog" className={styles["link"]}>
          - <u>ATTACK LOG (0)</u>
        </Link>
        <Link to="/mailcenter" className={styles["link"]}>
          - <u>MAIL CENTER (0)</u>
        </Link>
      </div>

      <div className={styles["menu-item"]}>PROFILE</div>
      <div className={styles["sub-menu"]}>
        <Link to="/profile" className={styles["link"]}>
          - <u>VIEW PROFILE</u>
        </Link>
        <Link to="/editinfo" className={styles["link"]}>
          - <u>EDIT PROFILE</u>
        </Link>
      </div>

      <div className={styles["menu-item"]}>ACTIONS</div>
      <div className={styles["sub-menu"]}>
        <Link to="/attack" className={styles["link"]}>
          - <u>ATTACK</u>
        </Link>
        <Link to="/territories" className={styles["link"]}>
          - <u>BATTLEFIELD</u>
        </Link>
        <Link to="/raisefunds" className={styles["link"]}>
          - <u>RAISE FUNDS</u>
        </Link>
        <Link to="/nukecountry" className={styles["link"]}>
          - <u>NUKE COUNTRIES</u>
        </Link>
      </div>

      <div className={styles["menu-item"]}>MANAGE TROOPS</div>
      <div className={styles["sub-menu"]}>
        <Link to="/recruit" className={styles["link"]}>
          - <u>RECRUIT</u>
        </Link>
        <Link to="/bootcamp" className={styles["link"]}>
          - <u>TRAINING</u>
        </Link>
        <Link to="/homelve" className={styles["link"]}>
          - <u>HOME LEAVE</u>
        </Link>
      </div>

      <div className="flex flex-col">
        <Link
          to="/#missions"
          className="text-white font-bold underline ml-1 text-xs hover:text-secondary"
        >
          MISSIONS
        </Link>
        <Link
          to="/shop"
          className="text-white font-bold underline ml-1  text-xs hover:text-secondary"
        >
          SHOP
        </Link>
        {/* <Link
          to="/bank"
          className="text-white font-bold underline ml-1 text-xs hover:text-secondary"
        >
          BANK
        </Link> */}
      </div>
      <div className={styles["menu-item"]}>CREW</div>
      <div className={styles["sub-menu"]}>
        <Link to="/headquarter/#crew-invite" className={styles["link"]}>
          - <u>CREW_INVITES</u>
        </Link>
        <Link to="/headquarter/#crew-create" className={styles["link"]}>
          - <u>CREATE_CREW</u>
        </Link>
        <Link to="/headquarter/#crew-ads" className={styles["link"]}>
          - <u>CREW_ADS</u>
        </Link>
      </div>

      <div className="flex flex-col">
        <Link
          to="/missions"
          className="text-white font-bold underline ml-1 text-xs hover:text-secondary"
        >
          ONLINE_PLAYERS
        </Link>
        <Link
          to="https://discord.com/channels/1040013836566138992/1298837422054047815"
          className="text-white font-bold underline ml-1 text-xs hover:text-secondary"
        >
          LIVE_CHAT
        </Link>
        <Link
          to="https://discord.com/channels/1040013836566138992/1283030820763992116"
          className="text-white font-bold underline ml-1 text-xs hover:text-secondary"
        >
          SUPPORT
        </Link>
        <Link
          to="/login"
          onClick={() => {
            dispatch(logout());
          }}
          className="text-white font-bold underline ml-1 text-xs hover:text-secondary"
        >
          LOGOUT
        </Link>
      </div>
    </div>
  );
};
