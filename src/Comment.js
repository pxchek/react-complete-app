import React, {Component} from "react";
import UserInfo from "./UserInfo";
import Tick from "./Tick";
import NameForm from "./Nameform";
import Person from "./Person";
import Foo from "./Foo";
import Counter from "./Counter";

class Comment extends Component {
    render() {
        return (
            <div>
                <p>Submit Form</p>
                <NameForm/>
                <div className="Comment">
                    <UserInfo user={this.props.author}/>
                    <div className="Comment-text">
                        {this.props.text}
                    </div>
                    <Tick/>
                </div>
                <div>
                    {
                        /*JSX element and its attributes are passed to component as
                        properties or props*/
                    }
                    <Person
                        name={"Panindra Chekoori"}
                        hobbies={['Sports', 'Tech', 'Swimming']}/>
                    <Person
                        name={"Lewis Hamilton"}
                        hobbies={['Sports', 'Tech', 'Swimming']}/>
                </div>
                <Foo/>
                <Counter/>
            </div>
        );
    }
}

export default Comment;