import React, {} from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name, flag, alpha3Code} = props.country;
    return (
        
        <div className="country-div">
            <Link to={`/country/${name}`}>
            <div> 
            <img className="flag" src={flag} alt=""/>
            <h1>{name}</h1>
            </div>
             <div>
             <Link to={`/country/${name}`}> <button className="btn">Details</button> </Link>
             </div>
          </Link>
        </div>
    );
};

export default Country;