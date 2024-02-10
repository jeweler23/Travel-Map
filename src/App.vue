<template>
  <Logo />
  <Title />
  <Country :country="infoCountries" :index="indexCountry" />
  <Map @showInfo="showInfo" @getCoordsCountries="getIdCountries" />
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Map from "@/components/Map.vue";
import Title from "@/components/Title.vue";
import Country from "@/components/Country.vue";
import { infoCountries } from "@/assets/consts/index.js";
import { API_KEY } from "@/assets/consts/consts";
import { ref } from "vue";

const show = ref(false);
//
const indexCountry = ref(203);


const showInfo = (accept) => {
  show.value = accept.value;
};

//
async function getNameCountry(lat, lng) {
  try {
    //отпраляем запрос на основе полученных координат и записываем в перемененую
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=${3}&appid=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function resultIdCountry(country, infoCountry) {
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
  return i;
}

async function getIdCountries(coord) {
  const country = await getNameCountry(coord.lat, coord.lng);
  indexCountry.value = resultIdCountry(country, infoCountries);
}
</script>

<style scoped></style>
