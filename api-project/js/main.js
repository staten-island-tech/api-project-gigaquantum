// API: https://restcountries.com/#api-endpoints-v2-code

import "../css/style.css";
import { cardFunctions, buttonFunctions } from "./functions.js";
import { apiData } from "./api.js";

apiData.then((countryData) => {
  cardFunctions.displayAllCards(countryData, countryData);
  buttonFunctions.addAllBtns(
    countryData,
    buttonFunctions.buttonArray(countryData)
  );
});
