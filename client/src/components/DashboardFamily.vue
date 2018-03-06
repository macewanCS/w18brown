<template>
    <v-content>
      <nav-drawer />
        <h1>Family Dashboard</h1>
      <router-view />
    </v-content>
</template>

<script>
import NavDrawer from "@/components/NavDrawerFamily.vue";
export default {
  name: "app",
  components: {
    NavDrawer
  }
};
</script>

<style>

</style>
