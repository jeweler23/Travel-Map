<template>
  <v-card class="side-bar">
    <v-layout>
      <v-navigation-drawer :rail="rail" @click="rail = false">
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-account" title="User" value="user">
            <template v-slot:append>
              <v-btn
                icon="mdi-chevron-left"
                variant="text"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-star"
            title="Starred"
            value="starred"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-history"
            title="Chronology"
            value="Chronology"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-comment-account"
            title="Your impressions"
            value="Your impressions"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-folder"
            title="My Files"
            value="myfiles"
          ></v-list-item>
        </v-list>
        <slot></slot>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const rail = ref(true);
</script>

<style scoped>
.side-bar {
  z-index: 10000;
}
</style>
