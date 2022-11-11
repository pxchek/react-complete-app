import React from "react";
import {SignUp} from "./login/SignUp";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Cart} from "./Cart";
import {Checkout} from "./Checkout";
import {Product} from "./Product";
import {Confirmation} from "./Confirmation";
import {Home} from "./Home";

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