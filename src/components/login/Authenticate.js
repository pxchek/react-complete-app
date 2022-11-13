import {useState} from "react";
import {Success} from "./Success";
import {Failure} from "./Failure";

export const Authenticate = (props) => {
    let [status, setStatus] = useState('Registration is Pending');
    const firstName = props.firstName;
    const lastName = props.lastName;

    function authenticate() {
        window
            .fetch('https://httpbin.org/get?firstName=' + firstName + '&lastName=' + lastName)
            .then(response => response.json())
            .then(data => setStatus('Hello ' + data.args.firstName + ' ' + data.args.lastName + ', Registration is successful'))
            .catch(error => console.error(error));

        return true;
    }

    return (
        <div>
            <p>{status}</p>
            <button onClick={() => {
                const result = authenticate();
                if (result) {
                    status = <Success/>
                } else {
                    status = <Failure/>
                }
            }}>
                Register
            </button>
        </div>
    );
};