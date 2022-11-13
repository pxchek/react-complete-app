import {Link} from "react-router-dom";
import React from "react";

export const Home = () => {
    return (
        <div>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/checkLogin">CheckLogin</Link></p>
            <p><Link to="/product">Product</Link></p>
            <p><Link to="/cart">Cart</Link></p>
            <p><Link to="/checkout">Checkout</Link></p>
            <p><Link to="/confirmation">Confirmation</Link></p>
        </div>
    );
};

