import React from "react";

class Tick extends React.Component {
    render() {
        return (
            <div>
                <h2> It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Tick