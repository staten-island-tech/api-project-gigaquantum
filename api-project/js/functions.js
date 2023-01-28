import { apiFunctions } from "./api.js";

const cardFunctions = {
  addCard: function (country, flagImg, demonym) {
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
  },
  displayAllCards: function (data) {
    cardFunctions.removeAll(".expanded-card");
    data.forEach((obj) => {
      cardFunctions.addCard(obj.name, obj.flag, obj.demonym);
    });
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", function () {
        cardFunctions.displayExpandedCard(card.id, data);
      });
    });
  },
  addExpandedCard: function (
    country,
    flagImg,
    demonym,
    population,
    area,
    timeZones,
    capital,
    currencies,
    languages
  ) {
    document.getElementById("card-bin").insertAdjacentHTML(
      "beforeend",
      `<div class="expanded-card">
          <img
            class="expanded-img"
            src="${flagImg}"
            alt="${demonym} Flag"
          />
          <div class="expanded-content">
          <h2 class="expanded-header">${country}</h2>
            <p class="expanded-info"><span class="expanded-info-type">Population:</span> ${population}</p>
            <p class="expanded-info"><span class="expanded-info-type">Area:</span> ${area} km<sup>2</sup></p>
            <p class="expanded-info"><span class="expanded-info-type">Time Zones:</span> ${timeZones}</p>
            <p class="expanded-info"><span class="expanded-info-type">Capital:</span> ${capital}</p>
            <p class="expanded-info"><span class="expanded-info-type">Curriencies:</span> ${currencies}</p>
            <p class="expanded-info"><span class="expanded-info-type">Languages:</span> ${languages}</p>
            <button class="remove-btn">Close</button>
          </div>
        </div>`
    );
  },
  displayExpandedCard: function (cardID, countryData) {
    const country = countryData.filter((country) => country.name == cardID);
    cardFunctions.removeAll(".card");
    cardFunctions.removeAll(".filter-btn");
    cardFunctions.addExpandedCard(
      apiFunctions.undefinedCatch(country[0].name),
      apiFunctions.undefinedCatch(country[0].flag),
      apiFunctions.undefinedCatch(country[0].demonym),
      apiFunctions.undefinedCatch(country[0].population),
      apiFunctions.undefinedCatch(country[0].area),
      apiFunctions.undefinedCatch(
        country[0].timezones.toString().replaceAll(",", ", ")
      ),
      apiFunctions.undefinedCatch(country[0].capital),
      apiFunctions.undefinedCatch(
        apiFunctions.getUnnamedProperty(country[0], "currencies", "name")
      ),
      apiFunctions.undefinedCatch(
        apiFunctions.getUnnamedProperty(country[0], "languages", "name")
      )
    );
    document.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        cardFunctions.displayAllCards(countryData);
        buttonFunctions.addAllBtns(buttonFunctions.buttonArray(countryData));
      });
    });
  },
  removeAll: function (selector) {
    document.querySelectorAll(selector).forEach((item) => item.remove());
  },
  resetAll: function (countryData) {
    cardFunctions.removeAll(".card");
    cardFunctions.removeAll(".expanded-card");
    cardFunctions.displayAllCards(countryData);
    buttonFunctions.resetButtons(".filter-btn");
    console.log("reset");
  },
};

const buttonFunctions = {
  resetButtons: function (selector) {
    document.querySelectorAll(selector).forEach((btn) => {
      btn.style.color = "";
      btn.style.backgroundColor = "";
    });
  },
  highlightButton: function (btnID) {
    document.getElementById(btnID).style.color = "#e0e0e0";
    document.getElementById(btnID).style.backgroundColor = "#1f1f1f";
  },
  addFilterBtn: function (btnID, btnText, data) {
    buttonFunctions.resetButtons(".filter-btn");
    document
      .getElementById("btn-bin")
      .insertAdjacentHTML(
        "beforeend",
        `<button class="filter-btn" id="${btnID}">${btnText}</button>`
      );
    document.getElementById(btnID).addEventListener("click", function () {
      buttonFunctions.resetButtons(".filter-btn");
      buttonFunctions.highlightButton(btnID);
      cardFunctions.removeAll(".card");
      cardFunctions.removeAll(".expanded-card");
      cardFunctions.displayAllCards(data);
    });
  },
  addAllBtns: function (array) {
    array.forEach((set) => {
      buttonFunctions.addFilterBtn(set[0], set[1], set[2]);
    });
  },
  buttonArray: function (countryData) {
    const array = [
      [
        "americas-btn",
        "Americas",
        countryData.filter((country) => country.region == "Americas"),
      ],
      [
        "europe-btn",
        "Europe",
        countryData.filter((country) => country.region == "Europe"),
      ],
      [
        "asia-btn",
        "Asia",
        countryData.filter((country) => country.region == "Asia"),
      ],
      [
        "africa-btn",
        "Africa",
        countryData.filter((country) => country.region == "Africa"),
      ],
      [
        "oceania-btn",
        "Oceania",
        countryData.filter((country) => country.region == "Oceania"),
      ],
      [
        "antarctica-btn",
        "Antarctica",
        countryData.filter((country) => country.subregion == "Antarctica"),
      ],
      [
        "pop-greater-btn",
        "Population &gt; 100M",
        countryData.filter((country) => country.population > 100000000),
      ],
      [
        "pop-less-btn",
        "Population &lt; 100M",
        countryData.filter((country) => country.population < 100000000),
      ],
      [
        "area-greater-btn",
        "Area &gt; 100K km<sup>2</sup>",
        countryData.filter((country) => country.area > 100000),
      ],
      [
        "area-less-btn",
        "Area &lt; 100K km<sup>2</sup>",
        countryData.filter((country) => country.area < 100000),
      ],
      ["reset-btn", "Reset", countryData],
    ];
    return array;
  },
};

export { buttonFunctions, cardFunctions };
