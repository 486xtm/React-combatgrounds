// export const socketURL = "https://war-grounds.com";
// export const basicURL = "https://war-grounds.com/api";
// export const publicURL = "https://war-grounds.com";
export const basicURL = "http://localhost:5000/api";
export const publicURL = "http://localhost:5000";
export const socketURL = "http://localhost:5000";

// export const CLIENT_ID = "AeXdhQLr6V9uqDM6ds6XQ1Y2dLsnhYIThxxo6_PrcXd7dL2MW_mczHejWCap-SIVkuXYu2_LV_9PXYly";
// export const APP_SECRET = "ENkJHI1fuHQQlJuRQOf9dALVB1v7u2tkR7g2MoiYy7IOGDHRUY2v3x2lHc7POeg2NRlER3j8x1FaO6Hs";
export const CLIENT_ID =
  "AeNces6sUIUBhyVfzahcWA1bxjyknLCxOq7mJh1pXHP0y8X0Udg_7VxiCRAtzqLygNwwwJzlgQnKDPFz";
export const APP_SECRET =
  "EO3dFPWwPiCfHNgXkR1JHZuqNoBMC7BH7uiv555v4tpSooQ80zWtcOYL5mdOrrxfrBU--22Q1AJllRW2";

export const ROUTES = {
  AUTH_ROUTES: {
    SIGN_IN: "/login",
    SING_UP: "/register",
    FORGOT_PASS: "/forgot_password",
    FAQ: "/faq",
    USER_GUIDE: "/userguide",
  },
  MAIN_ROUTES: {
    CHOOSE_HELPER: "/choosehelper",
    HEADQUARTER: "/headquarter",
    HOF_ID: "/hof/:roundId",
    HOF: "/hof",
    RANKING: "/ranking",
    PROFILE: "/profile",
    EDITINFO: "/editinfo",
    STATMISC: "/statmisc",
    NUKE_COUNTRY: "/nukecountry",
    SPY: "/spy",
    MAIL_CENTER: "/mailcenter",
    ATTACKLOG: "/attacklog",
    TERRITORIES: "/territories",
    RAISE_FUND: "/raisefunds",
    RECRUIT: "/recruit",
    BOOT_CAMP: "/bootcamp",
    HOME_LEAVE: "/homelve",
    BAT_MAP: "/map",
    BATTLE_FIELD: "/battlefield/:region_id",
    SHOP: "/shop",
    ONLINE: "/online",
    BUY_TURNS: "/buyturns",
    SUBSCRIBE: "/vip",
    CREW_INVITES: "/crew_invites",
    CREW_ADS: "/crew_ads",
    CREW_CREATE: "/crew_create",
    EDIT_CREW: "/crew_edit",

    CREW_PROFILE: "/crew_profile/:crew_id",
    CREW_MANAGE: "/crew_manage",
    CREW_BANK: "/crew_bank",
    CREW_BOSSES: "/crew_bosses",
    CREW_BOARD: "/crew_board",

    ATTACK: "/attack",
    MISSION: "/missions",
  },
  ADMIN_ROUTES: {
    HOME: "/admin",
    USER_LIST: "/admin/user",
    USER_INFO: "/admin/user/:user_id",
    CREW_LIST: "/admin/crew",
    ROUND_DATA: "/admin/round",
    GAME_DATA: "/admin/data",
    MAIL_LIST: "/admin/mail",
    HISTORY: "/admin/history",
    CREW_INFO: "/admin/crew/:crew_id",
  },
};
