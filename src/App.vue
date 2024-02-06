<template>
  <Logo />
  <Title />
  <!-- <Country v-if="show" :country="infoCountry" :index="indexCountry"/> -->
  <Country :country="infoCountry" :index="indexCountry" />
  <Map @showInfo="showInfo" @latlngCountry="latlngCountry" />
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Map from "@/components/Map.vue";
import Title from "@/components/Title.vue";
import Country from "@/components/Country.vue";
import { infoCountry } from "./assets/consts/index.js";
import { ref } from "vue";
import { API_KEY } from "./assets/consts/consts";

const show = ref(false);
// let pressCountry = 0;
let country = ref(null);
let indexCountry = ref(203);
let latCountry = ref(55);
let lngCountry = ref(35);
const showInfo = (accept) => {
  show.value = accept.value;
};

//
function getCountry(lat,lng) {
  //отпраляем запрос на основе полученных координат и записываем в перемененую
  fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=${3}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    // .then((data) => (country.value = data));
    .then((data) => (country.value = data));
  console.log(JSON.parse(JSON.stringify(country.value)));
}

function resultIndexCountry(country, infoCountry) {
  console.log(country, infoCountry);
  let i = 0;
  if (!country || country == null) {
    return 203;
  }
  infoCountry.forEach((element, index) => {
    if (element.altSpellings[0] !== country[0].country) {
      return;
    }
    i = index;
  });
  console.log(i);
  return i;
}

function latlngCountry (coord){
  getCountry(coord.lat,coord.lng)
//   console.log(coord.lat, coord.lng);
  indexCountry.value = resultIndexCountry(
    JSON.parse(JSON.stringify(country.value)),
    infoCountry
  );

  console.log(indexCountry.value);
};

// onMounted(latlngCountry)
</script>

<style scoped></style>
