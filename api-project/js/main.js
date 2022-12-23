// API: https://restcountries.com/#api-endpoints-v2-code
// Image Color: https://www.npmjs.com/package/fast-average-color

import "../css/style.css";
// import { getAverageColor } from "fast-average-color-node";

function addCard(country, flagImg, demonym, color) {
  document.getElementById("card-bin").insertAdjacentHTML(
    "beforeend",
    `<div class="card" style="background-color: ${color};">
  <img
    class="card-img"
    src="${flagImg}"
    alt="${demonym} Flag"
  />
  <h2 class="card-header">${country}</h2>
</div>`
  ); //.style.backgroundColor = "red";
}

async function fetchAPI(url) {
  const apiData = await fetch(url);
  const jsonData = await apiData.json();
  jsonData.forEach((obj) => {
    addCard(obj.name, obj.flag, obj.demonym, "green");
  });
}

fetchAPI("https://restcountries.com/v2/all");

/*function displayAllCards(data) {
  data.forEach((obj) => {
    addCard(obj.name, obj.flag, obj.demonym);
  });
}

// displayAllCards(apiData);*/
