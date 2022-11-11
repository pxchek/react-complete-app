import React from "react";
import {SignUp} from "./login/SignUp";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Cart} from "./Cart";

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <img src="./img.png" align="center"/>
                <div className="main" align="center">
                    <h1>REGISTRATION FORM</h1>
                    <SignUp/>
                </div>
                <Footer/>
                <ul>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};