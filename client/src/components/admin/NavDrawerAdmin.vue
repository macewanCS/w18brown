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

            <v-list-tile :to="{name: 'dashboardadmin'}">
                <!--looks to router/index.js for admin and loads components-->
                <v-list-tile-content>
                    <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider />

            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>Events</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

           <v-list-tile :to="{name: 'fieldtripsadmin'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Field Trips</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-tile>

            <v-divider />

            <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Account Management</v-list-tile-title>
                    </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="{name: 'accounts'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Family</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-tile>

            <v-list-tile :to="{name: 'accountstaff'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Staff</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-tile>

            <v-list-tile :to="{name: 'passwordreset'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Password</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-tile>

            <v-divider />

            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            
            <v-list-tile :to="{name: 'rooms'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Room Management</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-tile>

            <v-list-tile :to="{name: 'settings'}">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Settings</v-list-tile-title>
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
