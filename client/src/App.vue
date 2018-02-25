<template>
    <div id="app">
        <v-app>       
            <v-container fluid fill-height>
                <v-layout flex align-center justify-center>
                    <main>
                        <router-view />
                    </main>
                </v-layout>
            </v-container>
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
  text-align: center;
  color: #2c3e50;
}
</style>
