<template>
  <div>
    <Head :title="'Travel Map'" :title-class="true" />
    <Head
      :title="'Unforgettable trips To the most amazing Places in the world'"
      :title-class="false"
    />
    <Search @searchCountry="searchCountry" />
    <AsyncComp
      :infoCountries="infoCountries"
      :index="indexCountry"
      :infoPlace="infoPlace"
      v-if="show"
    >
      <v-btn
        variant="tonal"
        class="btn-close"
        style="float: right"
        @click="show = false"
      >
        X
      </v-btn>
    </AsyncComp>
    <Map
      @click="show = true"
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
// import Country from "@/components/AppCountry.vue";
import Search from "@/components/AppSearch.vue";

import type {
  latlngCountry,
  cityInfo,
  infoPlace,
  InfoCountry,
} from "../types/type.ts";

import { useCountriesStore } from "../store/CountriesStore";
import { infoCountries } from "../assets/consts/index";
import {
  onMounted,
  reactive,
  ref,
  defineAsyncComponent,
  shallowRef,
} from "vue";

const show = shallowRef(false);

const AsyncComp = defineAsyncComponent(
  () => import("@/components/AppCountry.vue")
);

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
  const info = await countriesStore.searchCountryByCity(city);
  if (info) {
    await getSearchCountry(info);
  }
}

async function getSearchCountry(city: cityInfo) {
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
      [infoPlace.temperature, infoPlace.timezone] = dayliForecast;
    }

    //получаем информацию о погоде и временной зоне (почему-то)
    // [infoPlace.temperature, infoPlace.timezone] =
    //   await countriesStore.getDayliForecast(city.lat, city.lon);

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
  } catch (e) {
    console.log(e);
  }
}

const fillInfoPlace = async () => {};

async function getIdCountries(coord: latlngCountry) {
  isInput.value = false;
  //получаем инормацию о месте
  await countriesStore.getInfoCountry(coord.lat, coord.lng);

  const country = countriesStore.country;

  if (country) {
    //получаем информацию о имени места
    infoPlace.name = country.name;

    //получаем инорфмацию о области выбранного места
    infoPlace.region = country.state;
  }

  //получаем информацию о погоде и временной зоне
  const dayliForecast = await countriesStore.getDayliForecast(
    coord.lat,
    coord.lng
  );

  if (dayliForecast) {
    [infoPlace.temperature, infoPlace.timezone] = dayliForecast;
  }

  //получаем индекс страны
  indexCountry.value = country
    ? countriesStore.getIdCountry(country, infoCountries)
    : 203;

  capitalCoords.value = getCoordsCapital(infoCountries, indexCountry.value);
}

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
