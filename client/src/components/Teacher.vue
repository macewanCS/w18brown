<template>
    <v-content>
        <nav-drawer />
                <h1>Insert Board HTML Here</h1>
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
