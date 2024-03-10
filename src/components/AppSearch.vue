<script setup>
const emit = defineEmits(["showCountry"]);
function showCountry(e) {
  emit("showCountry", e.target.value);
}
</script>

<template>
  <div class="search">
    <img src="@/assets/image/search-interface-symbol.png" alt="" />

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
  top: 110px;
  left: 15px;
  width: 230px;
  display: flex;
  overflow: hidden;
  align-items: center;
  gap: 5px;
}

img {
  width: 16px;
  height: 16px;
  z-index: 1001;
}

input {
  width: 100%;
  transform: translateX(-120%);
  transition: all 1s ease;
  border: none;
  outline: none;
  padding: 10px;
}

.search:hover input {
  transform: translateX(0);
}
input:active {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
</style>
