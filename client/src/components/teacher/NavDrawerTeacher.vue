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

            <v-list-tile :to="{name: 'scheduleteacher'}">
                    <v-list-tile-content>
                        <v-list-tile-title>View Schedules</v-list-tile-title>
                    </v-list-tile-content>
            </v-list-tile>

            <v-divider />

            <v-list-tile :to="{name: 'login'}">
                <v-list-tile-content>
                    <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  padding: 5px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 13pt;
  color: #0288d1;
  font-family: Lato;
}
</style>
