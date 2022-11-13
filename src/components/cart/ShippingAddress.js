import {useEffect, useState} from "react";

export const ShippingAddress = () => {
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const API_URL = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/';
    const API_KEY = "DEMOAPIKEY";

    const updateZip = (event) => {
        event.preventDefault();
        setZipcode(event.target.zipcode.value);
    }

    useEffect(() => {
        if (zipcode) {
            const loadAddressData = async () => {
                await fetch(`${API_URL}${zipcode}?key=${API_KEY}`);
            }

            loadAddressData().then(data => {
                setCity(data.City);
                setState(data.State);
            });
        }
    }, [zipcode]);

    return (
        <form onSubmit={updateZip}>
            Zipcode: <input type="text" name="zipcode"/>
            <br/>
            <br/>
            <br/>
            <button type="submit">Lookup City/State</button>
            <br/>
            <br/>
            City: {city}<br/>
            State:{state}<br/>
        </form>
    );
};