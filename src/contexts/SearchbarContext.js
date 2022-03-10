import React, { createContext, useState } from "react";

export const SearchbarContext = createContext();

// This context provider is passed to any component requiring the context
export const SearchbarProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <SearchbarContext.Provider
      value={{
        query,
        filter,
        setQuery,
        setFilter,
      }}
    >
      {children}
    </SearchbarContext.Provider>
  );
};

export default SearchbarProvider;
