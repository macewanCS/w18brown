<template>
    <v-navigation-drawer fixed permanent app dark>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Welcome __________!
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-divider />
        <v-list fluid>
            <v-list-tile :to="{name: 'admin'}">
                <!--looks to router/index.js for admin and loads components-->
                <v-list-tile-content>
                    <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>Room Management</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>Account Management</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <router-link :to="{name: 'settings'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </router-link>

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

<style>

</style>
