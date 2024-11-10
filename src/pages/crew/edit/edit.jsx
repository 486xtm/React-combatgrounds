import React, { useState, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editCrew, getCrew } from "../../../api/crew";

export const CrewEdit = () => {
  const [name, setName] = useState("");
  const [rank1, setRank1] = useState("");
  const [rank2, setRank2] = useState("");
  const [rank3, setRank3] = useState("");
  const [rank4, setRank4] = useState("");
  const [rank5, setRank5] = useState("");
  const [descriptionReaminLetters, setDescriptionReaminLetters] = useState(600);
  const [description, setDescription] = useState("");

  const crew = useSelector(({ crew }) => crew.crew);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    editCrew(
      { description, name, roles: [rank1, rank2, rank3, rank4, rank5] },
      dispatch
    );
  };

  useEffect(() => {
    setDescriptionReaminLetters(600 - description.length);
  }, [description]);

  useEffect(() => {
    getCrew(dispatch);
  }, []);

  useEffect(() => {
    if (!crew) return;
    setName(crew.name);
    setRank1(crew.roles[0]);
    setRank2(crew.roles[1]);
    setRank3(crew.roles[2]);
    setRank4(crew.roles[3]);
    setRank5(crew.roles[4]);
    setDescription(crew.description);
  }, [crew]);

  return (
    <CrewLayout title="Update">
      <div className="flex flex-wrap text-white px-5 mt-[50px]">
        <div className="flex flex-col w-[280px] gap-3 mr-2">
          <div className="gap-5 flex justify-between">
            <span>Crew Name : </span>
            <input
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 1 : </span>
            <input
              onChange={(ev) => setRank1(ev.target.value)}
              value={rank1}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 2 : </span>
            <input
              onChange={(ev) => setRank2(ev.target.value)}
              value={rank2}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 3 : </span>
            <input
              onChange={(ev) => setRank3(ev.target.value)}
              value={rank3}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 4 : </span>
            <input
              onChange={(ev) => setRank4(ev.target.value)}
              value={rank4}
              className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
            />
          </div>
          <div className="gap-5 flex w-[280px] justify-between">
            <span>Rank 5 : </span>
            <input
              onChange={(ev) => setRank5(ev.target.value)}
              value={rank5}
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
          onClick={handleUpdate}
        >
          Update Crew
        </div>
      </div>
    </CrewLayout>
  );
};
