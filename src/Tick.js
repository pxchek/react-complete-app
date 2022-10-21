import React from "react";

class Tick extends React.Component {
    render() {
        return (
            <div>
                <p>It is {new Date().toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Tick