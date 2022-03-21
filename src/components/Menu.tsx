import React, { useState } from "react";

import { PaymentOptions } from "../types/utils";
import Card from "./Card";
import Netbanking from "./Netbanking";
import Upi from "./Upi";

import "./Menu.css";

const paymentOptions = [PaymentOptions.CARD, PaymentOptions.NETBANKING, PaymentOptions.UPI];

const Menu = () => {
    const [option, setOption] = useState<string>();
    return (
        <div className="menu">
            <div className="payment-options">
                {
                    paymentOptions.map(opt => (
                        <button
                            key={opt}
                            className={`payment-option ${option === opt ? 'payment-option-selected' : ''}`}
                            onClick={() => setOption(opt)}
                        >
                            {opt}
                        </button>
                    ))
                }
            </div>

            <div className="payment-details">
                {option === PaymentOptions.CARD && <Card />}
                {option === PaymentOptions.NETBANKING && <Netbanking />}
                {option === PaymentOptions.UPI && <Upi />}
            </div>

        </div>
    );
};

export default Menu;