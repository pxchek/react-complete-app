import React, {Component} from "react";

class Foo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.message = "Hello";
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        console.log(this.message);
    }

    render() {
        return (
            // <Person
            //     name={"Panindra Chekoori"}
            //     hobbies={['Sports', 'Tech', 'Swimming']}
            // </Person>
            <button
                type={"button"}
                onClick={this.handleClick}>
                Click Me
            </button>
        );
    }
}

export default Foo;