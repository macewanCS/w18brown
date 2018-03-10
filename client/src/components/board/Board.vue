<template>
    <v-content>
        <nav-drawer />
<!-- This page is for routing and should remain blank-->
        <router-view />
    </v-content>
</template>

<script>
import NavDrawer from "@/components/board/NavDrawerBoard.vue";
export default {
  name: "app",
  components: {
    NavDrawer
  }
};
</script>

<style>

</style>
