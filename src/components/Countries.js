import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAPI } from "../contexts/CountriesContext";
import { SearchbarContext } from "../contexts/SearchbarContext";

const Countries = () => {
  const { countriesData, isLoading, error } = useAPI();
  const { query, filter } = useContext(SearchbarContext);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return !isLoading ? (
    // All countries div
    <div
      className="bg-transparent container mx-auto
                mt-16 pb-32
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10
                "
    >
      {countriesData
        // Filter for select filter
        .filter((country) => {
          if (!filter) return true;
          if (filter === "All") return true;
          let region = country.region;
          return region === filter ? true : false;
        })
        // Filter for searchfield
        .filter((country) => {
          if (!query) return true;
          let name = country.name.toLowerCase();
          return name.includes(query.toLowerCase());
        })
        // Map all/filtered countries to page
        .map((country) => (
          /* Country Card */
          <Link
            className="card max-w-fit
                    text-14px text-left whitespace-normal
                    text-veryDarkBlueText bg-whiteTextEl
                    dark:text-whiteTextEl dark:bg-darkBlueEl
                    shadow-lg rounded-md hover:shadow-xl
                    overflow-hidden transition-all
                    "
            to={`/${country.alpha3Code}`}
            key={`card-${country.name}`}
          >
            <div>
              <div className="flag  overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={country.flag}
                  alt=""
                />
              </div>
              <div className="m-8">
                <div className="mb-4 font-bold">
                  <div>{country.name}</div>
                </div>
                <div className="population text-sm">
                  <span className="font-medium">Population: </span>
                  <span className="font-thin">{country.population}</span>
                </div>
                <div className="region text-sm">
                  <span className="font-medium">Region: </span>
                  <span className="font-thin">{country.region}</span>
                </div>
                <div className="capital text-sm">
                  <span className="font-medium">Capital: </span>
                  <span className="font-thin">{country.capital}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  ) : (
    // If countries data not loaded:
    <div className="h-screen flex justify-center">
      <p>Loading...</p>
    </div>
  );
};

export default Countries;
