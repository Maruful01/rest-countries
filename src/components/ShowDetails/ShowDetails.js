import React from 'react';
import './ShowDetails.css';

const ShowDetails = (props) => {
    console.log (props)
    const {name, area, capital, flag, population, region, subregion} = props.countries;
    return (
        <div className="Details-div">
            <div className="header">
            <img className="big-flag" src={flag} alt=""/>
            <h2>{name}</h2>
            </div>
             <div className="info">
              <p>Capital: {capital}</p>
              <p>Region: {region}</p>
              <p>Subregion: {subregion}</p>
              <p>Population: {population}</p>
              <p>Area: {area}</p>
              
             </div>

        </div>
    );
};

export default ShowDetails;