import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useAPI } from "../contexts/CountriesContext";

export default function Country({ params }) {
  const { countriesData, isLoading, error } = useAPI();
  const [country, setCountry] = useState("");
  const alpha3Code = params.alpha3Code;

  useEffect(() => {
    const foundCountry = countriesData.filter(
      (c) => c.alpha3Code === params.alpha3Code
    );
    setCountry(foundCountry[0]);
    console.log(foundCountry[0]);
  }, [countriesData]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return !isLoading ? (
    <div className="flex flex-col w-screen h-screen items-center">
      <div id="back-button" className="flex flex-col my-12">
        <Link to="/">
          <button className="py-2 px-4 shadow-xl">Back</button>
        </Link>
      </div>
      <div id="country-all" className="flex flex-row gap-12 items-center h-1/2">
        <div id="country-flag" className="w-72 h-48">
          <img src={country.flag} alt="" />
        </div>
        <div id="country-text">
          <div id="country-title">
            <h1 className="font-bold text-3xl">{country.name}</h1>
          </div>
          <div
            id="country-details"
            className="flex flex-col md:flex-row md:gap-12"
          >
            <div id="country-details-1">
              <span>
                <b>Native Name:</b> {country.nativeName}
              </span>
              <br />
              <span>
                <b>Population:</b> {country.population}
              </span>
              <br />
              <span>
                <b>Region:</b> {country.region}
              </span>
              <br />
              <span>
                <b>Subregion:</b> {country.subregion}
              </span>
              <br />
              <span>
                <b>Capital:</b> {country.capital}
              </span>
              <br />
            </div>
            <div id="country-details-2">
              <span>
                <b>Top Level Domain:</b>{" "}
                {country.topLevelDomain.map((domain) => (
                  <span>{domain}</span>
                ))}
              </span>
              <br />
              <span>
                <b>Currencies:</b>{" "}
                {country.currencies.map((currency) => (
                  <span>{currency.name}</span>
                ))}
              </span>
              <br />
              <span>
                <b>Languages:</b>{" "}
                {country.languages.map((lang) => (
                  <span>{lang.name}, </span>
                ))}
              </span>
            </div>
          </div>
          <div id="border-countries" className="flex flex-row items-center">
            <span className="font-bold">Border Countries:</span>
            {country.borders.map((border) => (
              <button className="py-2 px-4 shadow-xl">{border}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    // If countries data not loaded yet:
    <div className="h-screen w-screen flex justify-center items-center">
      <p>Loading...</p>
    </div>
  );
}
