import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowDetails from '../ShowDetails/ShowDetails';

const Details = () => {
    const [country, setCountry] = useState([])
    const {countryName} = useParams();
    useEffect (()=> {
        fetch (`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then (res => res.json())
        .then (data => setCountry(data))
    }, [])
    return (
        <div>
            {
                country.map (country => <ShowDetails countries={country}> </ShowDetails>)
            }
        </div>
    );
};

export default Details;