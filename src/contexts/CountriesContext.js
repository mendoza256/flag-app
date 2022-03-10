// Import useContext, createContext (opt. useState, useEffect)
import React, { useContext, createContext, useState, useEffect } from "react";

// Create "APIContext" used in .Provider in return
export const APIContext = createContext();

// Create APIContextProvider imported in other App Component and wrapped around
// child components
// also logic to fetch and store states
export const APIContextProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
        (response) => {
          setCountriesData(response);
          setIsLoading(false);
        },
        (error) => setError(error)
      );
  }, []);

  //TODO: FINISH ARRAY FROM REGIONS
  useEffect(() => {
    let regions = [...new Set(countriesData.map((country) => country.region))];
    setRegions(regions);
  }, [countriesData]);

  // Return APIContext (line 5) . Provider with values from line 11++
  return (
    <APIContext.Provider
      value={{
        countriesData,
        regions,
        isLoading,
        error,
      }}
    >
      {/* // Make usable in child components */}
      {children}
    </APIContext.Provider>
  );
};
// export above Component
export default APIContextProvider;

// Create function to be called in child components that use context data
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  // console.log(context);
  return context;
}
