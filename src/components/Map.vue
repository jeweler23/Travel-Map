<script setup>
import { onUpdated, onBeforeUpdate, onMounted, ref } from "vue";
import L from "leaflet";

const props = defineProps({
  capitalMarker: {
    type: [Array, null],
    required: true,
  },
  infoCountries: {
    type: [Object, null],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});


const emit = defineEmits(["getCoordsCountries", "showInfo"]);

const mapContainer = ref(null);
const show = ref(false);
let map, marker;

function mapLayout() {
  // Создаем карту
  map = L.map(mapContainer.value).setView([55.7558, 37.6176], 7);

  // Добавляем плитку OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Добавляем маркер
  marker = L.marker(JSON.parse(JSON.stringify(props.capitalMarker)))
    .addTo(map)
    .bindPopup("Moscow, Russia");
  map.on("click", showToggle);
  map.on("click", latlngC);
}

function showToggle() {
  show.value = !show.value;
  emit("showInfo", show);
}

function latlngC(e) {
  emit("getCoordsCountries", e.latlng);
}

onMounted(mapLayout);


onUpdated(() => {
  if (marker) {
    map.removeLayer(marker);
  }
  marker = L.marker(JSON.parse(JSON.stringify(props.capitalMarker)))
    .addTo(map)
    .bindPopup(`${props.infoCountries[props.index].capital[0]}, ${props.infoCountries[props.index].name.common}`);
});
</script>

<template>
  <div ref="mapContainer" class="map"></div>
</template>

<style scoped>
.map {
  display: block;
  width: 100%;
  height: 100vh;
}
</style>
