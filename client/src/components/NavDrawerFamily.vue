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
            <v-list-tile :to="{name: 'family'}">
                <!--looks to router/index.js for admin and loads components-->
                <v-list-tile-content>
                    <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="{name: 'reserveroom'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Reserve Room Hours</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-tile>

            <v-list-tile :to="{name: 'reservefieldtrip'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Reserve Fieldtrip</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
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

<style>

</style>
