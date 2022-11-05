import {Component} from "react";

class NewFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            headlines: []
        }
    }
    render() {
        return (
            <div>
                <h1>Headlines for {this.state.date.toLocaleDateString()}</h1>
            </div>
        );
    }
}

export default NewFeed;