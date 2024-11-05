import SignIn from "../pages/auth/SignInPage/SignIn";
import SignUp from "../pages/auth/SignUpPage/SignUp";
import {
  AttackLog,
  BattleField,
  BattleFieldMap,
  BattleFieldRegion,
  ChooseHelper,
  EditInfo,
  FAQ,
  HallOfFame,
  HeadQuarter,
  HomeLeave,
  MailCenter,
  NukeCountry,
  OnlinePlayers,
  Profile,
  RaiseFund,
  Rankings,
  Shop,
  StatMisc,
  Training,
  UserGuide,
} from "../pages/core";
import { ROUTES } from "./constant";

export const routes = {
  auth: [
    {
      path: ROUTES.AUTH_ROUTES.SIGN_IN,
      element: <SignIn />,
    },
    {
      path: ROUTES.AUTH_ROUTES.SING_UP,
      element: <SignUp />,
    },
    {
      path: ROUTES.AUTH_ROUTES.USER_GUIDE,
      element: <UserGuide />,
    },
    {
      path: ROUTES.AUTH_ROUTES.FAQ,
      element: <FAQ />,
    },
  ],
  main: [
    {
      path: ROUTES.MAIN_ROUTES.CHOOSE_HELPER,
      element: <ChooseHelper />,
    },
    {
      path: ROUTES.MAIN_ROUTES.HEADQUARTER,
      element: <HeadQuarter />,
    },
    {
      path: ROUTES.MAIN_ROUTES.HOF,
      element: <HallOfFame />,
    },
    {
      path: ROUTES.MAIN_ROUTES.RANKING,
      element: <Rankings />,
    },
    {
      path: ROUTES.MAIN_ROUTES.PROFILE,
      element: <Profile />,
    },
    {
      path: ROUTES.MAIN_ROUTES.EDITINFO,
      element: <EditInfo />,
    },
    {
      path: ROUTES.MAIN_ROUTES.STATMISC,
      element: <StatMisc />,
    },
    {
      path: ROUTES.MAIN_ROUTES.NUKE_COUNTRY,
      element: <NukeCountry />,
    },
    {
      path: ROUTES.MAIN_ROUTES.MAIL_CENTER,
      element: <MailCenter />,
    },
    {
      path: ROUTES.MAIN_ROUTES.ATTACKLOG,
      element: <AttackLog />,
    },
    {
      path: ROUTES.MAIN_ROUTES.RAISE_FUND,
      element: <RaiseFund />,
    },
    {
      path: ROUTES.MAIN_ROUTES.BOOT_CAMP,
      element: <Training />,
    },
    {
      path: ROUTES.MAIN_ROUTES.HOME_LEAVE,
      element: <HomeLeave />,
    },
    {
      path: ROUTES.MAIN_ROUTES.BAT_MAP,
      element: <BattleFieldMap />,
    },
    {
      path: ROUTES.MAIN_ROUTES.BATTLE_FIELD,
      element: <BattleFieldRegion />,
    },
    {
      path: ROUTES.MAIN_ROUTES.SHOP,
      element: <Shop />,
    },
    {
      path: ROUTES.MAIN_ROUTES.ONLINE,
      element: <OnlinePlayers />,
    },
  ],
};
