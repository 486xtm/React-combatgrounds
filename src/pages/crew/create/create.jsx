import React, { useState, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css";
import { useDispatch } from "react-redux";
import { createCrew } from "../../../api/crew";

export const Create = () => {
  const [name, setName] = useState("");
  const [rank1, setRank1] = useState("");
  const [rank2, setRank2] = useState("");
  const [rank3, setRank3] = useState("");
  const [rank4, setRank4] = useState("");
  const [rank5, setRank5] = useState("");
  const [descriptionReaminLetters, setDescriptionReaminLetters] = useState(600);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleCreate = () => {
    createCrew(
      { description, name, roles: [rank1, rank2, rank3, rank4, rank5] },
      dispatch
    );
  };
  useEffect(() => {
    setDescriptionReaminLetters(600 - description.length);
  }, [description]);
  return (
    <CrewLayout title="Create">
      <div className="flex flex-wrap text-white px-5 mt-[50px]">
        <div className="flex flex-col w-[280px] gap-3 mr-2">
          <div className="gap-5 flex">
            <span>Crew Name : </span>
            <input
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 1 : </span>
            <input
              onChange={(ev) => setRank1(ev.target.value)}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 2 : </span>
            <input
              onChange={(ev) => setRank2(ev.target.value)}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 3 : </span>
            <input
              onChange={(ev) => setRank3(ev.target.value)}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 4 : </span>
            <input
              onChange={(ev) => setRank4(ev.target.value)}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 5 : </span>
            <input
              onChange={(ev) => setRank5(ev.target.value)}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-3 justify-center -mt-[40px]">
          <div className="text-center">Description</div>
          <textarea
            className="flex-1 text-sm px-2 py-1 rounded-md shadow-inner shadow-[rgba(255,255,255,0.3)] bg-transparent border-secondary-green border-[1px]"
            maxLength={600}
            rows={10}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <span className="text-sm text-white text-bold mx-auto">
            {descriptionReaminLetters} characters left
          </span>
        </div>
        <div
          className={
            styles["create_button"] +
            " " +
            "mx-auto mt-5 flex items-center justify-center cursor-pointer hover:shadow-glow hover:shadow-[white] font-medium"
          }
          onClick={handleCreate}
        >
          Create Crew
        </div>
      </div>
    </CrewLayout>
  );
};
