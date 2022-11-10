import React from "react";
import {SignUp} from "./login/SignUp";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";

export const Main = () => {
    return (
        <div>
            <Header/>
            <img src="./img.png" align="center"/>
            <div className="main" align="center">
                <h1>REGISTRATION FORM</h1>
                <SignUp/>
            </div>
            <Footer/>
        </div>
    );
};