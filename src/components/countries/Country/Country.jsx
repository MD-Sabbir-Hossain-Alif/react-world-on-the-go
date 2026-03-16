import { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
    // console.log(country);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };
    // const languages = Object.values(country.languages.languages).join(", ");
    const currencies = Object.values(country.currencies.currencies || {});
    return (
        <div className={visited ? "country country-visited" : "country"}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <div
                style={{
                    textAlign: "left",
                }}
            >
                <hr style={{ border: "1px solid gray" }} />
                <h2>
                    {country.name.common}: {country.name.official}
                </h2>

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
                <button onClick={handleVisited}>
                    {visited ? "Visited" : "Not Visited"}
                </button>
            </div>
        </div>
    );
};

export default Country;
