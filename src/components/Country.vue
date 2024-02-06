<script setup>
import { ref } from "vue";

const props = defineProps({
  country: {
    type: [Object, null],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

console.log(props.country[props.index]);

const imageUrl = props.country[props.index].flags.png; // url flag
</script>
<template>
  <div class="card container" @click="$emit('showInfo', showInfoCountry)">
    <div class="country-card">
      <div class="country-head">
        <div
          class="flag"
          :style="`background-image: url(${country[index].flags.png})`"
        >
          <!-- <img src= "`${imageUrl}`" alt="Russia Flag" /> -->
        </div>
        <h3 class="country-name" style="margin-left: 20px; font-size: 32px">
          {{ country[index].name.common }}
        </h3>
      </div>
      <div class="description">
        Крупнейшее государство в мире, её территория в международно признанных
        границах составляет 17 098 246 км²
      </div>
    </div>

    <div class="image-grid">
      <img src="../assets/image/teriberka.jpg" alt="" />
      <img src="../assets/image/moscow-city.jpg" alt="" />
      <img src="../assets/image/Bolgar.jpg" alt="" />
      <img src="../assets/image/forest.jpg" alt="" />
      <img src="../assets/image/baikal.jpg" alt="" />
      <img src="../assets/image/monastery-slov.jpg" alt="" />
    </div>

    <div class="link-card">
      <h3>Интересные заведения</h3>
      <a href="https://casadifamiglia.ru/" class="link"
        >Casa di famiglia, Москва</a
      >
      <a href="https://st-petersburg.danslenoir.com/" class="link"
        >Dans Le Noir, Санкт-Петербург</a
      >
      <a href="https://example.com/link3" class="link"
        >Utka v kotlete, Казань</a
      >
    </div>
  </div>
</template>
<style scoped>
.card {
  position: absolute;
  right: 100px;
  top: 50%;
  z-index: 1000;
  background-color: aliceblue;
  max-width: 350px;
  border-radius: 8px;
  text-align: center;
  transform: translateY(-50%);
}
.country-head {
  display: flex;
  flex-direction: row;
  justify-content: start;
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
  /* background-image: url("`${country[203].flags.png}`") */
}
/* .flag img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

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
</style>
