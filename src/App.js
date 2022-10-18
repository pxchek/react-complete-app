import React from "react";
import Tick from "./Tick.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <Tick/>
            </div>
        );
    }
}

export default App;
