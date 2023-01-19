import { apiFunctions } from "./functions.js";
const countryData = await apiFunctions.fetchAPI(
  "https://restcountries.com/v2/all"
);
export { countryData };
