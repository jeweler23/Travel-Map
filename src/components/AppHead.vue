<script setup lang="ts">
import { defineProps } from "vue";

interface Title {
  title: String;
  titleClass: Boolean;
}
const props = defineProps<Title>();
</script>
<template>
  <div :class="{ card_title: props.titleClass, card_info: !props.titleClass }">
    <div>{{ props.title }}</div>
  </div>
</template>
<style scoped>
.card_title {
  color: #fff;
  font-size: 48px;
  text-shadow: 2px 2px 5px black;
  margin-bottom: 40px;
  position: absolute;
  font-style: italic;

  top: 50px;
  left: 100px;
  z-index: 3000;
}

.card_info {
  position: absolute;
  bottom: 50px;
  left: 100px;
  color: white;
  font-size: 42px;
  z-index: 1000;
  width: 450px;
}

.card_info div {
  text-shadow: 0 0 15px black;
  margin-bottom: 10px;
}
</style>
