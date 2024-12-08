import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
import { socket } from "../../../socket/socket";
import { ROUTES } from "../../constant";
import { getAttackLogs, getAttackableUsers } from "../../../api/attack";
import {
  getBosses,
  getCrew,
  getCrewAds,
  getCrewBoard,
  getInvites,
} from "../../../api/crew";
export const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(({ user }) => user.user);

  const unreadMessagesCount = useSelector(({ mail }) => mail.unread);
  const unreadCrewChatCount = useSelector(
    ({ crew }) => crew.unreadCrewChatCount
  );
  const pendingInviteList = useSelector(({ crew }) => crew.pendingInviteList);

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
        <Link
          to="/attacklog"
          className={styles["link"]}
          onClick={() => {
            getAttackLogs({ page: 1, type: "attacker" }, dispatch);
          }}
        >
          -{" "}
          <u>
            ATTACK LOG{" "}
            <span
              className={`${user && user.unreadAttack ? "text-[red]" : ""}`}
            >
              ({`${user && user.unreadAttack}`})
            </span>
          </u>
        </Link>
        <Link
          to="/mailcenter"
          onClick={() => localStorage.setItem("MAILTYPE", "Inbox")}
          className={styles["link"]}
        >
          -{" "}
          <u>
            MAIL CENTER{" "}
            <span
              className={unreadMessagesCount ? "text-secondary" : "text-white"}
            >
              ({unreadMessagesCount || 0})
            </span>
          </u>
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
        <Link
          to="/attack"
          className={styles["link"]}
          onClick={() => getAttackableUsers({ key: "" }, dispatch)}
        >
          - <u>ATTACK</u>
        </Link>
        <Link to="/map" className={styles["link"]}>
          - <u>BATTLEFIELD</u>
        </Link>
        <Link to="/raisefunds" className={styles["link"]}>
          - <u>RAISE FUNDS</u>
        </Link>
        <Link to="/nukecountry" className={styles["link"]}>
          - <u>NUKE COUNTRIES</u>
        </Link>

        <Link to="/spy" className={styles["link"]}>
          - <u>HIRE SPIES</u>
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
          to="/missions"
          className="text-white font-bold underline ml-1 hover:text-secondary"
        >
          MISSIONS
        </Link>
        <Link
          to="/shop"
          className="text-white font-bold underline ml-1  hover:text-secondary"
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
        {user && user.crew ? (
          <>
            <Link
              to={ROUTES.MAIN_ROUTES.CREW_PROFILE.replace(
                ":crew_id",
                user.crew._id
              )}
              className={styles["link"]}
            >
              - <u>CREW_PROFILE</u>
            </Link>
            <Link
              to={ROUTES.MAIN_ROUTES.CREW_MANAGE}
              className={styles["link"]}
            >
              - <u>MANAGE CREW</u>
            </Link>
            <Link
              to={ROUTES.MAIN_ROUTES.CREW_BANK}
              className={styles["link"]}
              onClick={() => getCrew(dispatch)}
            >
              - <u>CREW_BANK</u>
            </Link>
            <Link
              to={ROUTES.MAIN_ROUTES.CREW_BOSSES}
              className={styles["link"]}
              onClick={() => getBosses(dispatch)}
            >
              - <u>CREW_BOSSES</u>
            </Link>
            <Link
              to={ROUTES.MAIN_ROUTES.CREW_BOARD}
              className={styles["link"]}
              onClick={() => getCrewBoard(dispatch)}
            >
              -{" "}
              <u>
                <span>CREW_BOARD </span>
                <span
                  className={
                    user && user.unreadCrewBoard
                      ? "text-secondary"
                      : "text-white"
                  }
                >
                  ({user.unreadCrewBoard || 0})
                </span>
              </u>
            </Link>
          </>
        ) : (
          <>
            <Link
              to={ROUTES.MAIN_ROUTES.CREW_INVITES}
              className={styles["link"]}
              onClick={() => getInvites(dispatch)}
            >
              -{" "}
              <u>
                <span>CREW_INVITES</span>
                <span
                  className={
                    pendingInviteList ? "text-secondary" : "text-white"
                  }
                >
                  ({pendingInviteList || 0})
                </span>
              </u>
            </Link>
            <Link
              to={ROUTES.MAIN_ROUTES.CREW_CREATE}
              className={styles["link"]}
            >
              - <u>CREATE_CREW</u>
            </Link>
          </>
        )}
        <Link
          to={ROUTES.MAIN_ROUTES.CREW_ADS}
          className={styles["link"]}
          onClick={() => getCrewAds(dispatch)}
        >
          - <u>CREW_ADS</u>
        </Link>
      </div>

      <div className="flex flex-col">
        <Link
          to="/online"
          className="text-white font-bold underline ml-1 hover:text-secondary"
        >
          ONLINE_PLAYERS
        </Link>
        <Link
          to="https://discord.com/channels/1040013836566138992/1298837422054047815"
          className="text-white font-bold underline ml-1 hover:text-secondary"
        >
          LIVE_CHAT
        </Link>
        <Link
          to="https://discord.com/channels/1040013836566138992/1283030820763992116"
          className="text-white font-bold underline ml-1 hover:text-secondary"
        >
          SUPPORT
        </Link>
        {user && user.role === -1 && (
          <Link
            to={ROUTES.ADMIN_ROUTES.HOME}
            className="text-white font-bold underline ml-1 hover:text-secondary"
          >
            ADMIN
          </Link>
        )}
        <span
          // to="/login"
          onClick={() => {
            signOut(dispatch, navigate, socket);
          }}
          className="text-white font-bold underline ml-1 cursor-pointer hover:text-secondary"
        >
          LOGOUT
        </span>
      </div>
    </div>
  );
};
