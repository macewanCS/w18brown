<template>
    <v-content>
        <nav-drawer />
        <router-view />
    </v-content>
</template>

<script>
import NavDrawer from "@/components/NavDrawer.vue";
export default {
  name: "app",
  components: {
    NavDrawer
  }
};
</script>

<style>

</style>
