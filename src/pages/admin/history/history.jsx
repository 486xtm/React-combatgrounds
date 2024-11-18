
import React, { useState } from "react";
import TabNav from "../../../common/components/ui/tabs/tab-nav";
import TabPanel from "../../../common/components/ui/tabs/tab-panel";
import { AdminBattleFieldLog } from "./battlelogs/battlelogs";
import { AdminNukeLogs } from "./nukelogs/nukelogs";
import { AdminTransactionlogs } from "./transactionlogs/transactionlogs";
const tabs = ["BattleField Logs", "Nuke Logs", "Transaction Logs"];

export const AdminHistory = () =>{
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
      <TabPanel isActive={activeTabIndex === 0}><AdminBattleFieldLog/></TabPanel>
      <TabPanel isActive={activeTabIndex === 1}><AdminNukeLogs/></TabPanel>
      <TabPanel isActive={activeTabIndex === 2}><AdminTransactionlogs/></TabPanel>
    </div>
  );
}


