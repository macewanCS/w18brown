<template>

  <v-tabs fixed-tabs dark id="allTabs">

    <v-tab key="tab1">
      Reserve a Time
    </v-tab>
    <v-tab key="tab2">
      View My Reserved Times
    </v-tab>

    <v-tabs-items id="content">
      <v-tab-item key="tab1">
        <div>
          <div class="selector">
            <v-card class="selectorCard">
              <v-layout justify-space-between wrap class="selectorLayout">
                <v-flex xs5>
                  <v-select :items="availRooms" v-model="selectedRoom" label="Select a Room" single-line />

                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs5>
                  <v-menu ref="menu" lazy v-model="menu" transition="scale-transition" offset-y full-width min-width="415px" max-width="415px">
                    <v-text-field slot="activator" v-model="selectedDate" prepend-icon="event" readonly label="Select a Date"></v-text-field>
                    <v-date-picker v-model="selectedDate" no-title scrollable full-width :first-day-of-week="1">
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
            </v-card>
          </div>

          <!-- Begin Calendar -->
          <v-container id="calendar" v-bind:style="{background: cal_color}" grid-list-md text-xs-center v-if="calendar_ready">
            <!-- Row 1: Header -->
            <v-layout row class="cal-header">
              <v-flex md1 class="cal-times">
              </v-flex>
              <v-flex md3 class="cal-header-days">
                <v-card v-bind:color="headerDay_color" light>
                  <v-card-text class="headerDay">
                    Monday
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md3 class="cal-header-days">
                <v-card v-bind:color="headerDay_color" light>
                  <v-card-text class="headerDay">
                    Tuesday
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md3 class="cal-header-days">
                <v-card v-bind:color="headerDay_color" light>
                  <v-card-text class="headerDay">
                    Wednesday
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md3 class="cal-header-days">
                <v-card v-bind:color="headerDay_color" light>
                  <v-card-text class="headerDay">
                    Thursday
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md3 class="cal-header-days">
                <v-card v-bind:color="headerDay_color" light>
                  <v-card-text class="headerDay">
                    Friday
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- Row 2: Block 1 -->
            <v-layout row class="cal-block">
              <v-flex md1 class="cal-times">
                <v-card v-bind:color=blocktime_color light class="cal-block-time">
                  <div class="block-time">
                    8:45 Morning 12:00
                  </div>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day" v-bind:class="{fieldTrip : isMonFieldTrip}">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][0][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][0][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][0][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day" v-bind:class="{fieldTrip : isTueFieldTrip}">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][0][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][0][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][0][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day" v-bind:class="{fieldTrip : isWedFieldTrip}">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][0][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][0][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][0][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day" v-bind:class="{fieldTrip : isThuFieldTrip}">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][0][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][0][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][0][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day" v-bind:class="{fieldTrip : isFriFieldTrip}">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][0][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][0][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][0][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- Row 3: Block 2 -->
            <v-layout row class="cal-block">
              <v-flex md1 class="cal-times">
                <v-card v-bind:color=blocktime_color light class="cal-block-time">
                  <div class="block-time">
                    11:50<br> Lunch
                    <br>1:00
                  </div>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][1][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][1][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][1][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][1][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][1][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][1][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][1][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][1][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][1][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][1][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][1][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][1][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][1][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][1][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][1][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- Row 4: Block 3 -->
            <v-layout row class="cal-block">
              <v-flex md1 class="cal-times">
                <v-card v-bind:color=blocktime_color light class="cal-block-time">
                  <div class="block-time">
                    12:50
                    <br> Afternoon
                    <br> 3:45
                  </div>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][2][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][2][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[0][2][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][2][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][2][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[1][2][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][2][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][2][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[2][2][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][2][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][2][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[3][2][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs3 class="cal-block-col">
                <v-card v-bind:color="blockDay_color" light class="cal-block-day">
                  <v-layout row>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][2][0]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][2][1]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                    <v-flex>
                      <calFacil v-for="fac in Calendar[4][2][2]" :key="fac.index" :myProp="fac" @clicked="newReserve" />
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <v-dialog v-model="ReserveDialog" max-width="50%">
              <v-card>
                <h1 class="h1Dialog">Reserve a time<br>{{reservedDate}}</h1>
                <v-card-text>
                  <v-select v-bind:items="availFacilitators" v-model="selectedFacil" v-bind:error="errSelectedFacil" label="Select a Facilitator" single-line required :rules="[selectedFacilRules.required]"></v-select>
                  <v-layout row>
                    <v-spacer />
                    <v-select v-bind:items="availableTimes" v-model="selectedStartTime" label="Start-Time" single-line v-on:input="updateEndTimes" required></v-select>
                    <v-spacer />
                    <v-select v-bind:items="availableEndTimes" v-model="selectedEndTime" label="End-Time" single-line required dense></v-select>
                    <v-spacer />
                  </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="success" @click.stop="createReservation">Reserve</v-btn>
                  <v-btn color="error" @click.native="clearDialogBoxes">Cancel</v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="infoDialog" max-width="50%">
              <v-card>
                <h1 class="h1Dialog">Information about Reservation</h1>
                <v-card-text>
                  <p>
                  Reserved by:  {{selectedReservation.name}}
                  On:  {{selectedReservation.date}} 
                  Starting at:  {{selectedReservation.startTime}}
                  Ending at:  {{selectedReservation.endTime}}
                  Room:  {{selectedReservation.room}}
                  </p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="error" @click.native="closeInfoDialog">Close</v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
          <!-- End Calendar -->
        </div>
      </v-tab-item>
      <v-tab-item  key="tab2">
        <reserved-times :updateMe="updateUpcomingRes" @updateCal="refreshCal"/>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>
<script>
import ApiFunctions from "@/services/ApiFunctions";
import ReservedTimes from "./Children/ReservedTimes";
import calFacil from "@/components/family/children/CalFacilitator";
import { mapState } from "vuex"; //Gives access to the current state.

export default {
  data() {
    return {
      Calendar: [
        [[], [], []],
        [[], [], []],
        [[], [], []],
        [[], [], []],
        [[], [], []]
      ],
      blocktime_color: "grey lighten-2",
      headerDay_color: "grey lighten-2",
      blockDay_color: "grey lighten-2",
      blockFree_color: "grey lighten-5",
      blockReserved_color: "red",
      cal_color: "#BDBDBD",
      calendar_ready: "false",

      isMonFieldTrip: false,
      isTueFieldTrip: false,
      isWedFieldTrip: true,
      isThuFieldTrip: false,
      isFriFieldTrip: false,
      // Below is used for new Reservations
      ReserveDialog: "",
      familyID: "",
      availFacilitators: [],
      selectedFacil: null,
      startTime: "",
      endTime: "",
      availableTimes: [],
      availableEndTimes: [],
      selectedStartTime: "",
      selectedEndTime: "",
      reservedDate: "",
      selectedFacilRules: {
        required: (value) => !!value || 'Required.'
      },
      errSelectedFacil: false,

      //Used for Date Selector and Room Selector
      menu: "",
      availRooms: [],
      selectedRoom: "",
      selectedDate: "",
      selectedMonday: "",

      infoDialog: false,
      selectedReservation: "",
      updateUpcomingRes: false
    };
  },
  components: {
    calFacil,
    ReservedTimes
  },
  computed: {
    ...mapState(["accountID"]) //Can obtain accountID by using this.accountID now.
  },
  async mounted() {
    this.getRoomList();
    this.getFacilitators();
  },
  methods: {
    async getRooms() {
      let rooms = ApiFunctions.getRooms();
    },
    async updateCalendar() {
      let myVar = await this.getReservations();
      await this.setCalendar(myVar);
    },
    async getReservations() {
      try {
        // Room/Date that has any entries "red","2018/03/05"
        console.log(this.selectedMonday);
        let incomingReserves = await ApiFunctions.getReservations(
          this.selectedRoom,
          this.selectedMonday
        );
        //await console.log(JSON.parse(incomingReserves.data));
        let reserves = await JSON.parse(incomingReserves.data);
        return reserves;
        //await console.log(reserves);
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
        for (
          let block = 0;
          block < arr_reservations[day].blocks.length;
          block++
        ) {
          for (
            let slot = 0;
            slot < arr_reservations[day].blocks[block].slot.length;
            slot++
          ) {
            let curFacil = arr_reservations[day].blocks[block].slot[slot];
            this.Calendar[day][block][slot] = curFacil;
            for (let i = 0; i < this.Calendar[day][block][slot].length; i++) {
              this.Calendar[day][block][slot][i].height =
                230 * this.Calendar[day][block][slot][i].percentage + "px";
              if (this.Calendar[day][block][slot][i].name.valueOf() == "free") {
                this.Calendar[day][block][slot][i].color = this.blockFree_color;
                this.Calendar[day][block][slot][i].isFree = true;
              } else {
                this.Calendar[day][block][slot][
                  i
                ].color = this.blockReserved_color;
                this.Calendar[day][block][slot][i].isFree = false;
              }
            }
          }
        }
      }
      this.calendar_ready = true;
    },
    newReserve(origin) {
      console.log(origin);
      if (origin.isFree) {
        this.clearDialogBoxes();
        this.reservedDate = origin.date;
        this.availableTimes = this.create5MinIntervals(
          origin.startTime,
          origin.endTime
        );
        //console.log(this.availableTimes);
        this.selectedStartTime = this.availableTimes[0];
        this.updateEndTimes();
        this.ReserveDialog = true; //Display ReserveDialog
      } else {
        this.getReservationInfoByID(origin.reservationID);
      }
    },
    async getReservationInfoByID(id) {
      if (id == 0) {
        throw "Unable to get reservation info for a free block";
      } else {
        this.selectedReservation = "";
        let jsonReserve = await ApiFunctions.getReservationInfoByID(id);
        this.selectedReservation = jsonReserve.data;
        this.infoDialog = true;
      }
    },
    closeInfoDialog() {
      this.infoDialog = false;
    },
    // Taken and altered from https://codereview.stackexchange.com/questions/128260/populating-an-array-with-times-with-half-hour-interval-between-them
    create5MinIntervals(from, until) {
      //"01/01/2001" is just an arbitrary date
      var until = Date.parse("01/01/2001 " + until);
      var from = Date.parse("01/01/2001 " + from);
      //*12 because because we want every 5 minutes instead of every hour
      var max = Math.abs(until - from) / (60 * 60 * 1000) * 12;
      var time = new Date(from);
      var hours = [];
      for (var i = 0; i <= max; i++) {
        //doubleZeros just adds a zero in front of the value if it's smaller than 10.
        var hour = this.doubleZeros(time.getHours());
        var minute = this.doubleZeros(time.getMinutes());
        hours.push(hour + ":" + minute);
        time.setMinutes(time.getMinutes() + 5);
      }
      return hours;
    },
    // Taken from https://stackoverflow.com/questions/8043026/how-to-format-numbers-by-prepending-0-to-single-digit-numbers?noredirect=1
    doubleZeros(time) {
      return ("0" + time).slice(-2);
    },
    // End of taken functions
    updateEndTimes() {
      var newTimes = [];
      var index = this.availableTimes.indexOf(this.selectedStartTime) + 1;
      for (; index < this.availableTimes.length; index++) {
        newTimes.push(this.availableTimes[index]);
      }
      this.availableEndTimes = newTimes;
      this.selectedEndTime = this.availableEndTimes[this.availableEndTimes.length - 1];
    },
    clearDialogBoxes() {
      this.ReserveDialog = false;
      this.selectedStartTime = "";
      this.selectedEndTime = "";
      this.availableTimes = [];
      this.availableEndTimes = [];
      this.selectedFacil = "";
    },
    async getRoomList() {
      let unparsed = await ApiFunctions.B_RoomList();
      this.availRooms = await unparsed.data;
    },
    getMonday(d) {
      //Taken from https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
      console.log("D DAYYYY:",d);
      var newDay = new Date(d);
      var day = newDay.getDay();
      console.log("day = ", day);
      if (day == 0) {
        console.log("This is a monday");
        return d;
      } else {
        var diff = newDay.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(newDay.setDate(diff));
      }
    },
    async getFacilitators(accountID) {
      let response = await ApiFunctions.getFacilitators(this.accountID);
      let list = response.data;
      if (list) {
        this.availFacilitators = list;
      } else {
        throw "No Facilitators for given AccountID";
      }
    },
    async createReservation() {
      if (!this.accountID) {
        throw "Missing Account ID";
      }
      if (!this.selectedFacil) {
        this.errSelectedFacil = true;
        throw "Missing Selected Facilitator";
      }
      if (!this.selectedStartTime) {
        throw "Missing selectedStartTime";
      }
      if (!this.selectedEndTime) {
        throw "Missing electedEndTime";
      }
      if (!this.selectedRoom) {
        throw "How did you get here?";
      }
      var params = {
        familyID: this.accountID,
        facilitator: this.selectedFacil,
        date: this.reservedDate,
        startTime: this.selectedStartTime,
        endTime: this.selectedEndTime,
        room: this.selectedRoom
      };
      this.clearDialogBoxes();
      console.log(params);
      let feedback = await ApiFunctions.createReservation(params);
      console.log(feedback);
      this.errSelectedFacil = false;
      this.calendar_ready = false;
      this.updateCalendar();
      this.refreshUpcomingRes();
    },
    async refreshCal() {
      this.calendar_ready = "false";
      this.updateCalendar();
    },
    refreshUpcomingRes() {
      this.updateUpcomingRes = !this.updateUpcomingRes;
    }
  },
  watch: {
    selectedRoom: function(newValue) {
      this.calendar_ready = "false";
      if (this.selectedDate.valueOf() == "") {
        return;
      } else {
        this.updateCalendar();
      }
    },
    selectedDate: function(newValue) {
      this.calendar_ready = "false";
      var Monday = this.getMonday(newValue);
      this.selectedMonday =
        Monday.getFullYear() +
        "/" +
        (Monday.getMonth() + 1) +
        "/" +
        Monday.getDate();
      console.log("this.monday=", Monday);
    },
    selectedMonday: function(newValue) {
      if (this.selectedRoom.valueOf() == "") {
        return;
      } else {
        this.updateCalendar();
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
  text-align: center;
}
.h1Title {
  margin-top: 5px;
  margin-bottom: 5px;
}
.h1Dialog {
  font-size: 16pt;
}
#calendar {
  min-width: 1013px;
  max-width: 1013px;
  padding-left: -5px;
}
.cal-header {
  width: 100%;
}
.cal-header-days {
  min-width: 182px;
  max-width: 182px;
}
.cal-block {
  height: 250px;
  max-height: 250px;
  min-height: 250px;
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
  min-width: 95px;
  max-width: 95px;
}
.block-time {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  font-size: 13pt;
  line-height: 100px;
}
.facilitator {
  margin: 2px, 0px, 0px, 0px;
  width: 50px;
  max-width: 50px;
  overflow: hidden;
  border-radius: 8px;
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
  font-size: 20pt;
  font-style: italic;
  letter-spacing: 2px;
  font-family: Lato;
}
.headerDay {
  font-size: 13pt;
}
.selector {
  margin-left: auto;
  margin-right: auto;
  max-width: 1013px;
}
.selectorCard {
  padding-left: 15px;
  padding-right: 15px;
}
.divider {
  margin-bottom: 5px;
}
.selectorLayout {
  height: 60px;
}
.fieldTrip{
  min-height: 743px;
  z-index: 2;
}
</style>
