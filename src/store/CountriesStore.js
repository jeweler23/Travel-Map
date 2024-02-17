import { defineStore } from "pinia";
import { ref } from "vue";
import { API_KEY } from "@/assets/consts/consts";
// import { infoCountries } from "../assets/consts";

export const useCountriesStore =
  ("countiesStore",
  () => {
    const country = ref(null);

    // получаем страну по координатам
    const getInfoCountry = async (lat, lng) => {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=${3}&appid=${API_KEY}`
      );
      country.value = await response.json();
    };

    // получаем инфомарцию о стране
    const resultIdCountry = (country, infoCountry) => {
      let i = 0;
      if (
        !JSON.parse(JSON.stringify(country)) ||
        JSON.parse(JSON.stringify(country)) == null
      ) {
        return 203;
      }
      infoCountry.forEach((element, index) => {
        if (
          element.altSpellings[0] !==
          JSON.parse(JSON.stringify(country))[0].country
        ) {
          return;
        }
        i = index;
      });
      return i;
    };

    return { country, getInfoCountry, resultIdCountry };
  });
