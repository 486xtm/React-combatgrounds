import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Header = ({ currentActiveTab = "rankings" }) => {
  return (
    <div className={styles["header-container"]}>
      <div
        className={classNames(styles["main-page"], {
          [styles["active"]]: currentActiveTab === "main-page",
        })}
      />
      <div
        className={classNames(styles["headquarters"], {
          [styles["active"]]: currentActiveTab === "headquarters",
        })}
      />
      <div
        className={classNames(styles["rankings"], {
          [styles["active"]]: currentActiveTab === "rankings",
        })}
      />
      <div
        className={classNames(styles["hall-of-fame"], {
          [styles["active"]]: currentActiveTab === "hall-of-fame",
        })}
      />
      <div
        className={classNames(styles["faq"], {
          [styles["active"]]: currentActiveTab === "faq",
        })}
      />
      <div
        className={classNames(styles["userguide"], {
          [styles["active"]]: currentActiveTab === "userguide",
        })}
      />
      <div
        className={classNames(styles["news"], {
          [styles["active"]]: currentActiveTab === "news",
        })}
      />
    </div>
  );
};
