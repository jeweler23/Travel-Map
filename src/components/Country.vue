<script setup>
import { onBeforeUpdate, ref, watch } from "vue";

const props = defineProps({
  infoCountries: {
    type: [Object, null],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  selectPlace: Object,
});

const aa = ref(props.selectPlace);

watch(
  aa,
  () => {
    console.log(aa.value);
  },
  { deep: true }
);
// console.log(props.country[props.index]);
</script>
<template>
  <div class="card container" @click="$emit('showInfo', showInfoCountry)">
    <div class="country-card">
      <div class="country-head">
        <div
          class="flag"
          :style="`background-image: url(${infoCountries[index].flags.png})`"
        ></div>
        <h2 class="country-name" style="margin-left: 20px; font-size: 32px">
          {{ infoCountries[index].name.common }}
        </h2>
      </div>
      <div class="country-description">
        <h3>Capital - {{ infoCountries[index].capital[0] }}</h3>

        <p> State - {{ aa }}</p>
        <span>Name - {{ aa }}</span>
      </div>
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
  width: 30%;
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
</style>
