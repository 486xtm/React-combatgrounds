import React, { useState } from "react";
import TabNav from "../../../common/components/ui/tabs/tab-nav";
import TabPanel from "../../../common/components/ui/tabs/tab-panel";
import { BattleField } from "./battlefield/battlefield";
import { ShopItems } from "./shop/shop";
import { NukeCountry } from "./nukecountry/nukecountry";
import { CrewBosses } from "./crewbosses/crewbosses";
import { Params } from "./params/params";
const tabs = ["Battle Field", "Nuke Countries", "Shop Items", "Crew Bosses", "Params"];
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
      <TabPanel isActive={activeTabIndex === 0}><BattleField/></TabPanel>
      <TabPanel isActive={activeTabIndex === 1}><NukeCountry/></TabPanel>
      <TabPanel isActive={activeTabIndex === 2}><ShopItems/></TabPanel>
      <TabPanel isActive={activeTabIndex === 3}><CrewBosses/></TabPanel>
      <TabPanel isActive={activeTabIndex === 4}><Params/></TabPanel>
    </div>
  );
};
