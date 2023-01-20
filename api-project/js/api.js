// API: https://restcountries.com/#api-endpoints-v2-code

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

const countryData = await apiFunctions.fetchAPI(
  "https://restcountries.com/v2/all"
);

export { countryData, apiFunctions };
