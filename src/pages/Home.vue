<template>
  <div>
    <Head :title="'Travel Map'" :title-class="true" />
    <Head
      :title="'Unforgettable trips To the most amazing Places in the world'"
    />
    <Search @searchCountry="searchCountry" />
    <Country
      :infoCountries="infoCountries"
      :index="indexCountry"
      :infoPlace="infoPlace"
    />
    <Map
      @getCoordsCountries="getIdCountries"
      :capitalMarker="capitalCoords"
      :infoCountries="infoCountries"
      :index="indexCountry"
      :isInput="isInput"
    />
  </div>
</template>

<script setup>
import Head from "@/components/AppHead.vue";
import Map from "@/components/AppMap.vue";
import Country from "@/components/AppCountry.vue";
import Search from "@/components/AppSearch.vue";

import { useCountriesStore } from "../store/CountriesStore";
import { infoCountries } from "../assets/consts/index.ts";
import { onMounted, reactive, ref } from "vue";

const countriesStore = useCountriesStore();

const indexCountry = ref(203);
const infoPlace = reactive({
  region: "Moscow",
  name: "Moscow",
  temperature: null,
  timezone: 10800,
});
const capitalCoords = ref([55.7558, 37.6176]);
const isInput = ref(false);

async function searchCountry(city) {
  const [info] = await countriesStore.searchCountryByCity(city);
  await getSearchCountry(info);
}

function getCoordsCapital(countries, index) {
  return countries[index].capitalInfo.latlng;
}

async function getSearchCountry(coord) {
  isInput.value = true;

  capitalCoords.value = [coord.lat, coord.lon];
  console.log(capitalCoords.value);

  //получаем инормацию о месте
  await countriesStore.getInfoCountry(coord.lat, coord.lon);

  //получаем информацию о погоде и временной зоне
  [infoPlace.temperature, infoPlace.timezone] =
    await countriesStore.getDayliForecast(coord.lat, coord.lon);

  //получаем информацию о имени места
  infoPlace.name = countriesStore.country._value[0].name;

  //получаем инорфмацию о области выбранного места
  infoPlace.region = countriesStore.country._value[0].state;

  const country = countriesStore.country;

  indexCountry.value = countriesStore.getIdCountry(
    country._value,
    infoCountries
  );
}

async function getIdCountries(coord) {
  isInput.value = false;
  //получаем инормацию о месте
  await countriesStore.getInfoCountry(coord.lat, coord.lng);

  //получаем информацию о погоде и временной зоне
  [infoPlace.temperature, infoPlace.timezone] =
    //получаем информацию о имени места
    infoPlace.name = countriesStore.country[0].name;

  //получаем инорфмацию о области выбранного места
  infoPlace.region = countriesStore.country[0].state;
  const country = countriesStore.country;

  //получаем индекс страны
  indexCountry.value = countriesStore.getIdCountry(country, infoCountries);

  capitalCoords.value = getCoordsCapital(infoCountries, indexCountry.value);
}

onMounted(async () => {
  [infoPlace.temperature, infoPlace.timezone] =
    await countriesStore.getDayliForecast(
      capitalCoords.value[0],
      capitalCoords.value[1]
    );
});
</script>

<style scoped></style>
