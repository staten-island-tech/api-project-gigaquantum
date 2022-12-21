// Create Search function for species

async function fetchAPI(url) {
  apiData = await (await fetch(url)).json();
}
