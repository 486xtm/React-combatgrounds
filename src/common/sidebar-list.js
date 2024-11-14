import AnnalesIcon from "./assets/icons/annales";
import PlaylistsIcon from "./assets/icons/playlists";
import HistoryIcon from "./assets/icons/history";
import HomeIcon from "./assets/icons/home";
import LibraryIcon from "./assets/icons/library";
import PlannerIcon from "./assets/icons/planner";

export const SidebarListOne = [
  {
    title: "DashBoard",
    link: "/admin",
    icon: HomeIcon(),
  },
  {
    title: "Users",
    link: "/admin/user",
    icon: LibraryIcon(),
  },
  {
    title: "Crew",
    link: "/admin/crew",
    icon: AnnalesIcon(),
  },
];

export const SidebarListTwo = [
  {
    title: "Game Data",
    link: "/admin/data",
    icon: PlaylistsIcon(),
  },
  {
    title: "Mail",
    link: "/admin/mail",
    icon: PlannerIcon(),
  },
  {
    title: "History",
    link: "/admin/history",
    icon: HistoryIcon(),
  },
];
