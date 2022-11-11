import {useState} from "react";

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