import React, { useContext, useId, useState } from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../../App";

const CheckoutForm = ({ userInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [stateData, setStateData] = useContext(StateContext);


  const [errorMessage, setErrorMessage] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    const clientSecret =
      "sk_test_51Ie1JhBHVweerPiK6OwuH7Le6GhqvqT902IKfI31hUySxJe9VIKrea23SBrYdndy2Btyx539mTZqHlEUJ02MttrN00pUQ5cz5F";

    try {
      await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret,
        confirmParams: {
          return_url: "https://www.npmjs.com/package/@stripe/react-stripe-js",
        },
      });
    } catch (error) {
      console.log("");
    }

    const products = JSON.parse(sessionStorage.getItem("cartProducts"));

    const orderProducts = {
      orderId: "id" + Math.random().toString(16).slice(2),
      email: sessionStorage.getItem("email"),
      products: products,
      address: userInfo.address,
      payment: userInfo.totalPrice,
    };
    console.log("userinfo", userInfo);
    console.log("products", products);
    console.log("orderProducts", orderProducts);

    console.log("Payment Successful 🧑‍💻🧑‍💻🧑‍💻🧑‍💻");

    await postData("http://localhost:8080/orders", orderProducts).then(
      (response) => {
        if (response.code == 200) {
          console.log("Response Data : ", orderProducts);
          sessionStorage.setItem("email", orderProducts.email);

          sessionStorage.removeItem("cartProducts")
          setStateData({ ...stateData, products: [] });

          navigate("/orders");
        } else {
          alert("You are not in db You must be valid user");
        }
      }
    );
  };

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || !elements}
        className="bg-green-500 text-white px-8 py-2 mt-5 rounded-lg"
      >
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv"
);

export default function StripePayment({ money, userInfo }) {
  const options = {
    mode: "payment",
    amount: money ? Math.round(money) : 0,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm userInfo={userInfo} />
    </Elements>
  );
}
