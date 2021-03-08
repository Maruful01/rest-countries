import React, { createContext, useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
export const CountryContext = createContext();

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=> {
        fetch ("https://restcountries.eu/rest/v2/all")
        .then (res => res.json())
        .then (data => setCountries(data))
    })
    return (
        <CountryContext.Provider value={countries}>
         <Countries></Countries>
        </CountryContext.Provider>
    );
};

export default Home;