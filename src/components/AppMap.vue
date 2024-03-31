<script setup lang="ts">
import { onUpdated, onMounted, ref } from "vue";
import * as L from "leaflet";

import type { InfoCountry, latlngCountry } from "../types/type";

interface AboutCountry {
  capitalMarker: [number, number];
  infoCountries: InfoCountry[];
  index: number;
  isInput: Boolean;
}

const props = defineProps<AboutCountry>();

const emit = defineEmits<{
  (e: "getCoordsCountries", value: latlngCountry): Promise<void>;
}>();

const mapContainer = ref<any>(null);
let card: L.Map;
let marker: L.Marker;

function mapLayout() {
  // Создаем карту
  card = L.map(mapContainer.value).setView(
    [props.capitalMarker[0], props.capitalMarker[1]],
    7
  );

  // Добавляем плитку OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(card);

  // Добавляем маркер
  marker = L.marker(JSON.parse(JSON.stringify(props.capitalMarker)))
    .addTo(card)
    .bindPopup("Moscow, Russia");
  card.on("click", getCoords);
}

function getCoords(event: L.LeafletMouseEvent) {
  emit("getCoordsCountries", event.latlng);
}

onMounted(mapLayout);

onUpdated(() => {
  if (marker) {
    card.removeLayer(marker);
  }
  marker = L.marker(JSON.parse(JSON.stringify(props.capitalMarker)))
    .addTo(card)
    .bindPopup(
      `${props.infoCountries[props.index].capital[0]}, ${
        props.infoCountries[props.index].name.common
      }`
    );
  if (props.isInput) {
    card.setView([props.capitalMarker[0], props.capitalMarker[1]], 7);
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
@/types/type
