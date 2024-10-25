import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const Header = ({ currentActiveTab = "headquarters" }) => {
  const navigate = useNavigate();

  return (
    <div className={styles["header-container"]}>
      <div
        className={classNames(styles["main-page"], {
          [styles["active"]]: currentActiveTab === "main-page",
        })}
        onClick={() => navigate("/")}
      />
      <div
        className={classNames(styles["headquarters"], {
          [styles["active"]]: currentActiveTab === "headquarters",
        })}
        onClick={() => navigate("/headquarter")}
      />
      <div
        className={classNames(styles["rankings"], {
          [styles["active"]]: currentActiveTab === "rankings",
        })}
        onClick={() => navigate("/ranking")}
      />
      <div
        className={classNames(styles["hall-of-fame"], {
          [styles["active"]]: currentActiveTab === "hall-of-fame",
        })}
        onClick={() => navigate("/hof")}
      />
      <div
        className={classNames(styles["faq"], {
          [styles["active"]]: currentActiveTab === "faq",
        })}
        onClick={() => navigate("/faq")}
      />
      <div
        className={classNames(styles["userguide"], {
          [styles["active"]]: currentActiveTab === "userguide",
        })}
        onClick={() => navigate("/userguide")}
      />
      <div
        className={classNames(styles["news"], {
          [styles["active"]]: currentActiveTab === "news",
        })}
        onClick={() => {
          window.location.href =
            "https://discordapp.com/channels/1040013836566138992/1265903715068543007";
          // navigate(
          //   "https://discordapp.com/channels/1040013836566138992/1265903715068543007"
          // );
        }}
      />
    </div>
  );
};
