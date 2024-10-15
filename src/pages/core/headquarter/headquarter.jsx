import React from "react";
import styles from "./styles.module.css";
import { Header, Menu } from "../../../common/components";
import { Link } from "react-router-dom";

export const HeadQuarter = () => {
  return (
    <div className={styles["headquarter-container"]}>
      <Header currentActiveTab="headquarters" />
      <div className="flex flex-col w-[870px] border-primary border-2 bg-black">
        <div className={styles["status-bar"]}>
          <div className="flex flex-col">
            <div className="flex pt-1">
              <span className="text-black text-sm pl-[160px] font-bold w-[460px]">
                SeaLife24111
              </span>
              <span className="text-secondary text-sm pl-3 font-bold">
                2,083
              </span>
            </div>
            <div className="flex pt-1">
              <span className="text-secondary text-sm pl-[200px] font-bold w-[460px]">
                35,471
              </span>
              <span className="text-secondary text-sm pl-3 font-bold">
                452,319
              </span>
            </div>
            <div className="flex pt-1">
              <span className="text-secondary text-sm pl-[472px] font-bold">
                $552,452,319
              </span>
            </div>
            <div className="flex pt-1">
              <div className="black text-sm ml-[90px] font-bold w-[200px] h-5 border-2 border-gray">
                <div className="bg-gray-100 text-center text-gray-500 w-[30%] h-full">
                  30%
                </div>
              </div>
              <span className="text-secondary text-sm pl-[182px] font-bold">
                25
              </span>
            </div>
          </div>
          <div className="text-xxl font-bold text-secondary ml-[160px] mt-[50px]">
            25
          </div>
        </div>
        <div className="flex">
          <div className={styles["buy-turns"]} />
          <div className={styles["subscribe"]} />
        </div>
        <div className="flex h-[625px] w-full bg-black pb-[20px] pt-5 mt-5">
          <Menu />
          <div className="flex-1 flex flex-col">
            <div className="h-[125px] ml-[25px] flex">
              <object
                className="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                codeBase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"
                width="125"
                height="125"
                id="Forex"
                align="middle"
              >
                <param name="allowScriptAccess" value="sameDomain" />
                <param
                  name="movie"
                  value="070912_125x125_gangster.swf?clickTAG=http://www.gangstermind.com/?refer=cg2"
                />
                <param name="quality" value="high" />
                <param name="bgcolor" value="#000000" />
                <embed
                  quality="high"
                  bgcolor="#000000"
                  src="070912_125x125_gangster.swf?clickTAG=http://www.gangstermind.com"
                  width="125"
                  height="125"
                  name="Forex"
                  align="middle"
                  allowScriptAccess="sameDomain"
                  type="application/x-shockwave-flash"
                  pluginspage="http://www.macromedia.com/go/getflashplayer"
                />
              </object>
              <span className="text-sm text-white ml-[50px] mr-5">
                <Link to="www.gangstermind.com">
                  <u>
                    <b>www.gangstermind.com</b>
                  </u>
                </Link>
                <p>
                  GangsterMind is a FREE, browser-based game where you are a
                  ruthless gangster thirsting for money and power. At the helm
                  of an organized crime gang, you will instill fear in the
                  hearts of your enemies to protect your assets and expand your
                  territory... <u>[+]</u>
                </p>
              </span>
            </div>
            <Link to="/news">
              <p className="text-xl underline text-white font-bold text-center my-5">
                Click here for News
              </p>
            </Link>
            <p className="text-secondary text-center font-bold text-sm">
              Round 713 ends in: 6 days, 8 hours, 48 minutes and 15 seconds.
            </p>
            <p className="text-secondary text-center font-bold text-sm">
              Cash Bounty at: $27
            </p>
            <p className="text-secondary text-center text-yellow-200 text-tiny mt-3">
              You get turns, money and recruits every 10 minutes as long as you
              have less than 1500 turns
            </p>

            <p className="text-secondary text-center text-white text-sm mt-3 font-bold">
              Minutes Left:
            </p>
            <div className="flex mx-auto">
              <img src="./images/0.gif" />
              <img src="./images/6.gif" />
            </div>
            <div className="flex gap-[100px] justify-center">
              <div className="flex flex-col w-[280px]">
                <div className="text-dark-secondary border border-gray-100 text-sm text-center font-bold py-1">
                  CYCLE STATS (10 minutes)
                </div>
                <div className="flex w-full">
                  <div className="text-white w-[60%] border border-gray-100 bg-primary">
                    Cash next cycle
                  </div>
                  <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                    $1,494,842
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="text-white w-[60%] border border-gray-100 bg-dark-primary">
                    Soldiers per cycle
                  </div>
                  <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold">
                    5
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="text-white w-[60%] border border-gray-100 bg-primary">
                    Turns per cycle
                  </div>
                  <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                    15
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[280px]">
                <div className="text-dark-secondary border border-gray-100 text-sm text-center font-bold py-1">
                  ATTACK SUMMARY
                </div>
                <div className="flex w-full">
                  <div className="text-white w-[90%] border border-gray-100 bg-primary">
                    Attacks won
                  </div>
                  <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                    1
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="text-white w-[90%] border border-gray-100 bg-dark-primary">
                    Attacks lost
                  </div>
                  <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold">
                    5
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="text-white w-[90%] border border-gray-100 bg-primary">
                    Successful defends
                  </div>
                  <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                    15
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="text-white w-[90%] border border-gray-100 bg-dark-primary">
                    Unsuccessful defends
                  </div>
                  <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold">
                    15
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
