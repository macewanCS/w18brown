<template>
    <div id="app">
        <v-app>
            <!-- the following link is used for drop down arrow, etc -->
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <router-view />
        </v-app>
    </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html {
    overflow:auto;
}
</style>
