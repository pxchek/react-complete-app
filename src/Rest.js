import {useState} from "react";

export const Rest = () => {
    let [status, setStatus] = useState('Registration is Pending');

    function authenticate() {
       setStatus("Registration is successful");
    }

    return (
        <div>
            <p>{status}</p>
            <button onClick={authenticate}>
                Register
            </button>
        </div>
    );
};