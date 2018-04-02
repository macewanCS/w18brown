<template>
    <v-navigation-drawer fixed permanent app dark>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        <h2>Welcome to Caraway</h2>
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-divider />
        <v-list fluid>
            <v-list-tile :to="{name: 'dashboardfamily'}">
                <!--looks to router/index.js for admin and loads components-->
                <v-list-tile-content>
                    <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="{name: 'reserve'}">
                <v-list-tile-content>
                    <v-list-tile-title>Reservations</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider />

            <v-list-tile @click="logout">
                <v-list-tile-content>
                    <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setAccountID", null);
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>

<style>
h2 {
  padding: 5px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 13pt;
  color: #0288d1;
  font-family: Lato;
}
</style>
