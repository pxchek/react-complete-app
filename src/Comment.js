import React, {Component} from "react";
import SignUp from "./login/SignUp";

class Comment extends Component {
    render() {
        return (
            <div className="main" align="center">
                <h1>REGISTRATION FORM</h1>
                <SignUp status="SUCCESSFUL"/>
            </div>
        );
    }
}

export default Comment;