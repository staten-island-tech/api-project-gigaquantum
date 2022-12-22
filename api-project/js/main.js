// API: https://restcountries.com/#api-endpoints-v2-code
// Image Color: https://www.npmjs.com/package/fast-average-color

async function fetchAPI(url) {
  const apiData = await (await fetch(url)).json();
  return apiData;
}

fetchAPI("https://restcountries.com/v2/all").then(console.log(apiData));
