<template>
  <Logo />
  <Title />
  <Country :country="infoCountries" :index="indexCountry" />
  <Map
    @showInfo="showInfo"
    @getCoordsCountries="getIdCountries"
    :capitalMarker="capitalCoords"
    :country="infoCountries"
    :index="indexCountry"
  />
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Map from "@/components/Map.vue";
import Title from "@/components/Title.vue";
import Country from "@/components/Country.vue";
import { useCountriesStore } from "../store/CountriesStore";
import { infoCountries } from "@/assets/consts/index.js";
import { ref } from "vue";

const countriesStore = useCountriesStore();

const show = ref(false);
const indexCountry = ref(203);
const capitalCoords = ref([55.7558, 37.6176]);

const showInfo = (accept) => {
  show.value = accept.value;
};

function getCoordsCapital(countries, index) {
  return countries[index].capitalInfo.latlng;
}

async function getIdCountries(coord) {
  await countriesStore.getInfoCountry(coord.lat, coord.lng);
  const country = countriesStore.country;
  indexCountry.value = countriesStore.resultIdCountry(
    country._value,
    infoCountries
  );
  capitalCoords.value = getCoordsCapital(infoCountries, indexCountry.value);
}
</script>

<style scoped></style>
