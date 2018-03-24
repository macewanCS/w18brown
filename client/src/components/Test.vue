<template>
     <v-layout row wrap>
    <v-flex xs11 sm5>
      <v-menu
      >
        <v-text-field
          slot="activator"
          label="Picker in menu"
          readonly
        ></v-text-field>
        <v-time-picker v-model="time" @change="$refs.menu.save(time)"></v-time-picker>
      </v-menu>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
</template>

<script>
export default {
  
};
</script>

<style>

</style>

This is for reserve for tabs.
<template>
  <v-tabs fixed-tabs dark>
    <v-tab key="tab1">
      Room Reservations
    </v-tab>
    <v-tab key="tab2">
      Field Trip Reservations
    </v-tab>

    <v-tabs-items id="content">
      <v-tab-item key="tab1">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <div id="box">
              <body>
              <h1>Reserve Room Hours</h1>  
                <div>
                </div>
              </body>
            </div>
          </v-layout>
      </v-container>
    </v-tab-item>
    <v-tab-item key="tab2">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <div id="box">
            <body>
            <h1>Reserve Field Trip Hours</h1>  
                <div>
                </div>
            </body>
          </div>
        </v-layout>
      </v-container>
    </v-tab-item>
  </v-tabs-items>
</v-tabs>