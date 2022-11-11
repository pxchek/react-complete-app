import React from "react";
import {SignUp} from "./login/SignUp";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Cart} from "./Cart";
import {Checkout} from "./Checkout";
import {Product} from "./Product";
import {Confirmation} from "./Confirmation";

export const App = () => {
    return (
        <div align="center">
            <BrowserRouter>
                <Header/>
                <ul>
                    <li>
                        <Link to="/checkLogin">CheckLogin</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                        <Link to="/confirmation">Confirmation</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/checkLogin">
                        <SignUp/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout/>
                    </Route>
                    <Route path="/product">
                        <Product/>
                    </Route>
                    <Route path="/confirmation">
                        <Confirmation/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};