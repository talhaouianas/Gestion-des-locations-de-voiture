import React from "react";
import { Link } from "react-router-dom";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentMethod = () => {
  return (
    <>
    <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons/>
        </PayPalScriptProvider>
      {/*<div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" id='' /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Paypal
        </label>

        <img src={paypal} alt="" />
  </div> */}
      {/* <div className="payment text-end mt-5">
        <Link to="#">
        <button>Reserve Now</button>
        </Link>
      </div>  */}
  
    </>
  );
};

export default PaymentMethod;
