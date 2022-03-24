import React, { useContext } from "react";
import { useAPI } from "../contexts/CountriesContext";
import { SearchbarContext } from "../contexts/SearchbarContext";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const { regions } = useAPI();
  const { query, setQuery, setFilter } = useContext(SearchbarContext);

  const handleFilterChange = (event) => {
    let selectedRegion = event.target.value;
    setFilter(selectedRegion);
  };

  return (
    <div
      className="mt-10 mx-auto container 
                    flex flex-col justify-center items-center
                    md:flex-row md:justify-between
                    
    "
    >
      {/* Search Field */}
      <div
        id="search-field"
        className="flex flex-row items-center 
                  border-none w-96 h-14 rounded-md bg-white
                dark:bg-darkBlueEl dark:text-whiteTextEl
                  shadow-xl"
      >
        <div id="lupe" className="pl-5">
          <FaSearch fill="gray" />
        </div>
        <input
          className="border-none w-full h-full outline-none rounded-full bg-transparent
                    border-transparent focus:border-transparent focus:ring-0"
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
      </div>
      {/* Filter by Region */}
      <div id="filter-section">
        <div id="filter" className="mt-10 md:mt-0">
          <select
            defaultValue={"DEFAULT"}
            onChange={handleFilterChange}
            className="dark:bg-darkBlueEl dark:text-whiteTextEl rounded-md"
          >
            <option value="DEFAULT" disabled>
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
