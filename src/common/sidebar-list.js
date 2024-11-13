import AnnalesIcon from "./assets/icons/annales";
import PlaylistsIcon from "./assets/icons/playlists";
import HistoryIcon from "./assets/icons/history";
import HomeIcon from "./assets/icons/home";
import LibraryIcon from "./assets/icons/library";
import PlannerIcon from "./assets/icons/planner";

export const SidebarListOne = [
  {
    title: "Home",
    link: "/admin",
    icon: HomeIcon(),
  },
  {
    title: "User List",
    link: "/admin/user",
    icon: LibraryIcon(),
  },
  {
    title: "Crew List",
    link: "/admin/crew",
    icon: AnnalesIcon(),
  },
];

export const SidebarListTwo = [
  {
    title: "Playlists",
    link: "/playlists",
    icon: PlaylistsIcon(),
  },
  {
    title: "Planner",
    link: "/planner",
    icon: PlannerIcon(),
  },
  {
    title: "History",
    link: "/history",
    icon: HistoryIcon(),
  },
];
