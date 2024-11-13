import React from "react";

import HorizontalDivider from "../../../components/ui/horizontal-divider";
import HelpIcon from "../../../assets/icons/help";
import LogoutIcon from "../../../assets/icons/logout";

import SidebarTab from "./sidebar-tab";
import SidebarSearchbox from "./sidebar-searchbox";
import SidebarActionBtn from "./sidebar-action-btn";

import { SidebarListOne, SidebarListTwo } from "../../../sidebar-list";

const LeftSidebar = () => {
  return (
    <aside className="flex flex-col md:w-[256px] w-[96px] pt-10 pb-6 h-screen transition-all duration-300">
      <div className="w-full pb-6 md:pb-5 text-center transition-all">
        <span className="text-dark-primary font-[500]  font-laira md:text-[48px] text-[32px] italic leading-none transition-all duration-300">
          C G
        </span>
        <img className="my-2 hidden lg:block" src = "/SignIn/mark.svg" />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="max-md:flex max-md:flex-col items-center w-full px-3 transition-all ">
          <SidebarSearchbox />
        </div>
        <div className="max-md:flex max-md:flex-col max-md:gap-3 w-full px-3 transition-all">
          <div className="flex flex-col gap-1.5 max-md:gap-3 transition-all">
            {SidebarListOne.map((item, index) => (
              <SidebarTab {...item} key={`sidebar-list-one-${index}`} />
            ))}
          </div>
          <HorizontalDivider />
          <div className="flex flex-col gap-1.5 max-md:gap-3 transition-all">
            {SidebarListTwo.map((item, index) => (
              <SidebarTab {...item} key={`sidebar-list-one-${index}`} />
            ))}
          </div>
          <HorizontalDivider />
        </div>
        <div className="flex flex-col flex-1 px-3 gap-1.5 max-md:gap-3 justify-end">
          <div className="max-md:flex max-md:justify-center transition-all">
            <SidebarActionBtn text="Help" click={() => {}} icon={HelpIcon} />
          </div>
          <div className="max-md:flex max-md:justify-center transition-all">
            <SidebarActionBtn
              text="Log out"
              click={() => {}}
              icon={LogoutIcon}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
