import React, { useState } from "react";
import TabNav from "../../../common/components/ui/tabs/tab-nav";
import TabPanel from "../../../common/components/ui/tabs/tab-panel";
const tabs = ["Battle Field", "Nuke Countries", "Shop Items", "Crew Bosses"];
export const AdminData = () => {
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
      <TabPanel isActive={activeTabIndex === 0}>BattleField</TabPanel>
      <TabPanel isActive={activeTabIndex === 1}>Nuke Countries</TabPanel>
      <TabPanel isActive={activeTabIndex === 2}>Shop Items</TabPanel>
      <TabPanel isActive={activeTabIndex === 3}>Crew Bosses</TabPanel>
    </div>
  );
};
