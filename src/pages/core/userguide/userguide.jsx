import React from "react";
import { Layout } from "../../../common/components/layout/layout";
export const UserGuid = () => {
  return (
    <Layout isMenuShow={false} isHeaderFull={true} currentActiveTab={"faq"}>
      <div className="flex flex-col flex-1 py-[20px]">
        <div className="text-center text-[#81843C] text-[30px] font-bold">
          Frequently asked questions
        </div>
        <div className="bg-[#81843C] w-[630px] border-[1px] mx-auto px-[20px] py-[40px]">

        </div>
      </div>
    </Layout>
  );
};
