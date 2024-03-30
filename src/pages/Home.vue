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
  region: "Moscow",
  name: "Moscow",
  temperature: 0,
  timezone: 10800,
});
const capitalCoords = ref<[number, number]>([55.7558, 37.6176]);
const isInput = ref(false);

async function searchCountry(city: string) {
  const info = await countriesStore.searchCountryByCity(city);

  await getSearchCountry(info);
}

async function getSearchCountry(city: cityInfo | undefined) {
  try {
    console.log(city);

    console.log(city?.country);

    if (city) {
      isInput.value = true;
      capitalCoords.value = [city.lat, city.lon];

      //получаем инормацию о месте
      await countriesStore.getInfoCountry(city.lat, city.lon);

      //получаем информацию о погоде и временной зоне
      [infoPlace.temperature, infoPlace.timezone] =
        await countriesStore.getDayliForecast(city.lat, city.lon);

      //получаем информацию о имени места
      infoPlace.name = (countriesStore.country as cityInfo[])[0].name;

      //получаем инорфмацию о области выбранного места
      infoPlace.region = (countriesStore.country as cityInfo[])[0].state;

      const country = countriesStore.country;

      indexCountry.value = country
        ? countriesStore.getIdCountry(country, infoCountries)
        : 203;
    }
  } catch (e) {
    console.log(e);
  }
}

const  fillInfoPlace = async ()=>{

}

async function getIdCountries(coord: latlngCountry) {
  isInput.value = false;
  //получаем инормацию о месте
  await countriesStore.getInfoCountry(coord.lat, coord.lng);

  const country = countriesStore.country;
  //получаем информацию о погоде и временной зоне
  [infoPlace.temperature, infoPlace.timezone] =
    await countriesStore.getDayliForecast(coord.lat, coord.lng);
  //получаем информацию о имени места
  infoPlace.name = (country as cityInfo[])[0].name;

  //получаем инорфмацию о области выбранного места
  infoPlace.region = (country as cityInfo[])[0].state;

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
  [infoPlace.temperature, infoPlace.timezone] =
    await countriesStore.getDayliForecast(
      capitalCoords.value[0],
      capitalCoords.value[1]
    );
});
</script>

<style scoped>
.btn-close {
  padding: 5px;
  margin: 10px;
}
</style>
