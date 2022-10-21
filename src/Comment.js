import React, {Component} from "react";
import UserInfo from "./UserInfo";
import Tick from "./Tick";
import NameForm from "./Nameform";

class Comment extends Component {
    render() {
        return (
            <div>
                <p>Submit Form</p>
                <NameForm/>
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <Tick/>
            </div>
            </div>
        );
    }
}

export default Comment;