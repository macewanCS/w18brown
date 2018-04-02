<template>
  <!--
        v-container - Somewhat like a div, but from Vuetify
            fluid - try and expand to full length of screen
            fill-height - fill full height of screen
        v-layout - similar to above but different properties
    -->
  <v-flex ma-5>
    <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
    <div class="text-xs-center">
      <!-- this centers the contents -->

      <table class="center">
        <h1>Create Field Trip</h1>
        <br>

        <h3>Date</h3>

        <v-flex xs12>

          <v-layout justify-center>
            <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="startDate">
                <v-text-field slot="activator" v-model="tripDate" prepend-icon="event" readonly></v-text-field>
                <v-date-picker v-model="tripDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(tripDate)">OK</v-btn>
                </v-date-picker>
            </v-menu>
          </v-layout>

          <v-select v-bind:items="items" v-model="credit" label="Hours of credit" single-line></v-select>

          <v-select :items="availRooms" v-model="selectedRoom" label="Rooms" single-line />

          <v-select v-bind:items="items" v-model="facilitatorCount" label="Facilitators" single-line></v-select>

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

        </v-flex>
      <br/>
        <v-layout align-center justify-center>
          <v-flex id="box2" class="text-xs-center" mt-2 v-if="confirm" v-model="confirm">
            <h2>Field Trip Created
              <i class="material-icons">check_circle</i>
            </h2>
            Username: {{this.savedUser}}
            <br>Employee Type: {{this.savedType}}
            <br>Temporary Password: {{this.savedPass}}
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
      message: "",
      credit: null,
      facilitatorCount: null,
      genericError: false,

      availRooms: [],

      //   employeeType: "",
      confirm: false,

      // dropdown items
      items: [
        // this is for the dropdown
        { text: "1" },
        { text: "2" },
        { text: "3" },
        { text: "4" },
        { text: "5" },
        { text: "6" },
        { text: "7" },
        { text: "8" },
        { text: "9" },
        { text: "10" },
        { text: "11" },
        { text: "12" }
      ],
    };
  },
  async mounted() {
    this.getRoomList();
  },
  methods: {
 

    async getRoomList() {
      let unparsed = await ApiFunctions.B_RoomList();
      this.availRooms = await unparsed.data;
    },

    async submit() {
      this.genericError = true;

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
