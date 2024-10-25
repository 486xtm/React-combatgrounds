import React from "react";
import { Layout } from "../../../common/components/layout/layout";
const contens = [
  {
    id : "1-Introduction",
    section: 'M1',
    title: ["1.1 - Overview", "1.2 - Prizes at the end of a round", "1.3 - Getting Started", "1.4 - Quick Start"]
  },
  {
    id : "2 - Layout",
    section: 'M2',
    title: ["2.1 - Horizontal menu", "2.2 - Control Panel", "2.3 - Stats table"]
  },
  {
    id : "3 - Actions",
    section: 'M3',
    title: ["2.1 - Horizontal menu", "2.2 - Control Panel", "2.3 - Stats table"]
  },
]
export const UserGuide = () => {
  return (
    <Layout isMenuShow={false} isHeaderFull={true} currentActiveTab={"faq"}>
      <div className="flex flex-col flex-1 py-[20px]">
        <div className="text-center text-[#81843C] text-[30px] font-bold">
          Combat Grounds User Guide
        </div>
        <div className="bg-[#81843C] w-[630px] border-[1px] mx-auto px-[20px] py-[40px]">
          <div className="underline font-bold text-[16px] mb-3">
            Table of Contents
          </div>
        </div>
      </div>
    </Layout>
  );
};
