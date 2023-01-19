import { countryData } from "./api.js";

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
        cardFunctions.displayExpandedCard(card.id, countryData);
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
  displayExpandedCard: function (cardID, data) {
    const country = data.filter((country) => country.name == cardID);
    cardFunctions.removeAll(".card");
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
      });
    });
  },
  removeAll: function (selector) {
    document.querySelectorAll(selector).forEach((item) => item.remove());
  },
  resetAll: function () {
    cardFunctions.removeAll(".card");
    cardFunctions.removeAll(".expanded-card");
    cardFunctions.displayAllCards();
    buttonFunctions.resetButtons(".filter-btn");
    console.log("reset");
  },
};

const filterFunctions = {
  filterByMatch: function (obj, filterType, targetValue) {
    obj
      .filter((element) => element[filterType] == targetValue)
      .forEach((filteredDatapoint) => {
        cardFunctions.addCard(
          filteredDatapoint.country,
          filteredDatapoint.flagImg,
          filteredDatapoint.demonym
        );
      });
  },
  compareGreater: function (obj, filterType, targetValue) {
    gpuData
      .filter((gpu) => gpu[filterType] > targetValue)
      .forEach((filteredDatapoint) => {
        cardFunctions.addCard(
          filteredDatapoint.country,
          filteredDatapoint.flagImg,
          filteredDatapoint.demonym
        );
      });
  },
  compareLess: function (filterType, targetValue) {
    gpuData
      .filter((gpu) => gpu[filterType] < targetValue)
      .forEach((filteredDatapoint) => {
        cardFunctions.addCard(
          filteredDatapoint.country,
          filteredDatapoint.flagImg,
          filteredDatapoint.demonym
        );
      });
  },
  filterByCompare: function (filterType, targetValue, greaterOrLess) {
    if (greaterOrLess == "greater") {
      filterFunctions.compareGreater(filterType, targetValue);
    } else {
      filterFunctions.compareLess(filterType, targetValue);
    }
  },
  displayFilteredItems: function (
    obj,
    filterType,
    targetValue,
    filterMethod,
    greaterOrLess
  ) {
    if (filterMethod == "match") {
      filterFunctions.filterByMatch(filterType, targetValue);
    }
    if (filterMethod == "compare") {
      filterFunctions.filterByCompare(filterType, targetValue, greaterOrLess);
    }
  },
};

const buttonFunctions = {
  resetButtons: function (selector) {
    document.querySelectorAll(selector).forEach((btn) => {
      btn.style.color = "var(--accent-color)";
      btn.style.backgroundColor = "var(--button-background)";
    });
  },
  highlightButton: function (btnID) {
    document.getElementById(btnID).style.color = "var(--text-highlighted)";
    document.getElementById(btnID).style.backgroundColor =
      "var(--button-highlighted)";
  },
  activateFilter: function (
    btnID,
    filterType,
    targetValue,
    filterMethod,
    greaterOrLess
  ) {
    buttonFunctions.resetButtons(".filter-btn");
    buttonFunctions.highlightButton(btnID);
    cardFunctions.removeAllCards(".item-card");
    filterFunctions.displayFilteredItems(
      filterType,
      targetValue,
      filterMethod,
      greaterOrLess
    );
  },
  filterEventListener: function (
    btnID,
    filterType,
    targetValue,
    filterMethod,
    greaterOrLess
  ) {
    document.getElementById(btnID).addEventListener("click", function () {
      buttonFunctions.activateFilter(
        document.getElementById(btnID).id,
        filterType,
        targetValue,
        filterMethod,
        greaterOrLess
      );
    });
  },
  toggleTheme: function () {
    if (document.body.classList.contains("main-theme")) {
      document.body.classList.remove("main-theme");
      document.body.classList.add("alt-theme");
    } else {
      document.body.classList.remove("alt-theme");
      document.body.classList.add("main-theme");
    }
  },
};

const apiFunctions = {
  propretyNameConverter: function (string, conversionDirection) {
    let convertedString = Array.from(string);
    if (conversionDirection == "toTitle") {
      for (let i = 1; i++; ) {
        if (i >= convertedString.length) {
          break;
        }
        if (convertedString[i] == convertedString[i].toUpperCase()) {
          convertedString[i] = ` ${convertedString[i]}`;
        }
      }
      convertedString[0] = convertedString[0].toUpperCase();
    } else if (conversionDirection == "toProperty") {
      for (let i = 1; i++; ) {
        if (i >= convertedString.length) {
          break;
        }
        if (convertedString[i] == " ") {
          convertedString[i] = "";
        }
      }
      convertedString[0] = convertedString[0].toLowerCase();
    } else if (
      conversionDirection != "toProperty" &&
      conversionDirection != "toTitle"
    ) {
      console.log(
        `Error while executing the function propretyNameConverter: no conversionDirection specified`
      );
    }
    return convertedString.toString().replaceAll(",", "");
  },
  fetchAPI: async function (url) {
    try {
      const response = await fetch(url);
      if (response.status < 200 || response.status > 299) {
        console.log(response.status);
        throw Error(response.status);
      } else {
        const jsonData = await response.json();
        return jsonData;
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  },
  undefinedCatch: function (string) {
    if (string == undefined || string == "") {
      return "None";
    } else {
      return string;
    }
  },
  getUnnamedProperty: function (object, selectedProperty, targetProperty) {
    let values = "";
    let seperator = "";
    for (const key in object[selectedProperty]) {
      if (values == "") {
        seperator = "";
      } else {
        seperator = ", ";
      }
      values = `${values}${seperator}${object[selectedProperty][key][targetProperty]}`;
    }
    return values;
  },
};

export { cardFunctions, filterFunctions, buttonFunctions, apiFunctions };
