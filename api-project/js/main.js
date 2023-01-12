// API: https://restcountries.com/#api-endpoints-v2-code
// Image Color: https://www.npmjs.com/package/fast-average-color

import "../css/style.css";

//import { getAverageColor } from "fast-average-color-node";

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

function removeAll(selector) {
  document.querySelectorAll(selector).forEach((item) => item.remove());
}

function addExpandedCard(
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
          class="card-img"
          src="${flagImg}"
          alt="${demonym} Flag"
        />
        <h2 class="card-header">${country}</h2>
        <div class="expanded-info">
          <p>Population: ${population}</p>
          <p>Area: ${area} km<sup>2</sup></p>
          <p>Time Zones: ${timeZones}</p>
          <p>Capital: ${capital}</p>
          <p>Curriencies: ${currencies}</p>
          <p>Languages: ${languages}</p>
        </div>
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
  removeAll(".expanded-card");
  data.forEach((obj) => {
    addCard(obj.name, obj.flag, obj.demonym);
  });
}

function displayExpandedCard(cardID, data) {
  const country = data.filter((country) => country.name == cardID);
  removeAll(".card");
  addExpandedCard(
    country[0].name,
    country[0].flag,
    country[0].demonym,
    country[0].population,
    country[0].area,
    country[0].timezones,
    country[0].capital,
    country[0].currencies,
    country[0].languages
  );
}

const countryData = await fetchAPI("https://restcountries.com/v2/all");
displayAllCards(countryData);

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    displayExpandedCard(card.id, countryData);
  });
});

/*const aruba = [
  {
    name: {
      common: "Aruba",
      official: "Aruba",
      nativeName: {
        nld: {
          official: "Aruba",
          common: "Aruba",
        },
        pap: {
          official: "Aruba",
          common: "Aruba",
        },
      },
    },
    tld: [".aw"],
    cca2: "AW",
    ccn3: "533",
    cca3: "ABW",
    cioc: "ARU",
    independent: false,
    status: "officially-assigned",
    unMember: false,
    currencies: {
      AWG: {
        name: "Aruban florin",
        symbol: "ƒ",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["97"],
    },
    capital: ["Oranjestad"],
    altSpellings: ["AW"],
    region: "Americas",
    subregion: "Caribbean",
    languages: {
      nld: "Dutch",
      pap: "Papiamento",
    },
    translations: {
      ara: {
        official: "أروبا",
        common: "أروبا",
      },
      bre: {
        official: "Aruba",
        common: "Aruba",
      },
      ces: {
        official: "Aruba",
        common: "Aruba",
      },
      cym: {
        official: "Aruba",
        common: "Aruba",
      },
      deu: {
        official: "Aruba",
        common: "Aruba",
      },
      est: {
        official: "Aruba",
        common: "Aruba",
      },
      fin: {
        official: "Aruba",
        common: "Aruba",
      },
      fra: {
        official: "Aruba",
        common: "Aruba",
      },
      hrv: {
        official: "Aruba",
        common: "Aruba",
      },
      hun: {
        official: "Aruba",
        common: "Aruba",
      },
      ita: {
        official: "Aruba",
        common: "Aruba",
      },
      jpn: {
        official: "アルバ",
        common: "アルバ",
      },
      kor: {
        official: "아루바",
        common: "아루바",
      },
      nld: {
        official: "Aruba",
        common: "Aruba",
      },
      per: {
        official: "آروبا",
        common: "آروبا",
      },
      pol: {
        official: "Aruba",
        common: "Aruba",
      },
      por: {
        official: "Aruba",
        common: "Aruba",
      },
      rus: {
        official: "Аруба",
        common: "Аруба",
      },
      slk: {
        official: "Aruba",
        common: "Aruba",
      },
      spa: {
        official: "Aruba",
        common: "Aruba",
      },
      swe: {
        official: "Aruba",
        common: "Aruba",
      },
      tur: {
        official: "Aruba",
        common: "Aruba",
      },
      urd: {
        official: "اروبا",
        common: "اروبا",
      },
      zho: {
        official: "阿鲁巴",
        common: "阿鲁巴",
      },
    },
    latlng: [12.5, -69.96666666],
    landlocked: false,
    area: 180,
    demonyms: {
      eng: {
        f: "Aruban",
        m: "Aruban",
      },
      fra: {
        f: "Arubaise",
        m: "Arubais",
      },
    },
    flag: "🇦🇼",
    maps: {
      googleMaps: "https://goo.gl/maps/8hopbQqifHAgyZyg8",
      openStreetMaps: "https://www.openstreetmap.org/relation/1231749",
    },
    population: 106766,
    fifa: "ARU",
    car: {
      side: "right",
    },
    timezones: ["UTC-04:00"],
    continents: ["North America"],
    flags: {
      png: "https://flagcdn.com/w320/aw.png",
      svg: "https://flagcdn.com/aw.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/aw.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/aw.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [12.52, -70.03],
    },
  },
];
}*/
