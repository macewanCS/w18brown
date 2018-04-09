<template>



  <v-flex ma-5> <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
    <div class="text-xs-center"> <!-- this centers the contents -->
      <!--Using v-content screws up the positioning.  Reverting to div to fix centering-->
      <h1>Family Dashboard </h1>
      <br>
      <h3> You are logged in as {{this.accountID}}</h3>
<br>
    <v-divider/>
<br>
      <h2>Weekly Progress</h2>
      <br>
      <v-progress-circular :size="150" :width="20" color="green" :value="percentComplete">
       <h2> {{percentComplete}}%</h2>
        </v-progress-circular>
<br>
<br>
      <table class="center">
        <v-flex id="box3" class="text-xs-center" mt-2>
          <h3> Earned Time</h3>
          Hours: {{this.earnedHours}}<br>
          Minutes: {{this.earnedMinutes}}<br>
          <br>
          <v-divider/><br>
          <h3>Required Time</h3>
          Hours: {{this.requiredHours}}<br>
          Minutes: {{this.requiredMinutes}}<br>
        </v-flex>
      </table>
    </div>
  </v-flex>
</template>

<script>
import { mapState } from "vuex"; //Gives access to the current state.
import ApiFunctions from "@/services/ApiFunctions";
export default {
  data() {
    return {
      requiredHours: null,
      requiredMinutes: null,
      minutesRaw: null,
      earnedHours: 0,
      earnedMinutes: 0,
      earnedMinRaw: 150,
      percentComplete: 0,
      studentCount: 1000,

      monday: null,
      today: null,


    };
  },
  computed: {
    ...mapState(["accountID"]) //Can obtain accountID by using this.accountID now.
  },

  
 
  async created(){
    console.log("logging")
    console.log(this.accountID)

    try {
      await this.load()
          console.log("today: ", this.today)

      this.monday = await this.getMonday(this.today)
   //   console.log("monday is...")
   //   console.log("monday ", this.monday)

      const response = await ApiFunctions.getEarnedMinutesByWeek({
        account: this.accountID,
        monday: this.monday
      })

      console.log("earned minutes: ", response.data.minutes)  
      this.earnedMinRaw = response.data.minutes
    }

    catch (error){
      console.log("catch condition in getting earned hours", error)
    }

    try {
      console.log("calling requiredMinutesWeekly with account: ", this.accountID)
      const minuteResponse = await ApiFunctions.requiredMinutesWeekly({
        account: this.accountID
      })
      console.log("minute response:", minuteResponse)
         
      console.log("minute response:", minuteResponse.data.minutes)
      this.minutesRaw = minuteResponse.data.minutes
      console.log("raw: ", this.minutesRaw)
      this.requiredHours = parseInt((this.minutesRaw / 60))
      this.requiredMinutes = parseInt((this.minutesRaw % 60))
      this.percentComplete = parseInt((this.earnedMinRaw / this.minutesRaw)*100)

      this.earnedHours = parseInt((this.earnedMinRaw / 60))
      this.earnedMinutes = parseInt((this.earnedMinRaw % 60))

      console.log("percent complete: ", this.percentComplete)

    }
    catch (error) {
      console.log("catch condition 1", error)
    }  
  },
  methods: {
    async getMonday(d) {    
      //Taken from https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
      var newDay = new Date(d.replace(/-/g, "/")); //https://stackoverflow.com/questions/7556591/javascript-date-object-always-one-day-off
      var day = newDay.getDay();
      if (day == 0) {
        return newDay;
      } else {
        var diff = newDay.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(newDay.setDate(diff));
      }
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
    async load(){
      this.today = await this.getToday()
    },
    async hoursOut(){
      console.log(this.minutesRaw)
      this.requiredHours = (this.minutesRaw / 60)
      console.log(this.requiredHours)
      this.requiredMinutes = this.minutesRaw % 60
    },
  }
}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}
#box3 {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 5px 5px #bdbdbd;
  border-style: solid;
  border-color: #bdbdbd;
  align-self: center;
  max-width: 500px;
  min-width: 200px;
}
table.center {
  margin-left: auto;
  margin-right: auto;
}
.startTime {
  margin-left: 5px;
  margin-right: 10px;
}
.endTime {
  margin-left: 5px;
}
#allTabs {
  text-align: center;
}
</style>
