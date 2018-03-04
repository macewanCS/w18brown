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
              <h1>Reserve Facilitation Hours</h1>  
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
            <h1>Reserve Facilitation Hours</h1>  
                <div>
                </div>
            </body>
          </div>
        </v-layout>
      </v-container>
    </v-tab-item>
  </v-tabs-items>
</v-tabs>








</template>

<script>
/*
export default {
  data() {
    return {
      tabs: null
    };
  }
};*/
</script>

<style>
#box {
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 5px 5px #bdbdbd;
  border-style: solid;
  border-color: #bdbdbd;
  align-self: center;
  max-width: 500px;
}
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}

</style>
