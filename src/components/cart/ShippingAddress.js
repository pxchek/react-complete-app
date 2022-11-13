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
                const response = await fetch(`${API_URL}${zipcode}?key=${API_KEY}`);
                const data = await response.json();
                setCity(data.City);
                setState(data.State);

                await loadAddressData();
            }
        }
    }, [zipcode]);

    return (
        <form onSubmit={updateZip}>
            Zipcode: <input type="text" name="zipcode"/>
            <button type="submit">Lookup City/State</button>
            City: {city}<br/>
            State:{state}<br/>
        </form>
    );
};