import react, { useState, useEffect } from "react";
import { Layout } from "../../../common/components";
import { CLIENT_ID, APP_SECRET, basicURL } from "../../../common/constant";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { transfer, verifyPaymentOrder } from "../../../api/payment";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../api/axios";
import { setToast } from "../../../redux/toastSlice";
const buyInfo = [
  {
    total: 1000,
    turns: 1000,
    bonus: 0,
    cost: 5,
  },
  {
    total: 2250,
    turns: 2000,
    bonus: 250,
    cost: 10,
  },
  {
    total: 3500,
    turns: 3000,
    bonus: 500,
    cost: 15,
  },
  {
    total: 4750,
    turns: 4000,
    bonus: 750,
    cost: 20,
  },
  {
    total: 6000,
    turns: 5000,
    bonus: 1000,
    cost: 25,
  },
  {
    total: 7250,
    turns: 6000,
    bonus: 1250,
    cost: 30,
  },
  {
    total: 13000,
    turns: 10000,
    bonus: 3000,
    cost: 50,
  },
  {
    total: 27500,
    turns: 20000,
    bonus: 7500,
    cost: 100,
  },
  {
    total: 75000,
    turns: 50000,
    bonus: 25000,
    cost: 250,
  },
  {
    total: 175000,
    turns: 1000000,
    bonus: 75000,
    cost: 500,
  },
];
export const BuyTurns = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [buyTurn, setBuyTurn] = useState({});
  const [transferTurn, setTransferTurn] = useState("");
  const [receiver, setReceiver] = useState("");
  const [agent, setAgent] = useState(localStorage.getItem("agent"));

  const handleBuy = (buy) => {
    setShow(false);
    setTimeout(() => {
      setBuyTurn(buy);
      setShow(true);
    }, 100);
  };

  const user = useSelector(({ user }) => user.user);
  const dispatch = useDispatch();

  const handleSetReceiver = async () => {
    // if (receiver)
    try {
      await axios.post(`${basicURL}/payment/agent`, { receiver });
      setAgent(receiver);
      localStorage.setItem("agent", receiver);
      dispatch(setToast({ type: "success", msg: `Success!` }));
    } catch (err) {
      dispatch(setToast({ type: "erorr", msg: "No User Found!" }));
      setReceiver(null);
    }
  };
  const handleTransfer = () => {
    transfer({ transferTurn }, dispatch);
  };

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Buy Turns",
            amount: {
              currency_code: "USD",
              value: buyTurn.cost,
            },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  };

  // check Approval
  const onApprove = async (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log("payer", payer);
      setSuccess(true);
      verifyPaymentOrder(
        { orderID: data.orderID, buyTurn, receiver: agent },
        dispatch
      );
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
    console.log("ERROR!", data, actions);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <Layout>
        <div className="text-white flex-1 text-center mt-5 mx-5">
          <div className="text-2xl font-bold my-5">Purchase Turns</div>
          <div className="leading-none mb-5">
            Want to play more? Buy turns now and qualify for the cash prize at
            the end of the round! <br />
            <br /> We thank all our supporters. Without you, Combatgrounds
            wouldn't be open today. <br />
            <br /> Paypal allows you to make payments using your credit card,
            bank account, and more. <br />
            The turns will be credited to your account immediately after the
            payment is processed.
          </div>
          <div className="flex justify-center mb-5">
            <img src="/images/paypalverified.gif" />
          </div>
          <div className="text-[yellow] text-xl font-bold mb-5">
            You currently have {user && user.bankedTurn ? user.bankedTurn : 0}{" "}
            purchased turns to transfer to
            <br /> your account
          </div>
          <div className="flex gap-5 justify-center mb-10">
            Number of turns :{" "}
            <input
              className="rounded-md px-2 text-black"
              onChange={(e) =>
                setTransferTurn(e.target.value.replace(/[^0-9]/g, ""))
              }
              value={
                transferTurn ? Number(transferTurn).toLocaleString("en-US") : ""
              }
            />{" "}
            <button
              className="text-black px-5 bg-white"
              onClick={handleTransfer}
            >
              Transfer
            </button>
          </div>
          <div className="mb-5">
            If you are purchasing turns for another player, please enter his
            account user name:
          </div>
          <div className="flex gap-5 justify-center mb-5">
            <input
              className="rounded-md px-2 text-black"
              onChange={(e) => setReceiver(e.target.value)}
            />{" "}
            <button
              className="text-black px-5 bg-white"
              onClick={handleSetReceiver}
            >
              Set
            </button>
            {agent && (
              <button
                className="text-black px-5 bg-white"
                onClick={() => {
                  localStorage.removeItem("agent");
                  setAgent(null);
                }}
              >
                Reset
              </button>
            )}
          </div>
          {agent && (
            <p className="text-center text-secondary text-lg mb-3">
              You purchase turns for{" "}
              <b>
                <u>@{agent}</u>
              </b>
            </p>
          )}
          <div className="w-full flex text-center font-bold">
            <div className="w-[20%] border-[gray] border-[1px] leading-7">
              Total turns
            </div>
            <div className="w-[20%] border-[gray] border-[1px] leading-7">
              Turns
            </div>
            <div className="w-[20%] border-[gray] border-[1px] leading-7">
              Bonus
            </div>
            <div className="w-[20%] border-[gray] border-[1px] leading-7">
              Costs
            </div>
            <div className="w-[20%] border-[gray] border-[1px] leading-7">
              Buy
            </div>
          </div>
          <div className="mb-5">
            {buyInfo.map((buy, index) => (
              <div className="flex text-lg" key={`buy_turn_${index}`}>
                <div className="w-[20%] border-[gray] border-[1px] leading-7">
                  {buy.total.toLocaleString()}
                </div>
                <div className="w-[20%] border-[gray] border-[1px] leading-7">
                  {buy.turns.toLocaleString()}
                </div>
                <div className="w-[20%] text-[yellow] border-[gray] border-[1px] leading-7">
                  {buy.bonus.toLocaleString()}
                </div>
                <div className="w-[20%] border-[gray] border-[1px] leading-7">
                  ${buy.cost}
                </div>
                <div className="w-[20%] flex justify-center py-[1px] border-[gray] border-[1px] leading-7">
                  <img
                    onClick={() => handleBuy(buy)}
                    src="/images/x-click-but23.gif"
                  />
                </div>
              </div>
            ))}
          </div>
          {show && (
            <div
              className={`transition-opacity duration-300 ${
                show ? "animate-fadeIn" : "animate-fadeOut"
              }`}
            >
              <PayPalButtons
                className="transition-all duration-300"
                style={{ layout: "vertical" }}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
              />
            </div>
          )}
          <div className="text-left my-5">
            <div className="text-[red] my-2">Pending eCheck Payments:</div>
            <div>
              Please note that eCheck payments usually take 4 business days to
              clear. The order will not be processed until the funds have
              cleared from the sender's account. If you do not wish to wait for
              your turns, you should verify there are enough funds in your
              PayPal before making the purchase.
            </div>
            <div className="text-[red] my-2"> What are turns?</div>
            <div>
              Turns are what help keep this site running; bandwidth and server
              fees are not cheap. Therefore, instead of advertising, loading
              banners, etc all over the site, we sell turns to keep us giving
              you great entertainment. If you purchase turns, your account
              status also changes from normal to supporter. Then, you can join
              the supporters round, and win prizes. Supporter status also gives
              you more available options in the game, like Hire Spies.
            </div>
          </div>
        </div>
      </Layout>
    </PayPalScriptProvider>
  );
};