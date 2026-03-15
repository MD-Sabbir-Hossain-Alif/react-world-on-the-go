import React from "react";

const Country = ({ country }) => {
    // console.log(country);
    const cardStyle = {
        padding: "10px",
        border: "1px solid royalblue",
        borderRadius: "6px",
        textAlign: "center",
    };
    // const languages = Object.values(country.languages.languages).join(", ");
    const currencies = Object.values(country.currencies.currencies || {});
    return (
        <div style={cardStyle}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <div
                style={{
                    textAlign: "left",
                }}
            >
                <hr style={{ border: "1px solid gray" }} />
                <h2>{country.name.common}</h2>
                <h3>Official Name: {country.name.official}</h3>
                <p>
                    Population: {country.population.population}{" "}
                    {country.population.population > 1000000
                        ? "Huge People"
                        : "Few People"}
                </p>
                <p>Region: {country.region.region}</p>
                <p>Capital: {country.capital.capital[0]}</p>
                {/* <p>Languages: {languages}</p> */}
                <p>
                    Currency:{" "}
                    {currencies.map((c) => `${c.name}(${c.symbol})`).join(", ")}
                </p>
                <br />
                <button>Not Visited</button>
            </div>
        </div>
    );
};

export default Country;
