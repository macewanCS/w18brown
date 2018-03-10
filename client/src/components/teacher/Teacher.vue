<template>
  <v-content>
    <nav-drawer /> <!-- this pulls the nav vue -->
    <router-view />   <!-- connects the pages functionally to the sidebar -->
  </v-content>
</template>

<script>

import NavDrawer from "@/components/teacher/NavDrawerTeacher.vue";
export default {
  name: "app",
  components: {
    NavDrawer
  }
};
</script>

<style>
</style>
