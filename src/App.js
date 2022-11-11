import React from "react";
import {SignUp} from "./components/login/SignUp";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Cart} from "./components/cart/Cart";
import {Checkout} from "./components/checkout/Checkout";
import {Product} from "./components/product/Product";
import {Confirmation} from "./components/confirmation/Confirmation";
import {Home} from "./components/homepage/Home";

export const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkLogin" element={<SignUp/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/confirmation" element={<Confirmation/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};