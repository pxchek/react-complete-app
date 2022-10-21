import React, {Component} from "react";
import UserInfo from "./UserInfo";
import Tick from "./Tick";

class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <Tick/>
            </div>
        );
    }
}

export default Comment;