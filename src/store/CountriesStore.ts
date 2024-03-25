import { defineStore } from "pinia";
import { ref } from "vue";
import { API_KEY } from "../assets/consts/consts.js";

// type test = {
//   altSpellings: string[];
// };

interface Country {
  [key: string]: number | string | Object | boolean | string[];
}

export const useCountriesStore =
  ("countiesStore",
  () => {
    const country = ref(null);

    // получаем страну по координатам
    const getInfoCountry = async (lat: Number, lng: Number) => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=${3}&appid=${API_KEY}`
        );
        country.value = await response.json();
      } catch (e) {
        console.log(e);
      }
    };

    // получаем инфомарцию о стране
    const getIdCountry = (
      country: Object,
      infoCountry: Array<Country>
    ): number => {
      let i = 0;
      if (
        !JSON.parse(JSON.stringify(country)) ||
        JSON.parse(JSON.stringify(country)) == null
      ) {
        return 203;
      }
      infoCountry.forEach((element: Country, index) => {
        if (
          Array.isArray(element.altSpellings) &&
          element.altSpellings[0] !==
            JSON.parse(JSON.stringify(country))[0].country
        ) {
          return;
        }
        i = index;
      });
      return i;
    };

    const getDayliForecast = async (lat: number, lng: number) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&exclude={daily}&appid=${API_KEY}`
        );
        const data: Country = await response.json();
        console.log(data);

        return [Math.round(Number(data.main.temp) - 273), data.timezone];
      } catch (e) {
        console.log(e);
      }
    };

    const searchCountryByCity = async (city: string) => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
        );
        const data = await response.json();

        return data;
      } catch (e) {
        console.log(e);
      }
    };

    return {
      country,
      getInfoCountry,
      getIdCountry,
      getDayliForecast,
      searchCountryByCity,
    };
  });
