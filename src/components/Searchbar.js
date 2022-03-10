import React, { useContext } from "react";
import { useAPI } from "../contexts/CountriesContext";
import { SearchbarContext } from "../contexts/SearchbarContext";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const { regions } = useAPI();
  const { query, setQuery, filter, setFilter } = useContext(SearchbarContext);

  const handleFilterChange = (event) => {
    let selectedRegion = event.target.value;
    setFilter(selectedRegion);
    console.log(selectedRegion);
  };

  return (
    <div
      className="mt-10 bg-transparent mx-auto container 
                    flex flex-col justify-center items-center
                    md:flex-row md:justify-between
                    
    "
    >
      <div id="search-field" className="flex flex-row items-center relative">
        <div className="lupe absolute left-4">
          <FaSearch />
        </div>
        <input
          className="rounded border-none shadow-xl
                    w-96 h-14 pl-10
                    dark:bg-darkBlueEl dark:text-whiteTextEl
                    "
          type="text"
          name="search"
          placeholder="Search for a country..."
          value={query}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setQuery(filter);
            } else {
              setQuery();
            }
          }}
        ></input>
        <label htmlFor="search"></label>
      </div>
      <div>
        <div id="filter" className="mt-10 md:mt-0">
          <select
            value={filter}
            onChange={handleFilterChange}
            className="dark:bg-darkBlueEl dark:text-whiteTextEl"
          >
            <option value="" disabled selected>
              Filter by Region
            </option>
            <option value="All">All</option>
            {regions.map((region) => (
              <option key={`select-${region}`} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
