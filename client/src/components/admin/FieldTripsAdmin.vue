<template>
  <v-flex ma-5>
    <div class="text-xs-center">
      <table class="center">
        <h1>Create Field Trip</h1>
        <br>

        <v-flex xs12>

          <v-layout justify-center>
            <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="startDate">
                <v-text-field label="Trip Date" slot="activator" v-model="tripDate" prepend-icon="event" readonly></v-text-field>
                <v-date-picker v-model="tripDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(tripDate)">OK</v-btn>
                </v-date-picker>
            </v-menu>
          </v-layout>

          <v-select :items="items" v-model="credit" label="Hours of credit" />

          <v-select :items="availRooms" v-model="selectedRoom" label="Rooms" />

          <v-select v-bind:items="items" v-model="facilitatorCount" label="Facilitators" />

           <v-text-field  name="message" type="text" id="message" label="Message including destination..." v-model="message" 
          :rules="[(v) => v.length <= 200 || 'Max 200 characters']"
          multi-line :counter="200"  textarea light />

          <v-btn type="submit" color="success" id="Submit" @click="submit">
            Submit
          </v-btn>
      
          <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="genericError" v-model="genericError">
            {{ "All fields are required" }}
            <i class="material-icons">error</i>
          </v-flex>


       <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="dateError" v-model="dateError">
            {{ "Date can not be in the past" }}
            <i class="material-icons">error</i>
          </v-flex>

        </v-flex>
      <br/>
        <v-layout align-center justify-center>
          <v-flex id="box2" class="text-xs-center" mt-2 v-if="confirm" v-model="confirm">
            <h2>Field Trip Created
              <i class="material-icons">check_circle</i>
            </h2>
            Date: {{this.savedDate}}<br>
            Credit hours: {{this.savedCredit}}<br>
            Room: {{this.savedRoom}}<br>
            Facilitators: {{this.savedFacilitator}}<br>
            Message: {{this.savedMessage}}
          </v-flex>
        </v-layout>
        <br>
       
      </table>
    </div>
  </v-flex>
</template>
<script>
// drop down menu code from https://vuetifyjs.com/en/components/selects
// This is a pre-styled object meant to be copied and used. It has been modified for use in this app.
//import ApiFunctions from "@/services/ApiFunctions";
import ApiFunctions from "@/services/ApiFunctions";
export default {
  data() {
    return {
      tripDate: null,
      credit: null,
      selectedRoom: null, 
      facilitatorCount: null,
      message: null,
      genericError: false,
      availRooms: [],
      confirm: false,
      errorAdding: false,
      items: [1,2,3,4,5,6,7,8,9,10,11,12],

      savedDate: null,
      savedCredit: null,
      savedRoom: null,
      savedFacilitator: null,
      savedMessage: null,

      today: null,
      dateError: false

    };
  },
  created() {
      this.load();
  },
  async mounted() {
    this.getRoomList();
  },
  methods: {
    async load(){
      this.today = await this.getToday()
      //console.log(this.today)
      this.tripDate = this.today
    },

    async getToday(){
      var dateRaw = new Date();
      return String(dateRaw.getFullYear()) + "-" + await this.addZero(String(dateRaw.getMonth())) + 
      "-" + await this.addZero(String(dateRaw.getDate()))
    },

    async addZero(stringInt){
      if (stringInt.length == 1){
        return "0" + stringInt
      }
      else return stringInt
    },

    async getRoomList() {
      let unparsed = await ApiFunctions.B_RoomList();
      this.availRooms = await unparsed.data;
    },

    async submit() {

      // resets
      this.dateError = false
      this.confirm = false
      this.errorAdding = false
      this.genericError = false

      if (this.tripDate < this.today ){
        console.log("error this date is in the past.")
        this.dateError = true
      }
      else if (this.tripDate == null || this.credit == null || this.selectedRoom == null ||
          this.facilitatorCount == null || this.message == null )
          {
          this.genericError = true
      }
      else {
       

       try {
          const addTripResponse = await ApiFunctions.createFieldTrip({
            date: this.tripDate,
            message: this.message,
            credit: this.credit,
            room: this.selectedRoom,
            facilitators: this.facilitatorCount
          })
          console.log("createFieldTrip in vue: ", addTripResponse.data)

          this.confirm = addTripResponse
          this.errorAdding = !addTripResponse

          this.savedDate = this.tripDate
          this.savedCredit = this.credit
          this.savedRoom = this.selectedRoom
          this.savedFacilitator = this.facilitatorCount
          this.savedMessage = this.message
          // reset
          this.tripDate = this.today
          this.credit =null
          this.selectedRoom = null
          this.facilitatorCount = null
          this.message = null
        }
        catch (error) {
          this.genericError = true;
          console.log("catch condition 1")
        } 
      }
}



  }
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
#box2 {
  padding: 10px;
  background-color: #ffffff;
  border-style: solid;
  border-color: #00e676;
  font-size: 15pt;
  align-self: center;
  max-width: 400px;
}
#boxDelete {
  padding: 10px;
  background-color: #ffffff;
  border-style: solid;
  border-color: #d32f2f;
  font-size: 15pt;
  align-self: center;
  max-width: 400px;
}
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}
h2 {
  padding: 5px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 15pt;
  color: #0288d1;
  font-family: Lato;
}
#errorMessage {
  color: #d32f2f;
  font-size: 14pt;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
