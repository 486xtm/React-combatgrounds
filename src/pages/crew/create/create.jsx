import React, { useState, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "./styles.module.css";

export const Create = () => {
  const [name, setName] = useState("");
  const [rank1, setRank1] = useState("");
  const [rank2, setRank2] = useState("");
  const [rank3, setRank3] = useState("");
  const [rank4, setRank4] = useState("");
  const [rank5, setRank5] = useState("");
  const [descriptionReaminLetters, setDescriptionReaminLetters] = useState(600);
  const [description, setDescription] = useState("");
  const handleCreate = () => {
    console.log("Create");
  }
  return (
    <CrewLayout title="Create">
      <div className="flex flex-wrap text-white px-5 mt-[50px]">
        <div className="flex flex-col w-1/2 gap-3">
          <div className="gap-5 flex">
            <span>Crew Name : </span>
            <input
              onChange={(ev) => setRank1(ev.target.value)}
              className="bg-transparent border-[#2FC1EF] shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex">
            <span className="mr-9">Rank 1 : </span>
            <input
              onChange={(ev) => setRank2(ev.target.value)}
              className="bg-transparent border-[#2FC1EF] shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex">
            <span className="mr-9">Rank 2 : </span>
            <input
              onChange={(ev) => setRank3(ev.target.value)}
              className="bg-transparent border-[#2FC1EF] shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex">
            <span className="mr-9">Rank 3 : </span>
            <input
              onChange={(ev) => setRank4(ev.target.value)}
              className="bg-transparent border-[#2FC1EF] shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex">
            <span className="mr-9">Rank 4 : </span>
            <input
              onChange={(ev) => setRank5(ev.target.value)}
              className="bg-transparent border-[#2FC1EF] shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex">
            <span className="mr-9">Rank 5 : </span>
            <input
              onChange={(ev) => setRank1(ev.target.value)}
              className="bg-transparent border-[#2FC1EF] shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-3 justify-center -mt-[40px]">
          <div className="text-center">Description</div>
          <textarea
            className="flex-1 text-sm px-2 py-1 rounded-md shadow-inner shadow-[rgba(255,255,255,0.3)] bg-transparent border-[#2FC1EF] border-[1px]"
            maxLength={600}
            rows={10}
            value={description}
            onChange={(e) => {setDescription(e.target.value),setDescriptionReaminLetters(450 - description.length)}}
          />
          <span className="text-sm text-white text-bold mx-auto">
                {descriptionReaminLetters} characters left
              </span>
        </div>
        <div
          className={
            styles["create_button"] +
            " " +
            "mx-auto mt-5 flex items-center justify-center cursor-pointer hover:shadow-glow hover:shadow-[blue]"
          }
          onClick={handleCreate}
        >
          Create Crew
        </div>
      </div>
    </CrewLayout>
  );
};
