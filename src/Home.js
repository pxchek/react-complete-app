import {Link} from "react-router-dom";
import React from "react";

export const Home = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/checkLogin">CheckLogin</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>

            <li>
                <Link to="/checkout">Checkout</Link>
            </li>
            <li>
                <Link to="/confirmation">Confirmation</Link>
            </li>
        </ul>
    );
};

