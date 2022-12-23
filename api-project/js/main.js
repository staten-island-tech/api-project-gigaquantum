// API: https://restcountries.com/#api-endpoints-v2-code
// Image Color: https://www.npmjs.com/package/fast-average-color

async function fetchAPI(url) {
  const apiData = await fetch(url);
  const jsonData = await apiData.json();
  console.log(jsonData);
}

fetchAPI("https://restcountries.com/v2/all");
