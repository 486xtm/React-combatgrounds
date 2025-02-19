import React, { useEffect } from "react";
import { Header, Menu } from "../../../common/components";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findHelpers } from "../../../api/user";
import { ROUTES } from "../../../common/constant";

export const ChooseHelper = () => {
  const user = useSelector(({ user }) => user.user);
  const helpers = useSelector(( { user }) => user.helpers);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    findHelpers(dispatch);
  }, []);

  return (
    <div className={styles["choose-helper-container"]}>
      <Header currentActiveTab="headquarters" />
      <div className="flex flex-col w-[880px] h-[660px] bg-black border-[2px] border-primary py-3 px-[2px]">
        <div className="flex">
          <Menu />
          <div className="flex flex-col items-center flex-1 h-full ml-[40px]">
            <p className="text-xxl text-secondary font-bold my-2">
              Get some help
            </p>
            <div className="w-full h-1 bg-white" />
            <Link
              className="text-xl text-white font-bold my-1 pb-2"
              to={
                "https://discordapp.com/channels/1040013836566138992/1265903715068543007"
              }
            >
              <u>Click here for News</u>
            </Link>
            <div className="text-tiny text-white flex flex-col leading-tight">
              <b>
                Welcome{" "}
                <span className="font-bold text-lg text-secondary underline">
                  {user && `@${user.name}!`}
                </span>
              </b>
              <p>
                War Grounds is a free, strategic role-playing game that you
                can play daily using only your Web browser. It is text based and
                very straightforward. Proceed by clicking on options. Master the
                basics and, slowly but surely, you'll get the hang of it. What
                we don't offer in terms of 3-d graphics, we make up for in terms
                of an unpredictable and intense, completely player-driven
                community.
              </p>
              <br />
              <p>
                Need some help to play? It is highly recommended to read the
                user guide or the FAQ. It's a short and easy read that will give
                you a basic understanding of how the game works and it provides
                some great tips for new players to help you avoid common early
                mistakes.
              </p>
              <br />
              <p>
                There are also many friendly helpers willing to teach you how to
                play the game.
              </p>
              <p>
                Below is a list of all the helpers. You can click on a helper,
                look at his profile and message him/her if you need help. You
                can also vote for the helpers who best assisted you to boost
                their rank in the best helpers standing.
              </p>
              <br />
              <p>
                Time to hit the War Grounds! Again, please read the user
                guide or the{" "}
                <b>
                  <u>FAQ</u>
                </b>
                . It really will help! But if you're the type that insists on
                figuring it out on your own... then at least read section{" "}
                <b>
                  <u>1.4 Quick start</u>
                </b>{" "}
                of the user guide.
              </p>
              <br />
              <p>Good Luck!</p>
              <p>
                Becoming a Combatant isn't easy... but nothing worthwhile ever
                is!
              </p>
            </div>
            <div className="flex flex-col border-2 border-grey-100 w-[587px] mt-5">
              <div className="w-full border-b-2 border-grey-100 text-center">
                <p className="text-secondary text-lg font-bold">Helpers</p>
              </div>
              <div className="w-full px-3 flex gap-2 cursor-pointer">
                {helpers && helpers.map((h, idx) => (
                  <div key={`helper_${idx}`} className="font-bold text-sm underline text-secondary"  onClick={() => navigate(ROUTES.MAIN_ROUTES.PROFILE, {state: {_id: h._id}})}>
                    {h.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
