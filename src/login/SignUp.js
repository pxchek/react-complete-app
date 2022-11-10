import {useState} from 'react';
import "../SignUp.css";
import Rest from "../Rest";

export const SignUp = (props) => {
    const [firstName, setFirstName] = useState('Panindra');
    const [lastName, setLastName] = useState('Chekoori');
    const [emailAddress, setEmailAddress] = useState('panindra.chekoori@email.com');

    const handleEmailAddressChange = (event) => {
        setEmailAddress(event.target.value);
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    return (
        <>
            <form>
                <label className="label-style">Enter your First Name:
                    <input value={firstName} onChange={handleFirstNameChange} type="text"/>
                </label>
                <br/>
                <label className="label-style">Enter your Last Name:
                    <input value={lastName} onChange={handleLastNameChange} type="text"/>
                </label>
                <br/>
                <label className="label-style">Enter your email address:
                    <input value={emailAddress} onChange={handleEmailAddressChange} type="text"/>
                </label>
                <br/>
            </form>
            <p>Your full name : {firstName} {lastName}</p>
            <p>Your email address: {emailAddress}</p>
            <p>REGISTRATION IS {props.status}</p>
            <Rest firstName={firstName} lastName={lastName}/>
        </>
    );
};
