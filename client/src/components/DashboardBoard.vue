<template>
    <v-content>
        <nav-drawer />
          <h1>Board Dashboard</h1>
        <router-view />
    </v-content>
</template>

<script>
import NavDrawer from "@/components/NavDrawerBoard.vue";
export default {
  name: "app",
  components: {
    NavDrawer
  }
};
</script>

<style>

</style>
