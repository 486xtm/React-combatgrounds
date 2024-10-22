import React from "react";
import { Layout } from "../../../common/components/layout/layout";
import styles from "./styles.module.css";
const questions = {
  account: [
    {
      id: "1.1",
      question: "What is a supporter?",
      section: "M11",
      content:
        "A supporter is a player who buys turns or subscribes to VIP status. Supporters get a lot more of the game, they can win cash prizes at the end of the round and they make the free portion of the game possible.They help us keep this site running. Instead of advertising, loading banners, etc all over the site, we sell turns to keep us giving you great entertainment.",
    },
    {
      id: "1.2",
      question: "Can I have extra turns for free?",
      section: "M12",
      content:
        "You can't. All the players receive 15 turns every 10 minutes. To receive more turns, you need to buy them or subscribe as VIP.",
    },
    {
      id: "1.3",
      question: "What is Subscribe?",
      section: "M13",
      content:
        "You can subscribe to VIP status for only $20 a month and get many advantages: 10 extra turns every 10 minutes and support tickets priority.",
    },
    {
      id: "1.4",
      question: "Can I send in a payment to get in-game cash or recruits?",
      section: "M14",
      content:
        "No, you can't. The only way to get them is by playing the game.",
    },
    {
      id: "1.5",
      question: "Can I change my character type? Password or e-mail?",
      section: "M15",
      content:
        "Yes, you can. You just need to go to 'Edit profile' option in the control panel and fill in the form properly. You'll receive an activation e-mail if you decide to change your e-mail address.",
    },
    {
      id: "1.6",
      question: "Can I change my username?",
      section: "M16",
      content:
        'Yes, but only on the first day of a round in your "Edit profile" page.',
    },
    {
      id: "1.7",
      question: "How do I edit my profile page?",
      section: "M17",
      content:
        'Your profile is the page the other players see when they click on your username. It shows information about your character like the weapons and the number of recruits you have in your army.You can write a small description about your character and you can upload a picture. To do so, you just need to go to "Edit profile" option in the control panel and follow the instructions.',
    },
    {
      id: "1.8",
      question: " I can't upload my avatar to the site, what do I do?",
      section: "M18",
      content:
        "First, make sure the file you're trying to upload is a GIF within the size limits: it is 300x300 dimension and 90KB in size. If the upload is successful but the new pic still doesn't appear in the page, deleting your browser's cache should fix it.",
    },
    {
      id: "1.9",
      question: "I lost my password! How do I get it back?",
      section: "M19",
      content:
        'Not a problem. You can use the "Forgot password" function to retrieve it. The link is in the site`s home page. Your account information will be sent to your e-mail address registered on Combat Grounds.',
    },
    {
      id: "1.10",
      question: "I can't log on! What do I do?",
      section: "M110",
      content:
        "First, make sure you are using the correct username and password. If you aren't sure, use the Forgot Password link to confirm this. If you get a message that your account is not found or that there is no account with that e-mail address, you may contact the admin.",
    },
    {
      id: "1.11",
      question:
        "Me and another person share one computer. Can we have two accounts?",
      section: "M111",
      content:
        "Having more than 1 account per computer is strictly forbidden. You may get banned for multiple accounts.",
    },
    {
      id: "1.12",
      question: "Can I join the CG Team?",
      section: "M112",
      content:
        "Thank you very much for your interest! However, we have no openings at this time.",
    },
    {
      id: "1.13",
      question: "Where can I get some help?",
      section: "M113",
      content:
        "If you need technical support please contact our Customer Service by sending a support ticket in the Support section of the control panel or an e-mail to the admin.",
    },
    {
      id: "1.14",
      question: "I have a suggestion for the game! Where can I send it?",
      section: "M114",
      content:
        "If you have any suggestions or find any errors in the game, please report them by sending a support ticket or an e-mail to the admin.",
    },
    {
      id: "1.15",
      question: "Can I delete my account?",
      section: "M115",
      content:
        "No, you cannot have your account deleted. If you want your account to be reset, you should wait until the end of the round. If you do not wish to play anymore, just stop logging in to the game, your account will be automatically disabled after a while.",
    },
    {
      id: "1.16",
      question: "My account has been suspended, how long is the suspension?",
      section: "M116",
      content: "Account suspensions are permanent.",
    },
    {
      id: "1.17",
      question: "My crew leader has been suspended, what do I do?",
      section: "M117",
      content:
        "You should leave the crew. You can try to form a new crew with your old crew members.",
    },
    {
      id: "1.18",
      question: "How do I cancel my subscription?",
      section: "M118",
      content:
        "To cancel your subscription, login to your PayPal account and find the transaction that says the subscription is active (in your account summary), then click on it and hit the cancel button. If you have any trouble, please let us know.",
    },
  ],
  game: [
    {
      id: "2.1",
      question: "What is Combat Grounds? How do I play?",
      content:
        "Combat Grounds is a free, strategic Role-Play Game that you can play daily using only your web browser. You can choose to be a Navy seal, a Soldier, or a Terrorist. The objective of the game is to dominate the battlefield and be on top at all times. The players are ranked according to their net worth, which depends on the recruits, recruits' strength, money, and weapons of the character. Combat Grounds is played in rounds of 10 days. At the end of each round, the winners are given prizes and the characters are reset. This game is text-based: there are no graphics, and you take action by clicking on the different options in the control panel. It's a bit hard at the beginning, but when you get into it, it's a lot of fun. Try to message some players to become friends; they may teach you some tips and tricks on how to play better. The most important thing is to read the user guide and the FAQ, as it helps a lot.",
      section: "M21",
    },
    {
      id: "2.2",
      question: "What is the net worth? How is it calculated?",
      content:
        "Players are ranked according to their net worth, which depends on the recruits, recruits' strength, money, and weapons of the character. The equation to calculate the net worth is very complicated, as many parameters are taken into consideration. For example, if your recruit's strength is low, the value of your troops is decreased; if you have a lot of weapons but not enough recruits to use them, the value of your weapons is decreased. Good luck figuring out the rest.",
      section: "M22",
    },
    {
      id: "2.3",
      question: "What are turns?",
      content:
        "Turns are required to perform any action in the game: Attack, Recruit, Missions, and so on. Free players receive 15 turns every 10 minutes as long as they have less than 1500 turns. Players can always buy turns with the 'buy turns' option or subscribe as VIP to receive 25 turns instead of 15 and raise their max turns buildup to 2000. Turns help keep this site running; bandwidth and server fees are not cheap. Therefore, instead of advertising, loading banners, etc., all over the site, we sell turns to keep providing great entertainment. If you purchase turns, your account status changes from normal to supporter, allowing you to join the supporters round and win prizes. Supporter status also gives you more available options in the game, like Hire Spies.",
      section: "M23",
    },
    {
      id: "2.4",
      question: "What is a round?",
      content:
        "Every 10 days a new round starts, and the players' stats are reset: everything starts over from scratch, and players can change their username. This makes it fair for newcomers and gives everyone a bigger chance to win. All player stats get reset at the end of the round except for the purchased turns and the medals.",
      section: "M24",
    },
    {
      id: "2.5",
      question: "What are the prizes at the end of a round?",
      content:
        "At the end of each round, prizes are given to the best players and best crews. The players who have the greatest number of points are called 'the Combat Grounds legends'.",
      section: "M25",
    },
    {
      id: "2.7",
      section: "M27",
      question: "What are military grades?",
      content:
        "Military grades are assigned to players depending on their level and recruits proficiency. Some weapons are available to graded players only.\n\n   >>    To become a Sergeant, you need 40,000 recruits and a level of 2000. At this point, you can buy Fighter aircrafts.\n\n   >>    To become a Lieutenant, you need 60,000 recruits and a level of 3500. At this point, you can buy Guided missiles.\n\n   >>    To become a Captain, you need 100,000 recruits and a level of 5000. At this point, you can buy Submarines.\n\n   >>    To become a Colonel, you need 250,000 recruits and a level of 7500. At this point, you can buy Neutron bombs.\n\n   >>    To become a General, you need 500,000 recruits and a level of 10000. At this point, you can buy Smart maps.",
    },
    {
      id: "2.8",
      section: "M28",
      question: "How do I see my stats?",
      content:
        "The stats table is at the top of all in-game pages. It contains your character's important statistics. These include your money, net worth, recruits, recruits' strength, the turns you have left, the number of days left before the end of the round, and your rank. In your profile page, you can find your grade, your level, and the weapons you have. Your other stats are in the Headquarter page.",
    },
    {
      id: "2.9",
      section: "M29",
      question: "How do I see my enemies' stats?",
      content:
        "Before attacking another player, you should go to his profile by clicking on his name. You can then see his net worth, his weapons, and the number of recruits he has. To have more information, you can hire spies.",
    },
    {
      id: "2.10",
      section: "M210",
      question: "What is the secret link and how do you get underlings?",
      content:
        "You can find your secret link in the 'referrals' section under MEMBERS. You can get people to visit the site using your secret link; if they sign up for the game, they will then be known as your underlings. You receive 100 recruits a day for each of your underlings having a net worth higher than 7,000 and 50 recruits a day for each of your underlings' underlings.",
    },
    {
      id: "2.11",
      section: "M211",
      question: "What is the recruits' strength bar?",
      content:
        "The recruits' strength bar is in your stats table. It shows you if your recruits are well trained and rested.",
    },
    {
      id: "2.12",
      section: "M212",
      question: "How do I keep my recruits strong?",
      content:
        "Keeping your strength bar at a high level is a very important part of the game for 3 reasons: your net worth depends on it, your troops are more efficient in every action you do, and if your recruits are too weak, you cannot perform any action. You should send your troops on home leave and provide them with the proper training when your strength bar level drops.",
    },
    {
      id: "2.13",
      section: "M213",
      question: "How do I find and attack someone in my range?",
      content:
        "You cannot attack players who are not within 25% of your net worth. To find and attack players in your range, go to the attack menu, look for an opponent using search options, click on his name (names that appear in grey are players who are out of your attack range), choose your attack strategy, then click on 'attack this player!' button. The player which causes the highest damage wins the fight.",
    },
    {
      id: "2.14",
      section: "M214",
      question: "How can I dominate a region?",
      content:
        "You can dominate the battlefield by controlling regions. If a region is free, you can just conquer it and bring in your troops. Then, you can exploit its resources. The more troops you put, the more you can exploit. When a region is controlled by another player, you can challenge him to take control of it.",
    },
    {
      id: "2.15",
      section: "M215",
      question: "How do I nuke a country?",
      content:
        "To nuke a country, you need $1,000,000,000, a certain level, and some turns. When you nuke a country, you receive money or recruits. You can nuke each country only once a day. The prizes you win are proportional to the number of turns you use and the level you have.",
    },
    {
      id: "2.16",
      section: "M216",
      question: 'What is "Hire spies"?',
      content:
        "If you are a supporter, you can obtain secret information about your opponents.",
    },
    {
      id: "2.17",
      section: "M217",
      question: "What are missions?",
      content:
        "Every day, you have the opportunity to do some missions. If you complete a mission successfully, you are rewarded with a great skill that makes your character perform better. You get to keep a skill for one hour. You can see which skills you have in the 'missions' page.",
    },
    {
      id: "2.18",
      section: "M218",
      question: "What is the military shop?",
      content:
        "Here, you can buy weapons to make your character stronger or sell them if you need money.",
    },
    {
      id: "2.19",
      section: "M219",
      question: "What is the casino?",
      content:
        "At the casino, you can try your chance to win some money or recruits.",
    },
    {
      id: "2.20",
      section: "M220",
      question: "What is the bank?",
      content:
        "Just like in the real world, you have a bank account and petty cash. The money you use anywhere is the cash you have on you. However, keeping money in your pocket is risky. Another player can attack you and steal it; depositing part of it in the bank is not a bad idea. You are able to put 20% of your money in the bank and you have 3 transactions a day.",
    },
    {
      id: "2.21",
      section: "M221",
      question: "What is a crew? How do I get into one?",
      content:
        "Crews are like teams or groups of people. They can attack crew bosses, host meetings, and declare war on other crews. You can join an existing one or raise an army of your own.",
    },
    {
      id: "2.22",
      section: "M222",
      question: "How do I join a crew?",
      content:
        "You must receive an invitation to become a crew member; you can usually ask for them, but otherwise, you can't join a crew. To view your crew invitations, go to Crew Options on the Main selection. You can post ads in the crew ads section.",
    },
    {
      id: "2.23",
      section: "M223",
      question: "How do I create a crew?",
      content:
        "To be able to create one, you need to leave your current crew in case you're already a member of a crew. Then, under the Crew submenu, click on Create Crew. Follow the instructions to create your crew.",
    },
    {
      id: "2.24",
      section: "M224",
      question: "What is the crew bank for?",
      content:
        "Money deposited in the crew bank is used to raid the crew bosses and increase the crew net worth. It costs $2,000,000,000 to attack each crew boss. You cannot withdraw cash from the crew bank.",
    },
    {
      id: "2.25",
      section: "M225",
      question:
        "How can someone with a net worth so much higher than mine be able to attack me?",
      content:
        "Opponents can start attacking you only if your net worth is within 25% of their net worth. However, if they have revenge hits on you, they can attack you even if you're out of range.",
    },
    {
      id: "2.26",
      section: "M226",
      question: "How do I gain level?",
      content:
        "There are different ways of earning levels now: the third option in raise funds, completing missions, conquering a territory or challenging someone in the battlefield, and attacks. The level earned from attacking a player will vary depending on how much damage you cause. It decreases by 3 if your attack fails.",
    },
    {
      id: "2.27",
      section: "M227",
      question: "I receive undesired messages. What do I do?",
      content:
        "As you can imagine, this is a war game: many players get frustrated and start sending inappropriate mails. If you don't want to receive any more messages from someone, you can use the option 'Block player' in the mail center. We only take action if these messages are posted in the crew ads, player, or crew profile.",
    },
    {
      id: "2.28",
      section: "M228",
      question: "I lost recruits and I don't know why?",
      content:
        "The battlefield is an extremely risky option but also very rewarding. If you decide to put your troops in the battlefield, all other players can challenge you and kill your recruits very fast. Therefore, after you finish exploiting/recruiting in the battlefield, you should pull out all your troops as soon as possible.",
    },
    {
      id: "2.29",
      section: "M229",
      question: "People keep attacking me. What should I do?",
      content:
        "This is a war game; you should be prepared for that. Try to talk to them and ask them to stop. If they don't, you should try to retaliate against them or find some allies to help you out.",
    },
    {
      id: "2.30",
      section: "M230",
      question: "Which weapons are used when I attack?",
      content:
        "Your best weapons are automatically used when you attack someone. You can tweak a bit how they are used by selecting the attack type: \n Invasive attack is better when you have attack weapons.\nPreventive attack is better when you have defense weapons.",
    },
  ],
  payment: [
    {
      id: "3.1",
      section: "M31",
      question: "What are the different methods of payment?",
      content:
        "We only accept PayPal at this time. PayPal allows you to make payments using your credit card, bank account, etc. For more information, please refer to www.PayPal.com.",
    },
    {
      id: "3.2",
      section: "M32",
      question:
        "I can't use PayPal! Can't I pay with credit card some other way?",
      content:
        "Unfortunately, we are only set up to receive credit cards through PayPal.",
    },
    {
      id: "3.3",
      section: "M33",
      question: "Can I pay with cash?",
      content:
        "No, it is not secure to send money through the postal mail service. We don't recommend it. We are not responsible for any letters that are lost in the mail, or any mail that does not make it to us.",
    },
  ],
};
export const FAQ = () => {
  return (
    <Layout isMenuShow={false} isHeaderFull={true} currentActiveTab={"faq"}>
      <div className="flex flex-col flex-1 py-[20px]">
        <div className="text-center text-[#81843C] text-[30px] font-bold">
          Frequently asked questions
        </div>
        <div className="bg-[#81843C] w-[630px] border-[1px] mx-auto px-[20px] py-[40px]">
          <div className="underline font-bold text-[16px] mb-3">
            Table of Contents
          </div>
          <div className="font-bold text-[16px] mb-3">
            1 - Account Questions
          </div>
          <div className="pl-[20px] text-[white] text-[14px] mb-3">
            {questions.account.map((val, index) => (
              <div key={index}>
                {val.id} -{" "}
                <a
                  className="hover:underline decoration-yellow-300 cursor-pointer font-bold"
                  href={`#${val.section}`}
                >
                  {val.question}
                </a>
              </div>
            ))}
          </div>
          <div className="font-bold text-[16px] mb-3">
            2 - Gameplay-related Questions
          </div>
          <div className="pl-[20px] text-[white] text-[14px] mb-3">
            {questions.game.map((val, index) => (
              <div key={index}>
                {val.id} -{" "}
                <a
                  className="hover:underline decoration-yellow-300 cursor-pointer font-bold"
                  href={`#${val.section}`}
                >
                  {val.question}
                </a>
              </div>
            ))}
          </div>
          <div className="font-bold text-[16px] mb-3">
            3 - Payment Questions
          </div>
          <div className="pl-[20px] text-[white] text-[14px] mb-3">
            {questions.payment.map((val, index) => (
              <div key={index}>
                {val.id} -{" "}
                <a
                  className="hover:underline decoration-yellow-300 cursor-pointer font-bold"
                  href={`#${val.section}`}
                >
                  {val.question}
                </a>
              </div>
            ))}
          </div>
          <div className="mb-10">
            <div className="font-bold mb-3">1 - Account Questions</div>
            {questions.account.map((val, index) => (
              <section id={val.section} key={index}>
                <div className="font-[600] mb-3 transition-all duration-200 hover:text-[yellow] hover:text-[20px]">
                  {val.id} - {val.question}
                </div>
                <div className="mb-3 leading-none">{val.content}</div>
              </section>
            ))}
          </div>
          <div className="mb-5">
            <div className="font-bold mb-3">2 - Gameplay-related Questions</div>
            {questions.game.map((val, index) => (
              <section id={val.section} key={index}>
                <div className="font-[600] mb-3 transition-all duration-200 hover:text-[yellow] hover:text-[20px]">
                  {val.id} - {val.question}
                </div>
                <div className="mb-3 leading-none">{val.content}</div>
              </section>
            ))}
          </div>
          <div className="mb-5">
            <div className="font-bold mb-3">3 - Payment Questions</div>
            {questions.payment.map((val, index) => (
              <section id={val.section} key={index}>
                <div className="font-[600] mb-3 transition-all duration-200 hover:text-[yellow] hover:text-[20px]">
                  {val.id} - {val.question}
                </div>
                <div className="mb-3 leading-none">{val.content}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
