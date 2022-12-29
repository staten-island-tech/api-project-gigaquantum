// API: https://restcountries.com/#api-endpoints-v2-code
// Image Color: https://www.npmjs.com/package/fast-average-color

import "../css/style.css";
// import { getAverageColor } from "fast-average-color-node";

function addCard(country, flagImg, demonym) {
  document.getElementById("card-bin").insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="${country}" style="background-image: ${flagImg}; filter: blur(8px);">
  <img
    class="card-img"
    src="${flagImg}"
    alt="${demonym} Flag"
  />
  <h2 class="card-header">${country}</h2>
</div>`
  );
}

async function fetchAPI(url) {
  try {
    const apiData = await fetch(url);
    const jsonData = await apiData.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
}

function displayAllCards(data) {
  data.forEach((obj) => {
    addCard(obj.name, obj.flag, obj.demonym);
  });
}

const countryData = await fetchAPI("https://restcountries.com/v2/all");
displayAllCards(countryData);

/*getAverageColor(
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
).then((color) => {
  console.log(color);
});*/
