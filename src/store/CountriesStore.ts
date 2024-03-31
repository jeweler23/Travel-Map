import { defineStore } from "pinia";
import { ref } from "vue";
import { API_KEY } from "../assets/consts/consts.js";

import type { infoCity, InfoCountry, weatherPlace } from "../types/type";

export const useCountriesStore = defineStore("countiesStore", () => {
  const country = ref<infoCity>();

  // получаем страну по координатам
  const getInfoCountry = async (lat: Number, lng: Number) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=${3}&appid=${API_KEY}`
      );
      [country.value] = await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  // получаем инфомарцию о стране
  const getIdCountry = (
    country: infoCity,
    infoCountry: Array<InfoCountry>
  ): number => {
    let i = 0;
    if (
      !JSON.parse(JSON.stringify(country)) ||
      JSON.parse(JSON.stringify(country)) == null
    ) {
      return 203;
    }
    infoCountry.forEach((element: InfoCountry, index) => {
      if (
        Array.isArray(element.altSpellings) &&
        element.altSpellings[0] !== JSON.parse(JSON.stringify(country)).country
      ) {
        return;
      }
      i = index;
    });
    return i;
  };

  const getDayliForecast = async (
    lat: number,
    lng: number
  ): Promise<[number, number] | undefined> => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&exclude={daily}&appid=${API_KEY}`
      );
      const data: weatherPlace = await response.json();

      return [Math.round(data.main.temp - 273), data.timezone];
    } catch (e) {
      console.log(e);
    }
  };

  const getInfoAboutCity = async (
    city: string
  ): Promise<infoCity | undefined> => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
      );
      const [data] = await response.json();

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
    getInfoAboutCity,
  };
});
