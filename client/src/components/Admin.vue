<template>
    <v-app>
        <nav-drawer />
        <v-content fluid>
            Insert My Content Here
        </v-content>
    </v-app>
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
