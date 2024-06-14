<template>
  <AppSideBar>
    <v-btn
      variant="tonal"
      id="btn-toggle"
      icon="mdi-theme-light-dark"
      @click.stop="toggleTheme"
      size="x-small"
    >
    </v-btn>
  </AppSideBar>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import AppSideBar from "@/components/side-bar/AppSideBar.vue";

//toogle theme
import { useTheme } from "vuetify";
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
//
</script>

<style scoped>
#btn-toggle{
  position: absolute;
  bottom: 5%;
  left: 12px;
 
}
.v-btn--size-x-small{
  --v-btn-size: 1rem
}

</style>
