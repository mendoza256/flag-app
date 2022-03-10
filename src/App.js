import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Topbar";
import Searchbar from "./components/Searchbar";
import Countries from "./components/Countries";
import APIContextProvider from "./contexts/CountriesContext";
import SearchbarProvider from "./contexts/SearchbarContext";

function App() {
  return (
    // use context component
    <APIContextProvider>
      <div className="">
        <div className="App container-fluid mx-auto bg-veryLightGreyBg dark:bg-veryDarkBlueBg min-h-screen">
          <Topbar />
          <div className="container mx-auto">
            <SearchbarProvider>
              <Searchbar />
              <Countries />
            </SearchbarProvider>
          </div>
        </div>
      </div>
    </APIContextProvider>
  );
}

export default App;
