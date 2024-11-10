import React, { useState, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../common/constant";
import { useDispatch, useSelector } from "react-redux";
import { dealInvite, getInvites } from "../../../api/crew";
import moment from "moment";
import { setPendingInviteList } from "../../../redux/crewSlice";

export const Invites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAccept = (invite_id) => {
    dealInvite({ invite_id, type: 1 }, dispatch, navigate);
  };
  const handleDeny = (invite_id) => {
    dealInvite({ invite_id, type: 0 }, dispatch);
  };

  const invites = useSelector(({ crew }) => crew.invites);

  useEffect(() => {
    getInvites(dispatch);
    setPendingInviteList(0);
  }, []);

  return (
    <CrewLayout title="Invites">
      <div className="w-full relative h-[300px]">
        <div className="text-white border-[1px] border-secondary-green rounded-md mx-2 mt-2 h-[250px]">
          <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
            <div className="w-[20%] py-1">Date</div>
            <div className="w-[30%] py-1">Crew Name</div>
            <div className="w-[30%] py-1">Offered rank</div>
            <div className="w-[20%] py-1">Action</div>
          </div>
          <div className="h-[210px] overflow-y-auto">
            {invites &&
              invites.map((invite, index) => (
                <div
                  className="flex w-full text-center border-b-[1px] border-secondary-green items-center"
                  key={`crew_invite_${index}`}
                >
                  <div className="w-[20%] py-1 text-xs">
                    {moment(invite.updatedAt).format("MMMM Do, YYYY, h:mm A")}
                  </div>
                  <div className="w-[30%] py-1">{invite.crew.name}</div>
                  <div className="w-[30%] py-1">
                    {invite.crew.roles[invite.role]}
                  </div>
                  <div className="w-[20%] py-1 flex justify-center gap-2">
                    <div
                      className="underline text-yellow-300 cursor-pointer hover:text-white"
                      onClick={() => handleAccept(invite._id)}
                    >
                      Accept
                    </div>
                    <div
                      className="underline text-yellow-300 cursor-pointer hover:text-white"
                      onClick={() => handleDeny(invite._id)}
                    >
                      Deny
                    </div>
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
