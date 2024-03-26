<script setup>
import { onUpdated, onMounted, ref } from "vue";
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
  isInput: Boolean,
});

const emit = defineEmits(["getCoordsCountries", "getDayliForecast"]);

const mapContainer = ref(null);
let map, marker;

function mapLayout() {
  // Создаем карту
  map = L.map(mapContainer.value).setView(
    Object.values(props.capitalMarker),
    7
  );

  // Добавляем плитку OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Добавляем маркер
  marker = L.marker(JSON.parse(JSON.stringify(props.capitalMarker)))
    .addTo(map)
    .bindPopup("Moscow, Russia");
  map.on("click", getCoords);
}

function getCoords(e) {
  emit("getCoordsCountries", e.latlng);
}

onMounted(mapLayout);

onUpdated(() => {
  if (marker) {
    map.removeLayer(marker);
  }
  marker = L.marker(JSON.parse(JSON.stringify(props.capitalMarker)))
    .addTo(map)
    .bindPopup(
      `${props.infoCountries[props.index].capital[0]}, ${
        props.infoCountries[props.index].name.common
      }`
    );
  if (props.isInput) {
    map.setView([props.capitalMarker[0], props.capitalMarker[1]], 7);
  }
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
