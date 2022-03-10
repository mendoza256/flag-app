import React, { useState, useEffect } from "react";
import { useAPI } from "../contexts/CountriesContext";

export default function Country({ params }) {
  const { countriesData } = useAPI();
  //   const [country, setCountry] = useState("");

  //   useEffect(() => {
  //     const foundCountry = countriesData.filter(
  //       (c) => c.alpha3Code === params.alpha3Code
  //     );
  //     setCountry(foundCountry[0]);
  //     console.log(foundCountry[0]);
  //     console.log(params.alpha3Code);
  //   }, [countriesData, params.alpha3Code]);

  return (
    <div className="flex flex-col items-start justify-center">
      <div>Details page not working yet :/</div>
      <div>{params.alpha3Code}</div>
    </div>
  );
}
