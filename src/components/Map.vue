<script setup>
import { onUpdated, onBeforeUpdate, onMounted, ref } from "vue";
import L from "leaflet";

const props = defineProps({
  capitalMarker: {
    type: [Array, null],
    required: true,
  },
});
console.log(JSON.parse(JSON.stringify(props.capitalMarker)));

const emit = defineEmits(["getCoordsCountries", "showInfo"]);

const mapContainer = ref(null);
const show = ref(false);
let map;

function mapLayout() {
  // Создаем карту
  map = L.map(mapContainer.value).setView([55.7558, 37.6176], 7);

  // Добавляем плитку OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Добавляем маркер
  L.marker([55.7558, 37.6176]).addTo(map).bindPopup("Moscow, Russia");
  map.on("click", showToggle);
  map.on("click", latlngC);
  map.on("click", click);
}

function showToggle() {
  show.value = !show.value;
  emit("showInfo", show);
}

function latlngC(e) {
  emit("getCoordsCountries", e.latlng);
}

function click() {
  // const marker = new L.Marker([55.7558, 30]);
  map.addLayer(marker);
  // marker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
}

onMounted(() => {
  mapLayout();
});

onBeforeUpdate(() => {
  // console.log(props.capitalMarker);
  // L.marker(JSON.parse(JSON.stringify(props.capitalMarker))).remove(map)
});
onUpdated(() => {
  console.log(props.capitalMarker);
  L.marker(JSON.parse(JSON.stringify(props.capitalMarker))).addTo(map).bindPopup("Moscow, Russia");
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
