<template>
  <div>
    <Logo />
    <Title />
    <Country
      :infoCountries="infoCountries"
      :index="indexCountry"
      :region="region"
      :namePlace="namePlace"
      :tempInPlace="tempInPlace"
      :timezonePlace="timezonePlace"
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
import { onBeforeUpdate, onMounted, ref, watch } from "vue";

const countriesStore = useCountriesStore();

const show = ref(false);
const indexCountry = ref(203);
const region = ref("Moscow");
const namePlace = ref("Moscow");
const capitalCoords = ref([55.7558, 37.6176]);
const tempInPlace = ref(null);
const timezonePlace = ref(10800);


const showInfo = (accept) => {
  show.value = accept.value;
};

function getCoordsCapital(countries, index) {
  return countries[index].capitalInfo.latlng;
}

async function getIdCountries(coord) {
  //получаем инормацию о месте
  await countriesStore.getInfoCountry(coord.lat, coord.lng);
  //получаем информацию о погоде и временной зоне
  [tempInPlace.value, timezonePlace.value] =
    await countriesStore.getDayliForecast(coord.lat, coord.lng);
  //получаем информацию о имени места
  namePlace.value = countriesStore.country._value[0].name;
  //получаем инорфмацию о области выбранного места
  region.value = countriesStore.country._value[0].state;
  const country = countriesStore.country;
  //получаем индекс страны
  indexCountry.value = countriesStore.resultIdCountry(
    country._value,
    infoCountries
  );

  capitalCoords.value = getCoordsCapital(infoCountries, indexCountry.value);
}



onMounted(async () => {
  [tempInPlace.value, timezonePlace.value] =
    await countriesStore.getDayliForecast(
      capitalCoords.value[0],
      capitalCoords.value[1]
    );
});
</script>

<style scoped></style>
