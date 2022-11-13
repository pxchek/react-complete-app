import {useState} from 'react';
import "./SignUp.css";
import {Authenticate} from "./Authenticate";
import PropTypes from "prop-types";

export const SignUp = () => {
    const [firstName, setFirstName] = useState('Panindra');
    const [lastName, setLastName] = useState('Chekoori');

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
            </form>
            <p>Your full name : {firstName} {lastName}</p>
            <Authenticate firstName={firstName} lastName={lastName}/>
        </>
    );
};

SignUp.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}
