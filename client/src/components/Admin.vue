<template>
    <v-app>
        <nav-drawer />
        <v-content>
            <router-view />
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
