<script setup>
import { ref } from "vue";
const emit = defineEmits(["showCountry"]);
function showCountry(e) {
  emit("showCountry", e.target.value);
}
</script>

<template>
  <div class="search">
    <input
      type="text"
      @keyup.enter="showCountry"
      placeholder="Enter the name of the city"
    />
  </div>
</template>

<style scoped>
.search {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 10%;
  width: 180px;
}
.search input{
  width: 100%;
}

</style>
