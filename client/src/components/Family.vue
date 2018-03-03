<template>
    <v-content>
        <nav-drawer />
          <h1>Insert Family HTML Here</h1>
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
