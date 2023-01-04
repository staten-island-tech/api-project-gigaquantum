// API: https://restcountries.com/#api-endpoints-v2-code
// Image Color: https://www.npmjs.com/package/fast-average-color

import "../css/style.css";
// import { getAverageColor } from "fast-average-color-node";

function addCard(country, flagImg, demonym) {
  // Make a scaled version of the flag image the background image
  // Add to background image css styling: filter: blur(20px);
  document.getElementById("card-bin").insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="${country}">
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
    const response = await fetch(url);
    if (response.status < 200 || response.staus > 299) {
      throw Error(response.status);
    } else {
      const jsonData = await response.json();
      return jsonData;
    }
  } catch (error) {
    console.log(error);
  }
}

function displayAllCards(data) {
  data.forEach((obj) => {
    addCard(obj.name, obj.flag, obj.demonym);
  });
}

const countryData = await fetchAPI("https://restcountries.com/v2/al1l");
displayAllCards(countryData);

/*getAverageColor(
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
).then((color) => {
  console.log(color);
});*/
