import React, { useState, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../common/constant";
const mockdata = [
  {
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },
  {
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },{
    date: "2013/2/2",
    name: "Sealife22312",
    rank: "Rank1",
  },
];
export const Invites = () => {
  const navigate = useNavigate();
  const handleAccept = () => {
    console.log("accept")
  }
  const handleDeny = () => {
    console.log("Deny");
  }
  return (
    <CrewLayout title="Invites">
      <div className="w-full relative h-[300px]">
        <div className="text-white border-[1px] border-secondary-green rounded-md mx-2 mt-2 h-[250px]">
          <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[20%] py-1">Date</div>
            <div className="w-[30%] py-1">Crew Name</div>
            <div className="w-[30%] py-1">Offered rank</div>
            <div className="w-[20%] py-1">Action</div>
          </div>
          <div className="h-[210px] overflow-y-auto">
          {mockdata &&
            mockdata.map((data, index) => (
              <div className="flex w-full text-center border-b-[1px] border-secondary-green " key= {`crew_invite_${index}`}>
                <div className="w-[20%] py-1">{data.date}</div>
                <div className="w-[30%] py-1">{data.name}</div>
                <div className="w-[30%] py-1">{data.rank}</div>
                <div className="w-[20%] py-1 flex justify-center gap-2">
                  <div className="underline text-yellow-300 cursor-pointer hover:text-white" onClick = {handleAccept}>Accept</div> 
                  <div className="underline text-yellow-300 cursor-pointer hover:text-white" onClick={handleDeny}>Deny</div>
                </div>
              </div>
            ))}
            </div>
        </div>
        <div
          className={
            styles["create_button"] +
            " " +
            "absolute bottom-0 mx-auto left-0 right-0 flex items-center justify-center cursor-pointer hover:shadow-glow hover:shadow-[white] font-medium"
          }
          onClick={() => navigate(ROUTES.MAIN_ROUTES.CREW_CREATE)}
        >
          Create Crew
        </div>
      </div>
    </CrewLayout>
  );
};

export default Invites;
