<template>
    <v-content>
              <nav-drawer /> <!-- this pulls the nav vue -->
<!-- This page is for routing and should remain blank-->
        <router-view />   <!-- connects the pages functionally to the sidebar -->
    </v-content>
</template>

<script>

import NavDrawer from "@/components/NavDrawerTeacher.vue";
export default {
  name: "app",
  components: {
    NavDrawer
  }
};
</script>

<style>
</style>
