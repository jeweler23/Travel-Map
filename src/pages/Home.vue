<template>
  <div>
    <Head :title="'Travel Map'" :title-class="true" />
    <Head
      :title="'Unforgettable trips To the most amazing Places in the world'"
      :title-class="false"
    />
    <Search @searchCountry="searchCountry" />
    <Country
      :infoCountries="infoCountries"
      :index="indexCountry"
      :infoPlace="infoPlace"
   
    >

    </Country>
    <Map
      @getCoordsCountries="getIdCountries"
      :capitalMarker="capitalCoords"
      :infoCountries="infoCountries"
      :index="indexCountry"
      :isInput="isInput"
    />
  </div>
</template>

<script setup lang="ts">
import Head from "@/components/AppHead.vue";
import Map from "@/components/AppMap.vue";
import Country from "@/components/AppCountry.vue";
import Search from "@/components/AppSearch.vue";

import type {
  latlngCountry,
  infoCity,
  infoPlace,
  InfoCountry,
} from "../types/type.ts";

import { useCountriesStore } from "../store/CountriesStore";
import { infoCountries } from "../assets/consts/index";
import { onMounted, reactive, ref } from "vue";


// //toogle teme
// import { useTheme } from "vuetify";
// const theme = useTheme();

// function toggleTheme() {
//   theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
// }
// //

const countriesStore = useCountriesStore();

const indexCountry = ref(203);
const infoPlace = reactive<infoPlace>({
  temperature: 0,
  timezone: 10800,
  region: "Moscow",
  name: "Moscow",
});
const capitalCoords = ref<[number, number]>([55.7558, 37.6176]);
const isInput = ref(false);

async function searchCountry(city: string) {
  const infoCity = await countriesStore.getInfoAboutCity(city);

  if (infoCity) {
    await getSearchCountry(infoCity);
  }
}

async function getSearchCountry(city: infoCity) {
  try {
    isInput.value = true;
    capitalCoords.value = [city.lat, city.lon];

    //получаем инормацию о месте
    await countriesStore.getInfoCountry(city.lat, city.lon);

    const dayliForecast = await countriesStore.getDayliForecast(
      city.lat,
      city.lon
    );
    if (dayliForecast) {
      fillInfoPlace(dayliForecast);
    }
  } catch (e) {
    console.log(e);
  }
}

async function getIdCountries(coord: latlngCountry) {
  isInput.value = false;
  //получаем инормацию о месте
  await countriesStore.getInfoCountry(coord.lat, coord.lng);

  //получаем информацию о погоде и временной зоне
  const dayliForecast = await countriesStore.getDayliForecast(
    coord.lat,
    coord.lng
  );

  if (dayliForecast) {
    fillInfoPlace(dayliForecast);
  }

  capitalCoords.value = getCoordsCapital(infoCountries, indexCountry.value);
}

const fillInfoPlace = (dayliForecast: [number, number]) => {
  if (dayliForecast) {
    [infoPlace.temperature, infoPlace.timezone] = dayliForecast;
  }
  const country = countriesStore.country;
  if (country) {
    //получаем информацию о имени места
    infoPlace.name = country.name;

    //получаем инорфмацию о области выбранного места
    infoPlace.region = country.state;
  }

  indexCountry.value = country
    ? countriesStore.getIdCountry(country, infoCountries)
    : 203;
};

function getCoordsCapital(countries: InfoCountry[], index: number) {
  return countries[index].capitalInfo.latlng;
}

onMounted(async () => {
  const dayliForecast = await countriesStore.getDayliForecast(
    capitalCoords.value[0],
    capitalCoords.value[1]
  );
  if (dayliForecast)
    [infoPlace.temperature, infoPlace.timezone] = dayliForecast;
});
</script>

<style scoped>
.btn-close {
  padding: 5px;
  margin: 10px;
}
</style>
