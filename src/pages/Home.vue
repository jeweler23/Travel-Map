<template>
  <div>
    <Logo />
    <Title />
    <Country
      :infoCountries="infoCountries"
      :index="indexCountry"
      :selectPlace="selectPlace"
    />
    <Map
      @showInfo="showInfo"
      @getCoordsCountries="getIdCountries"
      :capitalMarker="capitalCoords"
      :infoCountries="infoCountries"
      :index="indexCountry"
    />
  </div>
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
const selectPlace = ref(null);
const capitalCoords = ref([55.7558, 37.6176]);

const showInfo = (accept) => {
  show.value = accept.value;
};

function getCoordsCapital(countries, index) {
  return countries[index].capitalInfo.latlng;
}

async function getIdCountries(coord) {
  await countriesStore.getInfoCountry(coord.lat, coord.lng);
  selectPlace.value = countriesStore.country;
  const country = countriesStore.country;
  indexCountry.value = countriesStore.resultIdCountry(
    country._value,
    infoCountries
  );
  capitalCoords.value = getCoordsCapital(infoCountries, indexCountry.value);
}
</script>

<style scoped></style>
