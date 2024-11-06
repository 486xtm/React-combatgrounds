import react, { useState, useEffect } from "react";
import { Layout } from "../../../common/components";
import { CLIENT_ID, APP_SECRET } from "../../../common/constant";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const Subscribe = () => {
  const [show, setShow] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const handleSubscribe = (buy) => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    },10)
  };
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Buy Turns",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      alert("Payment successful!!");
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <Layout>
        <div className="text-white flex-1 text-center mt-5">
          <div className="flex items-center justify-center">
            <img src="/pics/vip.gif" alt="vip" />
          </div>
          <div className="border-[1px] border-gray-500 bg-[#333333] mx-10 flex">
            <div className="text-xl font-bold border-r-[1px] border-gray-500 w-3/4">
              Become a VIP member now!
            </div>
            <div className="w-1/4 flex items-center justify-center">
              <img
                onClick={handleSubscribe}
                src="/images/x-click-but24.gif"
                alt="subscribe"
              />
            </div>
          </div>
          <div className="border-[1px] border-gray-500 text-sm bg-[#333333] mx-10 p-4 mb-4">
            <div className="text-xl  font-bold">VIP Subscription</div>
            <div className="text-left">
              Register as a VIP player for only $20.00 a month and receive the
              following benefits:
            </div>
            <ul className="list-outside text-left list-disc ml-10 leading-none">
              <br />
              <li>
                <b>10 extra-turns every 10 minutes</b> - That means you're going to
                receive 25 turns every 10 minutes!
              </li>
              <li>
                <b>Max turns build up raised by 500</b> - You will keep receiving
                additional turns every 10 minutes until you accumulate 2,000
                turns.
              </li>
              <li>
                <b>Support ticket priority</b> - Your support tickets will be
                automatically pushed to the front of the queue.
              </li>
              <br />
            </ul>
            <div className="text-xl font-bold mb-4">10 Extra-Turns every 10 minutes!</div>
            <div className="text-left text-xs">Note: You can cancel your membership at any time directly via your PayPal account.</div>
          </div>
          {show && (
            <div
              className={`w-[70%] mx-auto transition-opacity duration-300 ${
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
        </div>
      </Layout>
    </PayPalScriptProvider>
  );
};
export default Subscribe;
