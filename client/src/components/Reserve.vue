<template>
  <div>
    TESTING
    <!-- Begin Calendar -->
    <v-container id="calendar" v-bind:style="{background: cal_color}" grid-list-md text-xs-center>

      <!-- Row 1: Header -->
      <v-layout row class="cal-header">
        <v-flex md1 class="cal-times">

        </v-flex>
        <v-flex md3 class="cal-header-days">
          <v-card v-bind:color="headerDay_color" dark>
            <v-card-text>
              Monday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-header-days">
          <v-card v-bind:color="headerDay_color" dark>
            <v-card-text>
              Tuesday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-header-days">
          <v-card v-bind:color="headerDay_color" dark>
            <v-card-text>
              Wednesday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-header-days">
          <v-card v-bind:color="headerDay_color" dark>
            <v-card-text>
              Thursday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-header-days">
          <v-card v-bind:color="headerDay_color" dark>
            <v-card-text>
              Friday
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-divider />

      <!-- Row 2: Block 1 -->
      <v-layout row class="cal-block">
        <v-flex md1 class="cal-times">
          <v-card v-bind:color=blocktime_color dark class="cal-block-time">
            <div class="block-time">
              Block 1
              <br>(8:00 - 11:00)
            </div>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-card hover v-for="fac in MonB1" :key="fac" v-bind:style="{height: fac.height}" v-bind:color="fac.color" class="facilitator">
                  <p class="verticaltext">{{fac.name}}</p>
                </v-card>
              </v-flex>
              <v-flex>
                <v-card hover v-for="fac in MonB2" :key="fac" v-bind:style="{height: fac.height}" v-bind:color="blockFree_color" class="facilitator">
                  {{fac.name}}
                </v-card>
              </v-flex>
              <v-flex>
                <v-card hover v-for="fac in MonB3" :key="fac" v-bind:style="{height: fac.height}" v-bind:color="fac.color" class="facilitator">
                  {{fac.name}}
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Tuesday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Wednesday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Thursday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Friday
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Row 3: Block 2 -->
      <v-layout row class="cal-block">
        <v-flex md1 class="cal-times">
          <v-card v-bind:color=blocktime_color dark class="cal-block-time">
            <div class="block-time">
              Block 2
              <br>(11:00 - 1:00)
            </div>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Monday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Tuesday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Wednesday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Thursday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Friday
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Row 4: Block 3 -->
      <v-layout row class="cal-block">
        <v-flex md1 class="cal-times">
          <v-card v-bind:color=blocktime_color dark class="cal-block-time">
            <div class="block-time">
              Block 3
              <br>(1:00 - 3:00)
            </div>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Monday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Tuesday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Wednesday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Thursday
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" dark class="cal-block-day">
            <v-card-text>
              Friday
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- End Calendar -->
  </div>
</template>

<script>
import ApiFunctions from "@/services/ApiFunctions";

export default {
  data() {
    return {
      MonB1: [
        { name: "Reserved", height: "100px", color: "red" },
        { name: "Reserved", height: "100px", color: "blue" }
      ],
      MonB2: [{ name: "Free", height: "280px", color: "grey darken-3" }],
      MonB3: [{ name: "Free", height: "280px", color: "grey darken-3" }],
      blocktime_color: "red",
      headerDay_color: "red",
      blockDay_color: "blue-grey darken-3",
      cal_color: "slategrey"
    };
  },
  components: {},
  created() {
    this.getReservations();
  },
  methods: {
    async getRooms() {
      let rooms = ApiFunctions.getRooms();
    },
    async getReservations() {
      try {
        let reserves = await ApiFunctions.getReservations("red", "2018/03/05");
        await console.log(JSON.parse(reserves.data));
        //let v = await JSON.parse(reserves);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}
#calendar {
  min-width: 1000px;
  max-width: 1000px;
  padding: 5px;
}
.cal-header {
  width: 100%;
}
.cal-header-days {
  min-width: 182px;
  max-width: 182px;
}

.cal-block {
  height: 300px;
  max-height: 300px;
  min-height: 300px;
  min-width: 1000px;
}

.cal-block-time {
  min-height: 100%;
  max-height: 100%;
  line-height: 4em;
}
.cal-block-day {
  min-height: 100%;
  max-height: 100%;
  min-width: 174px;
  max-width: 174px;
  margin: 0;
  padding: 5px;
}
.cal-times {
  min-width: 90px;
  max-width: 90px;
}
.block-time {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 0.9em;
}
.facilitator {
  margin: 2px, 0px, 0px, 0px;
  width: 50px;
  max-width: 50px;
  overflow: hidden;

  flex: 10 0 auto;

  /* Centers text */
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
}
.verticaltext {
  transform: rotate(-90deg);
  transform-origin: right, top;
  -ms-transform: rotate(-90deg);
  -ms-transform-origin: right, top;
  -webkit-transform: rotate(-90deg);
  -webkit-transform-origin: right, top;
  position: absolute;
}
</style>
