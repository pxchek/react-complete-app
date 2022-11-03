import {Component} from "react";

class Person extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name} has hobbies.</p>
                <p>{this.props.hobbies[0]}.</p>
                <p>{this.props.hobbies[1]}.</p>
                <p>{this.props.hobbies[2]}.</p>
            </div>
        )
    }
}

export default Person;