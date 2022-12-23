// API: https://restcountries.com/#api-endpoints-v2-code
// Image Color: https://www.npmjs.com/package/fast-average-color

import "../css/style.css";

function addCards(country, flagImg, color) {
  insertAdjacentHTML(
    beforeend,
    `<div class="card">
  <img
    class="card-img"
    src="https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg"
    alt="Argentinian Flag"
  />
  <h2 class="card-header">Argentina</h2>
</div>`
  );
}

async function fetchAPI(url) {
  const apiData = await fetch(url);
  const jsonData = await apiData.json();
  jsonData.forEach((country) => {});
}

fetchAPI("https://restcountries.com/v2/all");
