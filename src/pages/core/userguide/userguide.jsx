import React from "react";
import { Layout } from "../../../common/components/layout/layout";
const contents = [
  {
    id: "Introduction",
    section: "M1",
    title: [
      "1.1 - Overview",
      "1.2 - Prizes at the end of a round",
      "1.3 - Getting Started",
      "1.4 - Quick Start",
    ],
  },
  {
    id: "Layout",
    section: "M2",
    title: [
      "2.1 - Horizontal menu",
      "2.2 - Control Panel",
      "2.3 - Stats table",
    ],
  },
  {
    id: "Actions",
    section: "M3",
    title: [
      "2.1 - Horizontal menu",
      "2.2 - Control Panel",
      "2.3 - Stats table",
    ],
  },
  {
    id: "Manage troops",
    section: "M4",
    title: ["4.1 - Recruit", "4.2 - Training", "4.3 - Home leave"],
  },
  {
    id: "Missions",
    section: "M5",
    title: [],
  },
  {
    id: "Subscribe",
    section: "M6",
    title: [],
  },
  {
    id: "Shop",
    section: "M7",
    title: [],
  },
  {
    id: "Military grades",
    section: "M8",
    title: [],
  },
  {
    id: "Casino",
    section: "M9",
    title: ["9.1 - Roll Dice", "9.2 - Russian roulette"],
  },
  {
    id: "Bank",
    section: "M10",
    title: [],
  },
  {
    id: "Crews",
    section: "M11",
    title: [
      "11.1 - Joining a crew",
      "11.2 - Creating a crew",
      "11.3 - Crew Bosses",
    ],
  },
  {
    id: "Medals",
    section: "M12",
    title: [],
  },
  {
    id: "Game rules",
    section: "M13",
    title: [],
  },
  {
    id: "Suppport",
    section: "M14",
    title: [],
  },
];
export const UserGuide = () => {
  return (
    <Layout
      isMenuShow={false}
      isHeaderFull={true}
      currentActiveTab={"userguide"}
    >
      <div className="flex flex-col flex-1 py-[20px]">
        <div className="text-center text-[#81843C] text-[30px] font-bold">
          Combat Grounds User Guide
        </div>
        <div className="bg-[#81843C] w-[630px] border-[1px] mx-auto px-[20px] py-[40px] space-y-4">
          <div className="underline font-bold text-[16px] mb-3">
            Table of Contents
          </div>
          {contents.map((val, index) => (
            <div key={index}>
              <span className="text-white cursor-pointer font-bold">
                {index + 1} -{" "}
              </span>
              <a
                className="underline text-white hover:decoration-yellow-300 cursor-pointer font-bold"
                href={`#${val.section}`}
              >
                {val.id}
              </a>
              {val.title.map((list, i) => (
                <div className="ml-5" key={i}>
                  {list}
                </div>
              ))}
            </div>
          ))}
          <br />
          <br />
          <br />
          <section id="M1" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">1 - Introduction</div>
            <div className="font-bold">1.1 - Overview</div>
            <div>
              Combat Grounds is a free, strategic Role-Play Game that you can
              play daily using only your web browser. The game is text based and
              very simple to play.
              <br />
              In Combat Grounds, the objective is to develop your character by
              building your army, gaining power and money. You can choose to be
              a Navy seal, a Soldier or a Terrorist.
              <br />
              Players are ranked according to their net worth. The net worth
              depends on the recruits, recruits' strength, money and weapons of
              the character.
              <br />
              Combat Grounds is played in rounds of 10 days. At the end of each
              round, the winners are given prizes.
              <br />
              If you have any suggestions or find any errors in the game, please
              report them to the administrators by sending a support ticket
              (Support link under the control panel) or an E-mail to the admin.
            </div>
            <div className="font-bold">1.2 - Prizes at the end of a round</div>
            <div>
              At the end of each round, prizes are given to best players and
              best crews. The players who have the greatest number of points are
              called "the combatgrounds legends".
            </div>
            <div>
              <div className="w-2/3 mx-auto flex flex-wrap">
                <div className="border w-full  text-center font-bold border-[#201d1d]">
                  Top Players
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 1</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  Ultimate Medal and 25 points
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 2</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  Medal of Honor and 16 points
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 3</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  War Hero Medal and 12 points
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 4</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  Elite Medal and 10 points
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 5</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  Veteran's Medal and 8 points
                </div>
              </div>
              <br />
              <div className="w-2/3 mx-auto flex flex-wrap">
                <div className="border w-full  text-center font-bold border-[#201d1d]">
                  Top supporters
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 1</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  Cash prize and 15,000 turns
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 2</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  100,000 turns
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 3</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  50,000 turns
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 4</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  25,000 turns
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 5</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  15,000 turns
                </div>
              </div>
              <br />
              <div className="w-2/3 mx-auto flex flex-wrap">
                <div className="border w-full  text-center font-bold border-[#201d1d]">
                  Top Free Players
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 1</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  20,000 turns
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 2</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  10,000 turns
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 3</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  7,000 turns
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 4</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  5,000 turns
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 5</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  3,000 turns
                </div>
              </div>
              <br />
              <div className="w-2/3 mx-auto flex flex-wrap">
                <div className="border w-full  text-center font-bold border-[#201d1d]">
                  Top crews
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 1</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  90,000 turns, Gold Medal and 16 points
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 2</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  40,000 turns, Silver Medal and 12 points
                </div>
                <div className="w-1/4 border border-[#201d1d]">Rank# 3</div>
                <div className="w-3/4 border border-[#201d1d]">
                  {" "}
                  15,000 turns, Bronze medal and 8 points
                </div>
              </div>
              <br />
            </div>
            <div className="font-bold">1.3 - Getting Started</div>
            <div>
              You start with 4000 turns, 200 recruits and $50,000,000. There are
              several strategies to play. When first starting out, you can
              recruit to enlarge your troops, you can also raise funds and go to
              the military shop to purchase weapons and gain power. Don't forget
              to often train and rest your recruits to keep them strong and
              valuable. When your strength bar level decreases:
            </div>
            <ul className="list-outside list-disc ml-10">
              <li>Your networth and power decrease.</li>
              <li>You lose more recruits when you get attacked.</li>
              <li>You collect less money when you perform actions.</li>
              <li>
                Some of your troops can even leave you when you send them work.
              </li>
            </ul>
            <div>
              You should also try to higher your level to get a grade and be
              able to buy some special weapons. When you feel strong enough, you
              can attack other players in your range. However, be careful,
              nobody will let you attack them without revenge: "Domination leads
              to war". Don't forget to protect your money in the bank since you
              can lose it if somebody attacks you. Also, try to join a crew or
              start your own, because you won't be able to survive by yourself.
              <br />
              <br />
              Turns are required to perform any action in the game: Attack (jump
              to 3.1 - Attack for more info), Raise funds (jump to 3.2 - Raise
              funds for more info), Recruit (jump to 4.1 - Recruit for more
              info), Roll dice (jump to 9.1 - Roll Dice for more info) and so
              on. The amount of turns you receive is fixed to 15 turns every 10
              minutes. However, you can always buy turns with the "buy turns"
              option or subscribe to VIP to receive 25 turns instead of 15.
              <br />
              <br />
              Money is required to purchase weapons, train and rest recruits,
              play in the casino games and Nuke countries. There are several
              ways to earn more money and recruits: &nbsp; &nbsp;&gt;&gt; You
              receive 5 recruits and some money every 10 minutes. The amount of
              money you receive increases with the number of recruits you have
              and your income bonus (jump to 7- Shop for more info)
              <br />
              <br />
              &nbsp; &nbsp;&gt;&gt; Raise funds (jump to 3.2- Raise funds for
              more info)
              <br />
              <br />
              &nbsp; &nbsp;&gt;&gt; Gamble money at the casino (jump to 9-
              Casino for more info).
              <br />
              <br />
              &nbsp; &nbsp;&gt;&gt; You can fight other players and steal their
              money when you win.
              <br />
              <br />
              &nbsp; &nbsp;&gt;&gt; You can Nuke countries and win money or
              recruits (jump to 3.4 - Nuke countries for more info).
              <br />
              <br />
              &nbsp; &nbsp;&gt;&gt; You can organize crew raids with the help of
              your crew members and win some recruits for every member of the
              crew (jump to 11.3 - Crew Bossess for more info).
              <br />
              <br />
              &nbsp; &nbsp;&gt;&gt; You can dominate a region and exploit its
              resources (jump to 3.3 - Battlefield for more info).
              <br />
              <br />
              &nbsp; &nbsp;&gt;&gt; Tell your friends about this game by sending
              your secret link (you have it in the referrals section under
              MEMBERS). People who signed up using your secret link are called
              your underlings. You receive 100 recruits a day for each of your
              underlings having a net worth higher than 7,000 and 50 recruits a
              day for each of your underlings' underlings.
              <br />
              <br />
              Note: You will not receive any additional turns every 10 minutes
              if you already have more than 1500 turns (or 2000 turns if you are
              a VIP player).
            </div>
            <div className="font-bold">1.4 - Quick Start</div>
            <ul className="list-outside list-decimal ml-10">
              <li>Go to the Recruit option to engage troops.</li>
              <li>
                Go to Boot camp to train your recruits, keep in mind that your
                recruits should be trained and rested properly to stay effective
                and not start leaving you.
              </li>
              <li>
                Try to collect money by using one of the actions: raise funds,
                battlefield (risky), nuke countries, casino.
              </li>
              <li>
                Train your recruits in boot camp and send them on home leave to
                rest.
              </li>
              <li>
                Go to the military shop and buy some weapons to strengthen your
                army.
              </li>
              <li>
                Increasing your level is very important, it allows you to buy
                advantageous weapons and nuke more countries. You
                <ul className="list-outside list-disc ml-10">
                  <li>increase your level by:</li>
                  <li>
                    Conquering a region or challenging someone in battlefield.
                  </li>
                  <li>Attacking another player successfully.</li>
                </ul>
                Completing missions.
              </li>
              <li>
                Do steps 1-5 until you feel strong enough. You can then attack
                another player in your range, but choose your opponent wisely as
                he would probably want to take revenge.
              </li>
              <li>
                Don't forget to protect part of your money in the bank so other
                players can't steal it if they attack you.
              </li>
              <li>
                Try to join a crew or make your own because it is hard to
                survive by yourself.
              </li>
              <li>
                There are many actions you can do, try them all and enjoy the
                game!
              </li>
            </ul>
            <div>
              <span className="underline">Survival tip:</span>
              <br />
              Before you decide to attack someone, remember that this will give
              him the chance to attack you back as many times as he wants. If
              you get attacked by a stronger player, it is not a good idea to
              retaliate right away as this would lift the attack limit
              protection you have. Instead, you should wait till he can't attack
              you anymore and then rebuild. Once you're stronger, you may want
              to attack him back (you can do so an unlimited number of times
              within 24 hours after the last time he attacked you). Section 3.1
              explains in more detail how the attack limit protection works.
            </div>
          </section>
          <section id="M2" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer"> 2 - Layout</div>
            <div className="font-bold"> 2 - 1 Horizontal menu</div>
            <div>
              Main Page - This is the main page, here you can login to the game.
              It contains some game statistics such as the number of players
              etc...
              <br />
              Headquarter - Here you find statistics about your player, the
              secret link you can send to your friends to register to the game,
              the minutes left before you receive extra turns, some cash and
              recruits. Players who support the game can post messages in the
              shoutbox.
              <br />
              Rankings - Shows players' rankings, crew rankings and other stats.
              <br />
              Hall of fame - Shows best players in previous rounds.
              <br />
              FAQ - Frequently asked questions
              <br />
              User Guide - It explains how to play the game.
              <br />
              News - Announcements about the game are posted here.
            </div>
            <div className="font-bold">2.2 - Control Panel</div>
            <div>
              Members
              <br />
              The HQ - Click here to go the Headquarter page.
              <br />
              Attack Log - Shows your recent attacks and the attacks on you.
              <br />
              Mail Center - To receive and send messages to other players.
              <br />
              <br />
              Profile
              <br />
              Edit Profile - To change or add information to your profile.
              <br />
              View Profile - Shows information about your character: your
              weapons, your number of recruits etc...
              <br />
              <br />
              Actions
              <br />
              Attack - To find and attack a player.
              <br />
              Raise funds - To collect money.
              <br />
              Battlefield - To exploit and recruit troops from a region.
              <br />
              Nuke Countries - To nuke a country.
              <br />
              <br />
              Manage troops
              <br />
              Recruit - To engage recruits in your army.
              <br />
              Training - To train your recruits.
              <br />
              Home leave - To rest your recruits.
              <br />
              <br />
              Missions - To try to do a mission and get a skill.
              <br />
              <br />
              Shop - To buy weapons and special items.
              <br />
              <br />
              Casino
              <br />
              Roll Dice - Gamble money and guess the numbers on the two dice.
              <br />
              Russian roulette - Gamble money and guess a number from 1 to 3.
              <br />
              <br />
              Bank - To deposit/withdraw money.
              <br />
              <br />
              Buy Turns - To buy turns using Paypal.
              <br />
              <br />
              Subscribe - Click here if you want to subscribe as a VIP player.
              <br />
              <br />
              Crew
              <br />
              Crew Invites - It appears when you are not in a crew. Here, you
              can see if someone has invited you to his crew. You can also click
              on the "create crew" link in this page to make your own crew.
              <br />
              Create Crew - It appears when you are not in a crew. You can make
              your own crew.
              <br />
              Manage Crew - It appears when you are in a crew: if you are the
              crew leader you can invite other players to join your crew, assign
              them a rank, boot a crew member, edit your crew profile or disband
              the crew. If you are a Rank 1 crew member, you can invite other
              players to join your crew and assign a rank to crew members.
              <br />
              Crew Bosses - To perform Raids with the help of your crew.
              <br />
              Crew Board - To share information with your crew members.
              <br />
              Crew ads - To find a crew to join or to advertise your own crew.
              <br />
              Crew Bank - To deposit money in the Crew bank.
              <br />
              <br />
              Online Players - To see which players are online, you can click on
              their names to go to their profile page.
              <br />
              <br />
              Support - To send support tickets to the administrators.
              <br />
              <br />
              Logout - To logout from the game.
              <br />
            </div>
            <div className="font-bold">2.3 - Stats table</div>
            <div>
              It is at the top of all in-game pages. It shows your important
              statistics such as your money, net worth, recruits, recruits'
              strength, the number of turns you have, your level and rank.
            </div>
          </section>
          <section id="M3" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">3 - Actions</div>
            <div className="font-bold">3 - Attack</div>
            <ul className="list-disc list-outside ml-10">
              <li>Click on "attack" in your control panel.</li>
              <li>Look for an opponent using one of the search options.</li>
              <li>
                Click on the opponent's name which will bring you to his profile
                page.
              </li>
              <li>
                Click on "attack player". If you've been attacked by that player
                within the last 24 hours, you will read "attack player to take
                vengeance!" instead.
              </li>
              <li>
                Choose one of the attack strategies and hit "attack this
                player!" button.
              </li>
              <li>The player who causes the highest damage wins the fight.</li>
              <br />
              <b className="-ml-5"> Notes:</b>
              <br />
              <br />

              <li>
                You can only start attacking players within 25% of your net
                worth.
              </li>
              <li>
                You cannot attack a player who has suffered more than 70 attacks
                lost within the last 12 hours unless you have revenge hits on
                him. When you have revenge hits on someone, you can attack him
                an unlimited number of times for 24 hours after the last time he
                attacked you, even if he's not in your power range.
              </li>
              <li>
                If you know the name of the player you want to attack, you can
                enter it directly in the attack form, pick your strategy and
                attack the player.
              </li>
            </ul>
            <div className="font-bold">3.2 - Raise funds</div>

            <div>
              This is the safest way to collect money. You have four different
              ways of raising funds. Before using this option, make sure your
              troops are well trained and rested to collect more cash and avoid
              having some of them leave you.
            </div>

            <div className="font-bold">3.3 - Battlefield</div>
            <div>
              If a region is free, you can conquer it and bring in your troops.
              You can then exploit its resources or recruit massively. The more
              troops you put, the more you can exploit or recruit. When a region
              is controlled by another player, you can challenge him to take
              control of it. When you conquer a territory or challenge a player
              successfully, your level increases.
            </div>

            <div className="font-bold">3.4 - Nuke country</div>
            <div>
              To nuke a country, you need $1,000,000,000 and a certain level.
              When you Nuke a country you receive money or recruits. You can
              nuke each country only once a day. The prizes you win are
              proportional to the number of turns you use and the level you
              have.
            </div>
            <div className="font-bold">3.5 - Hire spies</div>
            <div>
              If you are a supporter, you can obtain here secret information
              about your opponents.
            </div>
          </section>
          <section id="M4" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">4 - Manage troops</div>
            <div className="font-bold">4.1 - Recruit</div>
            <div>
              To enlarge your troops and become more powerful. The more turns
              you use, the more you can recruit. The number of troops and their
              training level depends on where you recruit them.
            </div>
            <div className="font-bold">4.2 - Training</div>
            <div>
              To keep your troops ready for the battle, you always need to train
              them. When your troops are well trained, they are more efficient
              when taking actions and your net worth is higher.
              <br />
              The recruits' strength bar in the stats table shows you if they
              are well trained and rested.
              <br />
              Your recruits should receive each type of training to perform at
              their best. The number of recruits who receive the training
              increases with the amount of money you pay.
            </div>
            <div className="font-bold">4.3 - Home leave</div>
            <div>
              Your recruits get tired when you do actions. You should send them
              home to recuperate and come back stronger. The number of recruits
              you send home increases with the amount of money you pay.
            </div>
          </section>
          <section id="M5" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">5 - Missions</div>
            <div>
              Every day, you have the opportunity to do some missions. When you
              complete a mission successfully, your level increases and you are
              rewarded a great skill that makes your character stronger.
              <br />
              You get to keep a skill for one hour. You can see which skills you
              have in the "missions" page.
            </div>
          </section>
          <section id="M6" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">6 - Subscribe</div>
            <div>
              You can subscribe as a VIP player for only $20 a month and get
              many advantages: 10 extra turns every 10 minutes and support
              tickets priority.
            </div>
          </section>
          <section id="M7" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">7 - Shop </div>
            <div>
              You can buy weapons in the military shop. You can only purchase a
              limited amount of each item. Click on an item to view its
              description. There are different types of items:
              <br />
              <br />
              &nbsp;&nbsp;&gt;&gt; Attack items: they increase your attack bonus
              and therefore your damage when you attack.
              <br />
              <br />
              &nbsp;&nbsp;&gt;&gt; Defence items: they increase your defence
              bonus and the damage you cause when you defend an attack.
              <br />
              <br />
              &nbsp;&nbsp;&gt;&gt; Income items: they increase the amount of
              money you receive every 10 minutes.
              <br />
              <br />
              &nbsp;&nbsp;&gt;&gt; Special items: The battlefield radar is
              available for purchase to supporters who reach the rank of
              general. It allows you to detect attackers in battlefield and lets
              you escape the territory if you are getting challenged. Each item
              can save 1,000 troops occupying the territory.
              <br />
              <br />
              It is up to you to choose what you want to purchase, while some
              prefer to use an offensive strategy, others would rather adopt a
              more defensive one.
              <br />
              <br />
              Note: You can sell your weapons at a lower price if you need cash.
            </div>
          </section>
          <section id="M8" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">8 - Military grades</div>
            <div>
              Military grades are assigned to players depending on their level
              and recruits proficiency. Some weapons are available to graded
              players only.
              <br />
              <br />
              &nbsp; &nbsp; &gt;&gt; To become a Sergeant, you need 40,000
              recruits and a level of 2,000. At this point, you can buy Fighter
              aircrafts.
              <br />
              <br />
              &nbsp; &nbsp; &gt;&gt; To become a Lieutenant, you need 60,000
              recruits and a level of 3,500. At this point, you can buy Guided
              missiles.
              <br />
              <br />
              &nbsp; &nbsp; &gt;&gt; To become a Captain, you need 100,000
              recruits and a level of 5,000. At this point, you can buy
              Submarines.
              <br />
              <br />
              &nbsp; &nbsp; &gt;&gt; To become a Colonel, you need 250,000
              recruits and a level of 7,500. At this point, you can buy Neutron
              bombs.
              <br />
              <br />
              &nbsp; &nbsp; &gt;&gt; To become a General, you need 500,000
              recruits and a level of 10,000. At this point, you can buy Smart
              maps.
              <br />
              <br />
            </div>
          </section>
          <section id="M9" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">9 - Casino</div>

            <div className="font-bold">9.1 - Roll Dice</div>
            <div>
              You bet a certain amount of money, and guess a number between 1
              and 6 for each die. If you win, you receive money depending on the
              cash and the number of turns you bet.
            </div>
            <div className="font-bold">9.2 - Russian roulette</div>
            <div>
              In this game, you guess a number from 1 to 3. It costs $1,000,000
              to play and you may win money or recruits.
            </div>
          </section>
          <section id="M10" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">10 - Bank</div>
            <div>
              Just like in the real world, you have a bank account and petty
              cash. The money you use anywhere is the cash you have on you.
              However, keeping money in your pocket is risky. Another player can
              attack you and steal it, depositing part of it in the bank is not
              a bad idea.
              <br />
              You are able to put up to 20% of your money in the bank and you
              are allowed 3 transactions a day.
            </div>
          </section>
          <section id="M11" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">11 - Crews</div>
            <div>
              Crews are like teams or groups of people. They can attack crew
              bosses, host meetings, and declare war to other crews.
            </div>
            <div className="font-bold"> 11.1 - Joining a crew</div>
            <div>
              To join a crew you must receive an Invitation from the crew. You
              can ask for a crew invite in the crew ads or ask players directly.
              To view your crew invitations go to Crew Invites in the Control
              panel.
            </div>
            <div className="font-bold">11.2 - Creating a crew</div>
            <div>
              Under the Crew submenu, click on Create Crew. Follow the
              instructions to create your crew. You cannot create a crew if
              you're already in one.
            </div>
            <div className="font-bold">11.3 - Crew Bosses</div>
            <div>
              The crew leader or a rank 1 member can attack each Crew Boss once
              a day: It takes $2,000,000,000 from the Crew bank. If you win,
              every member of your crew receives some recruits. Crew members can
              deposit some money in the crew bank. Crew bank money is used to
              increase the crew networth and to raid crew bosses but it cannot
              be withdrawn.
            </div>
          </section>
          <section id="M12" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">12 - Medals</div>
            <div>
              At the end of each round, 8 different medals are given to the
              leaders.
              <br />
              <br />
              &nbsp; &nbsp; &gt; &gt; Ultimate Medal <br />
              &nbsp; &nbsp; &gt; &gt; Medal of Honor <br />
              &nbsp; &nbsp; &gt; &gt; War Hero Medal
              <br />
              &nbsp; &nbsp; &gt; &gt; Elite Medal
              <br />
              &nbsp; &nbsp; &gt; &gt; Veteran's Medal
              <br />
              &nbsp; &nbsp; &gt; &gt; Gold Medal
              <br />
              &nbsp; &nbsp; &gt; &gt; Silver Medal
              <br />
              &nbsp; &nbsp; &gt; &gt; Bronze Medal
              <br />
            </div>
          </section>
          <section id="M13" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer"> 13 - Game rules</div>
            <div className="font-bold">1. Multiple Accounts</div>
            Only one account per person is allowed. Account sharing counts as
            multiple accounts and is therefore forbidden. Account trading is not
            allowed. If you decide to quit the game, just contact the admin to
            disable your account; don't try to trade your account. Multiple
            accounts result in an immediate ban of all involved accounts. Only
            one account should be used per computer to ensure compliance with
            this rule.
            <br />
            <br />
            <div className="font-bold">2. Spam</div>
            Spamming is simply the sending of irrelevant messages in the game.
            We are really strict about spammers: do not post any link to other
            games and post only crew related topics in the crew ads section.
            Anyone found spamming, sending or posting any kind of messages that
            harm the game will be immediately banned.
            <br />
            <br />
            <div className="font-bold">3. Harassment and racism</div>
            Racism includes posts that attack others based on their race,
            religion or nationality. Public harassment of fellow players will
            result in an immediate ban.
            <br />
            <br />
            <div className="font-bold">4. Player and crew profiles</div>
            These include names, descriptions and pictures of players and crews.
            They should not contain any unsuitable material such as obscene,
            racist, abusive, threatening, or pornographic content. The crew
            leader is fully responsible for all information found in the crew
            profile page.
            <br />
            <br />
            <div className="font-bold">5. Selling tips or protection</div>
            Asking other players money or turns in exchange for tips or
            protection is not permitted.
            <br />
            <br />
            <div className="font-bold">6. Automated Scripts</div>
            The use of any automated scripts that access the game servers for
            any reason is strictly forbidden.
            <br />
            <br />
            <div className="font-bold">7. Bugs</div>
            Any bugs/errors found should be reported immediately to the admin.
            Exploiting them and taking an unfair advantage will result in an
            immediate ban.
            <br />
            <br />
            <div className="font-bold">8. Warnings</div>
            Two warnings of any kind automatically results in a ban. However,
            warnings do not have to be given prior to a ban.
            <br />
            <br />
            <b>
              Some obvious rules were not mentioned here. We will not accept the
              excuse "It was not in the game rules", you should use common sense
              before taking any action.
            </b>
          </section>
          <section id="M14" className="space-y-4">
            <div className="font-bold hover:text-[yellow] hover:text-[20px] transition-all cursor-pointer">14 - Support</div>
            <div>
              If you need technical support please contact our Customer Service
              by sending a support ticket in the Support section of the control
              panel or an E-mail to the admin.
            </div>
            <div>
              Anyone who pretends to be a moderator but is not will be
              permanently banned.
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
