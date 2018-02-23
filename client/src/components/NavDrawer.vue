<template>
    <v-navigation-drawer
        fixed
        v-model = "drawer"
        permanent
        app
    >
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
            <v-list-tile>
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

            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

};
</script>

<style>

</style>
