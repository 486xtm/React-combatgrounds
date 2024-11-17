import React, { useState } from "react";
import { FaTrashCan, FaPen } from "react-icons/fa6";
import TabNav from "../../../common/components/ui/tabs/tab-nav";
import TabPanel from "../../../common/components/ui/tabs/tab-panel";
import { AdminCrewList } from "./crewlist";
import { AdminCrewAds } from "./crewads";


const tabs = ["Crew List", "Crew Ads"];
export const AdminCrew = () => {
  
  const [activeTabIndex, setActiveTabIndex] = useState(0);


  return (
    <div>
      <div className="flex gap-10 border-b border-[rgba(0,0,0,0.1)] mt-4">
        {tabs.map((item, index) => (
          <TabNav
            key={`tab-nav-${index}`}
            text={item}
            isActive={activeTabIndex === index}
            click={() => {
              setActiveTabIndex(index);
            }}
          />
        ))}
      </div>
      <TabPanel isActive={activeTabIndex === 0}>
        <AdminCrewList />
      </TabPanel>
      <TabPanel isActive={activeTabIndex === 1}>
        <AdminCrewAds />
      </TabPanel>
    </div>
  );
};
