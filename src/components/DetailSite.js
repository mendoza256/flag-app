import React from "react";
import { useParams } from "react-router-dom";
import APIContextProvider from "../contexts/CountriesContext";
import Country from "./Country";

const DetailSite = () => {
  let params = useParams();

  return (
    <APIContextProvider>
      <Country params={params} />
    </APIContextProvider>
  );
};

export default DetailSite;
