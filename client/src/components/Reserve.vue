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
                <v-card hover v-for="fac in Calendar[0][0]" :key="fac.index" v-bind:style="{height: fac.height}" v-bind:color="fac.color" class="facilitator">
                  {{fac.name}}
                </v-card>
              </v-flex>
              <v-flex>
                <v-card hover v-for="fac in Calendar[0][0][1]" :key="fac.index" v-bind:style="{height: fac.height}" v-bind:color="fac.color" class="facilitator">
                  {{fac.name}}
                </v-card>
              </v-flex>
              <v-flex>
                <v-card hover v-for="fac in Calendar[0][0][2]" :key="fac.index" v-bind:style="{height: fac.height}" v-bind:color="fac.color" class="facilitator">
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
      // MonB1: [
      //   { name: "Reserved", height: "100px", color: "red" },
      //   { name: "Reserved", height: "100px", color: "blue" }
      // ],
      // MonB2: [{ name: "Free", height: "280px", color: "grey darken-3" }],
      // MonB3: [{ name: "Free", height: "280px", color: "grey darken-3" }],
      Mon_B1: [],
      Mon_B2: [],
      Mon_B3: [],

      Calendar: [
        [[], [], []],
        [[], [], []],
        [[], [], []],
        [[], [], []],
        [[], [], []]
      ],

      blocktime_color: "red",
      headerDay_color: "red",
      blockDay_color: "blue-grey darken-3",
      blockFree_color: "white",
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
        let incomingReserves = await ApiFunctions.getReservations(
          "red",
          "2018/03/05"
        );
        await console.log(JSON.parse(incomingReserves.data));
        let reserves = await JSON.parse(incomingReserves.data);

        this.setCalendar(reserves);
        console.log(this.Calendar[0][0][0]);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    setCalendar(weekReserves) {
      if (weekReserves.reservations.length != 5) {
        throw "weekReserves doesn't have a length of 5(missing 5 days of the week)";
      }
      let arr_reservations = weekReserves.reservations;
      console.log(arr_reservations);

      for (let day = 0; day < arr_reservations.length; day++) {
        let curDay = arr_reservations[day].blocks;

        for (let block = 0; block < curDay.length; block++) {
          let curSlot = curDay[block].slot;

          for (let slot = 0; slot < curSlot.length; slot++) {
            let curFacil = curSlot[slot];
            var isFree = false;
            //Should have a name and percentage available.
            if (curFacil.name.valueOf() == "free") {
              isFree = true;
            }
            var myHeight = 280 * curFacil.percentage;

            var newFacil = {
              name: curFacil.name,
              height: myHeight + "px",
              color: isFree ? "white" : "blue"
            };
            this.Calendar[day][block][slot] = newFacil;
          }
        }
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
