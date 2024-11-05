// export const socketURL = "http://45.61.57.139:5000";
// export const basicURL = "http://45.61.57.139:5000/api";
export const basicURL = "http://localhost:5000/api";
export const socketURL = "http://localhost:5000";

export const ROUTES = {
  AUTH_ROUTES: {
    SIGN_IN: '/login',
    SING_UP: '/register',
    FORGOT_PASS: '/forgot_password',
    FAQ: '/faq',
    USER_GUIDE: '/userguide'
  },
  MAIN_ROUTES: {
    CHOOSE_HELPER: '/choosehelper',
    HEADQUARTER: '/headquarter',
    HOF: '/hof',
    RANKING: '/ranking',
    PROFILE: '/profile',
    EDITINFO: '/editinfo',
    STATMISC: '/statmisc',
    NUKE_COUNTRY: '/nukecountry',
    MAIL_CENTER: '/mailcenter',
    ATTACKLOG: '/attacklog',
    TERRITORIES: '/territories',
    RAISE_FUND: '/raisefunds',
    BOOT_CAMP: '/bootcamp',
    HOME_LEAVE: '/homelve',
    BAT_MAP: '/map',
    BATTLE_FIELD: '/battlefield/:region_id',
    SHOP: '/shop',
    ONLINE: '/online',
  }
}