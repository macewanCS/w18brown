<template>
    <v-content>
        <nav-drawer />
          <h1>Admin Dashboard</h1>
        <router-view />
    </v-content>
</template>

<script>
import NavDrawer from "@/components/NavDrawerAdmin.vue";
export default {
  name: "app",
  components: {
    NavDrawer
  }
};
</script>

<style>

</style>
