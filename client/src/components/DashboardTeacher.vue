<template>
    <v-content>
        <nav-drawer />
          <h1>Teacher Dashboard</h1>
        <router-view />
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
