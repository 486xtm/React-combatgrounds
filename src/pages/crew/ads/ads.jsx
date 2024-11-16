import React, { useState, useEffect } from "react";
import { Layout } from "../../../common/components";
import styles from "../styles.module.css";
import CrewLayout from "../layout/crew_layout";
import Modal from "../../../common/components/modal/modal";
import { create_ads, getCrewAds } from "../../../api/crew";
import { useDispatch, useSelector } from "react-redux";
export const Ads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descriptionReaminLetters, setDescriptionReaminLetters] = useState(350);
  const [description, setDescription] = useState("");

  const ads = useSelector(({ crew }) => crew.ads);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    create_ads({ content: description }, dispatch);
    setIsModalOpen(false);
  };

  useEffect(() => {
    setDescriptionReaminLetters(350 - description.length);
  }, [description]);

  useEffect(() => {
    getCrewAds(dispatch);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CrewLayout title="Crew Ads">
      <div
        className="flex items-center justify-center cursor-pointer hover:shadow-glow_small absolute top-0 right-0 hover:shadow-[green] font-medium mt-3 mr-[15%] hover:mr-[13%] w-[152px] border-[1px] rounded-md hover:w-[180px] transition-all duration-150"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Post a Crew Ads
      </div>
      <div className="w-full flex flex-col text-white px-2 overflow-y-auto h-[320px]">
        {ads &&
          ads.map((ad, index) => (
            <div
              className="flex w-full border-b-[1px] border-secondary-green py-1"
              key={`crew_ads_${index}`}
            >
              <div className={`w-[110px] ${ad.author ? 'text-yellow-200' : 'text-[red]' }`}>{ad.author ? ad.author.name : "Deleted User"}</div>
              <div className="flex-1">{ad.content}</div>
            </div>
          ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} type="crew_ads">
        <div className="text-center">
          <div className="text-center mb-2 text-xl">Post a Crew Ad</div>
          <textarea
            className="flex-1 text-sm px-2 py-1 rounded-md shadow-inner shadow-[rgba(255,255,255,0.3)] bg-transparent border-secondary-green border-[1px] w-[400px]"
            maxLength={600}
            rows={10}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div className="text-sm text-white text-bold flex justify-between">
            {descriptionReaminLetters} characters left
            <div className="flex gap-2">
              <button
                onClick={handleSubmit}
                className="bg-secondary-green text-white px-3 py-1 rounded"
              >
                submit
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </CrewLayout>
  );
};
