// API: https://restcountries.com/#api-endpoints-v2-code
// Image Color: https://www.npmjs.com/package/fast-average-color

import "../css/style.css";
import { getAverageColor } from "fast-average-color-node";

/* function addCard(country, flagImg, demonym, color) {
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

displayAllCards(await fetchAPI("https://restcountries.com/v2/all"));
*/

getAverageColor(
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
).then((color) => {
  console.log(color);
});
