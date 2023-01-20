// API: https://restcountries.com/#api-endpoints-v2-code

import { apiFunctions } from "./functions.js";

const countryData = apiFunctions.fetchAPI("https://restcountries.com/v2/all");

export { countryData };
