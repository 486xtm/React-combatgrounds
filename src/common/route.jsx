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
  BuyTurns,
  Subscribe,
} from "../pages/core";
import {
  Invites,
  Create,
  Ads,
  CrewBank,
  CrewBoard,
  CrewBosses,
  CrewProfile,
  CrewManage,
  CrewEdit,
} from "../pages/crew";
import {AdminHome, AdminUserList, AdminCrew, AdminUserInfo, AdminData, AdminHistory, AdminMail, AdminCrewInfo} from '../pages/admin';
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
    {
      path: "/",
      element: <SignIn />
    }
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
      path: ROUTES.MAIN_ROUTES.HOF_ID,
      element: <HallOfFame />,
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
    {
      path: ROUTES.MAIN_ROUTES.BUY_TURNS,
      element: <BuyTurns />,
    },
    {
      path: ROUTES.MAIN_ROUTES.SUBSCRIBE,
      element: <Subscribe />,
    },
    {
      path: ROUTES.MAIN_ROUTES.CREW_INVITES,
      element: <Invites />,
    },
    {
      path: ROUTES.MAIN_ROUTES.CREW_CREATE,
      element: <Create />,
    },
    {
      path: ROUTES.MAIN_ROUTES.CREW_ADS,
      element: <Ads />,
    },
    {
      path: ROUTES.MAIN_ROUTES.CREW_BANK,
      element: <CrewBank />,
    },
    {
      path: ROUTES.MAIN_ROUTES.CREW_BOARD,
      element: <CrewBoard />,
    },
    {
      path: ROUTES.MAIN_ROUTES.CREW_BOSSES,
      element: <CrewBosses />,
    },
    {
      path: ROUTES.MAIN_ROUTES.CREW_PROFILE,
      element: <CrewProfile />,
    },
    {
      path: ROUTES.MAIN_ROUTES.CREW_MANAGE,
      element: <CrewManage />,
    },
    { path: ROUTES.MAIN_ROUTES.EDIT_CREW, element: <CrewEdit /> },
  ],
  admin: [
    {
      path: ROUTES.ADMIN_ROUTES.HOME,
      element : <AdminHome />
    },
    {
      path: ROUTES.ADMIN_ROUTES.USER_LIST,
      element : <AdminUserList/>
    },
    {
      path: ROUTES.ADMIN_ROUTES.USER_INFO,
      element: <AdminUserInfo />
    },
    {
      path: ROUTES.ADMIN_ROUTES.CREW_LIST,
      element: <AdminCrew />
    }, 
    {
      path: ROUTES.ADMIN_ROUTES.GAME_DATA,
      element: <AdminData />
    }, 
    {
      path: ROUTES.ADMIN_ROUTES.MAIL_LIST,
      element: <AdminMail />
    }, 
    {
      path: ROUTES.ADMIN_ROUTES.HISTORY,
      element: <AdminHistory />
    },
    {
      path: ROUTES.ADMIN_ROUTES.CREW_INFO,
      element: <AdminCrewInfo />
    }
  ]
};
