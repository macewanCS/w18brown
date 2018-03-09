<template>
  <v-tabs fixed-tabs dark>
    <v-tab key="tab1">
      Room Reservations
    </v-tab>
    <v-tab key="tab2">
      Field Trip Reservations
    </v-tab>

    <v-tabs-items>
      <v-tab-item key="tab1">
        <!-- Begin Calendar -->
        <v-container id="calendar" grid-list-sm text-xs-center>
          <!-- Row 1: Header -->
          <v-layout row class="cal-header">
            <v-flex md1>

            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat class="cal-day">
                <v-card-text>
                  Monday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>
                  Tuesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>
                  Wednesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>
                  Thursday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>
                  Friday
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-divider />
          <!-- Row 2: Block 1 -->
          <v-layout row class="cal-block">
            <v-flex md1>
              <v-card color="blue-grey" dark>
                <v-card-text>
                  Block 1
                  <br> Insert Time
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark>
                <v-card-text>
                  Monday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>
                  Tuesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>
                  Wednesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>
                  Thursday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>
                  Friday
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- Row 3: Block 2 -->
          <v-layout row class="cal-block">
            <v-flex md1>
              <v-card color="blue-grey" dark>
                <v-card-text>
                  Block 2
                  <br> Insert Time
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- Row 4: Block 3 -->
          <v-layout row class="cal-block">
            <v-flex md1>
              <v-card color="blue-grey" dark>
                <v-card-text>
                  Block 3
                  <br> Insert Time
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- <div class="week">
            <div class="day">
              
            </div>
            <div class="day">
              Monday
            </div>
            <div class="day">
              Tuesday
            </div>
            <div class="day">
              Wednesday
            </div>
            <div class="day">
              Thursday
            </div>
            <div class="day">
              Friday
            </div>
          </div> -->
        </v-container>
        <!-- End Calendar -->
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
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
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
#calendar {
  background-color: red;
}
.week {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
}
.cal-block {
  height: 225px;
  background-color: purple;
}
</style>
