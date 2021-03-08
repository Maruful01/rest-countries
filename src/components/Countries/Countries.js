import React, { useContext } from 'react';
import './Countries.css';
import { CountryContext } from '../Home/Home';
import Country from '../Country/Country';
const Countries = () => {
    const country = useContext(CountryContext);

    return (
        <div className="countries-div">
            {
               country.map(country => <Country country={country}> </Country>)
            }

        </div>
    );
};

export default Countries;