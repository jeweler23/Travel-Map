<template>
  <div class="card container" @click="$emit('showInfo', showInfoCountry)">
    <v-card :theme="props.theme" class="country-card" elevation="16">
      <slot></slot>
      <div >
        <Transition name="country" mode="out-in">
          <div :key="props.index">
            <div class="country-head">
              <div
                class="flag"
                :style="`background-image: url(${infoCountries[index].flags.png})`"
                style="border: 1px solid black;"
              ></div>

              <h2
                class="country-name"
                style="margin-left: 20px; font-size: 32px"
              >
                {{ infoCountries[index].name.common }}
              </h2>
            </div>

            <div class="country-description">
              <h2 class="info-about-place">
                <img
                  src="../assets/image/architecture-and-city.png"
                  alt=""
                  style="width: 40px"
                />
                Capital - {{ infoCountries[index].capital[0] }}
              </h2>

              <h3
                v-if="infoPlace"
                style="margin-top: 20px"
                class="info-about-place"
              >
                <v-icon icon="mdi-city-variant-outline" size="x-large" />
                State - {{ infoPlace.region }}
              </h3>
              <p v-if="infoPlace" style="" class="info-about-place">
                <v-icon icon="mdi-map-marker" size="x-large" />
                Place - {{ infoPlace.name }}
              </p>
              <p v-if="infoPlace" style="" class="info-about-place">
                <img
                  src="../assets/image/weather-forecast.png"
                  alt=""
                  style="width: 40px"
                />
                Temperature - {{ infoPlace.temperature }} &deg;C
              </p>
              <span class="info-about-place">
                <v-icon icon="mdi-clock-outline" size="x-large" />
                Time - {{ nowHours }}:{{ nowMinutes }}</span
              >
            </div>
          </div>
        </Transition>
      </div>
    </v-card>
  </div>
</template>

<script setup>

import { ref } from "vue";

const props = defineProps({
  infoCountries: {
    type: [Object, null],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  infoPlace: {
    type: Object,
    required: true,
  },
  theme: {
    type: Object,
  },
});

const nowDate = ref(new Date());
const nowHours = ref(null);
const nowMinutes = ref(null);

setInterval(() => {
  nowHours.value =
    props.infoPlace.timezone / 3600 + nowDate.value.getUTCHours();
  nowMinutes.value = nowDate.value.getMinutes();
  nowDate.value = new Date();
}, 3600);
</script>

<style scoped>
.card {
  position: absolute;
  right: 100px;
  top: 50%;
  z-index: 1000;
  max-width: 350px;
  border-radius: 8px;
  text-align: center;
  transform: translateY(-50%);
  width: 40%;
}
.country-head {
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.description {
  font-size: 14px;
}

.flag {
  min-width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.country-card {
  margin-bottom: 10px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  max-width: 350px;
  margin-bottom: 15px;
}

.image-grid img {
  width: 100%;
  height: 100%;
  /* max-width: 116.5px; */
  max-height: 100%;
}

.link-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 15px;
}

.link-card a {
  margin-left: 10px;
  text-align: start;
}

.info-about-place {
  margin-top: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.country-enter-active,
.country-leave-active {
  transition: all 0.5s ease;
}
.country-enter-from,
.country-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
