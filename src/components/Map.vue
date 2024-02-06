<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";

const emit = defineEmits(["latlngCountry","showInfo"]);

const mapContainer = ref(null);
const show = ref(false);

function mapLayout() {
  // Создаем карту
  const map = L.map(mapContainer.value).setView([55.7558, 37.6176], 7);

  // Добавляем плитку OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Добавляем маркер
  L.marker([55.7558, 37.6176]).addTo(map).bindPopup("Moscow, Russia");
  map.on("click", showToggle);
  map.on("click", latlngC);
}

function showToggle() {
  show.value = !show.value
  emit('showInfo',show)
}

function latlngC(e) {
  emit("latlngCountry", e.latlng);
}

onMounted(() => {
  mapLayout();
});
</script>

<template>
  <!-- <div ref="mapContainer" class="map" @click="showToggle" ></div> -->
  <div ref="mapContainer" class="map"></div>
</template>

<style scoped>
.map {
  display: block;
  width: 100%;
  height: 100vh;
}
</style>
