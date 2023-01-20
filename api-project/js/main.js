// API: https://restcountries.com/#api-endpoints-v2-code

import "../css/style.css";
import { cardFunctions, buttonFunctions, apiFunctions } from "./functions.js";
import { countryData } from "./api.js";

cardFunctions.displayAllCards(countryData);
buttonFunctions.addAllBtns([
  [
    "americas-btn",
    "Americas",
    countryData.filter((country) => country.region == "Americas"),
  ],
  [
    "europe-btn",
    "Europe",
    countryData.filter((country) => country.region == "Europe"),
  ],
  [
    "asia-btn",
    "Asia",
    countryData.filter((country) => country.region == "Asia"),
  ],
  [
    "africa-btn",
    "Africa",
    countryData.filter((country) => country.region == "Africa"),
  ],
  [
    "]oceania-btn",
    "Oceania",
    countryData.filter((country) => country.region == "Oceania"),
  ],
  [
    "antarctica-btn",
    "Antarctica",
    countryData.filter((country) => country.subregion == "Antarctica"),
  ],
  [
    "pop-greater-btn",
    "Population &gt; 100,000,000",
    countryData.filter((country) => country.population > 100000000),
  ],
  [
    "pop-less-btn",
    "Population &lt; 100,000,000",
    countryData.filter((country) => country.population < 100000000),
  ],
  [
    "area-greater-btn",
    "Area &gt; 100,000",
    countryData.filter((country) => country.area > 100000),
  ],
  [
    "area-less-btn",
    "Area &lt; 100,000",
    countryData.filter((country) => country.area < 100000),
  ],
]);
