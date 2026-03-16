import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountry = (country) => {
        // console.log("i'm visit this country", country);
        const newVisitedCountries = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountries);
        // console.log(newVisitedCountries.length);
    };

    const handleVisitedFlag = (flag) => {
        // console.log(flag);
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
        console.log(newVisitedFlag);
    };

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries.length);
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h2>
                Total Country Visited: {visitedCountry.length} & Not Visited:{" "}
                {250 - visitedCountry.length}
            </h2>
            <h2>Total Flags Visited: {visitedFlags.length}</h2>
            <ol>
                {visitedCountry.map((country) => (
                    <li>{country.name.common}</li>
                ))}
            </ol>

            <div className="visited-flags-container">
                {visitedFlags.map((flag) => (
                    <img src={flag}></img>
                ))}
            </div>

            <div className="countries">
                {countries.map((country) => (
                    <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
