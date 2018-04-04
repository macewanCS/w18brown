<template>
    <v-flex ma-5>
        <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
        <div class="text-xs-center">
            <!-- this centers the contents -->
            <h1>Settings</h1>
            <br>
<br>
            <h2>Schedule Times</h2>
            <br>
            <table class="center">
                <v-flex id="box3" class="text-xs-center" mt-2>
                    <tr>
                        <h3 class="h3Settings">Morning: </h3>
                        <br>
                    </tr>
                    <tr>
                        <v-flex d-inline-flex>
                            <div>
                                <b>Start Time</b>
                                <input class="startTime" id="b1Start" type="time" v-model="block1Start">
                            </div>
                            <div>
                                <b>End Time</b>
                                <input class="endTime" id="b1End" type="time" v-model="block1End">
                            </div>
                        </v-flex>
                        <!--                         
                        <td>Start Time</td>
                        <td>
                            <input id="b1Start" type="time" v-model="block1Start">
                        </td>
                        <td>End Time</td>
                        <td>
                            
                        </td> -->
                    </tr>
                    <br>
                    <v-divider/>
                    <tr>
                        <h3 class="h3Settings">Lunch: </h3>
                        <br>
                    </tr>
                    <tr>
                        <v-flex d-inline-flex>
                            <div>
                                <b>Start Time</b>
                                <input class="startTime" id="b2Start" type="time" v-model="block2Start">
                            </div>
                            <div>
                                <b>End Time</b>
                                <input class="endTime" id="b2End" type="time" v-model="block2End">
                            </div>
                        </v-flex>
                    </tr>
                    <br>
                    <v-divider/>
                    <tr>
                        <h3 class="h3Settings">Afternoon: </h3>
                        <br>
                    </tr>
                    <tr>
                        <v-flex d-inline-flex>
                            <div>
                                <b>Start Time</b>
                                <input class="startTime" id="b3Start" type="time" v-model="block3Start">
                            </div>
                            <div>
                                <b>End Time</b>
                                <input class="endTime" id="b3End" type="time" v-model="block3End">
                            </div>
                        </v-flex>
                    </tr>
                </v-flex>
            </table>
            <br>
            <h2>System Start Date</h2>
            <!-- <input id="yearStart" type="date" v-model="startDate"> -->
            <v-layout justify-center>

            <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="startDate">
                <v-text-field slot="activator" v-model="startDate" prepend-icon="event" readonly></v-text-field>
                <v-date-picker v-model="startDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(startDate)">OK</v-btn>
                </v-date-picker>
            </v-menu>
            </v-layout>
            <br>
            <h2>Required Weekly Hours</h2>
            <v-layout justify-center >
                <v-flex xs2>
                <br>
                <v-select :items="hoursList" v-model="requiredHours" label="Required Hours"/>
                </v-flex>
            </v-layout>

            <!-- would like to wrap this next line. perhaps in a box -->
            <!-- <p>The start date must be set once. It marks the beginning of the system and is used to determine when to start requiring facilitation hours.</p>
    -->
            <br>
            <!--@click.stop is used here for triggering only when the click is let go.-->
            <v-btn color="success" @click.stop="applyDialog = true">Apply</v-btn>
            <v-btn color="error" @click.stop="cancelDialog = true">Cancel</v-btn>
            <!--Begin Dialog Boxes for Confirmation -->
            <v-dialog v-model="applyDialog" max-width="250">
                <v-card>
                    <v-card-text>Are you sure you want to apply changes?</v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="success" @click="applySettings">Yes</v-btn>
                        <v-btn color="error" @click.native="applyDialog = false">No</v-btn>
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="cancelDialog" max-width="250">
                <v-card>
                    <v-card-text>Cancel Changes?</v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="success" @click="cancelSettings">Yes</v-btn>
                        <v-btn color="error" @click.native="cancelDialog = false">No</v-btn>
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!--End Dialog Boxes for Confirmation -->
            <br>
        </div>
    </v-flex>
    <!--
            </v-tab-item>
            <v-tab-item key="tab2">
               </v-tab-item>
        </v-tabs-items>
    </v-tabs>
    -->
</template>
<script>
import ApiFunctions from "@/services/ApiFunctions";
export default {
  data() {
    return {
      block1Start: "",
      block1End: "",
      block2Start: "",
      block2End: "",
      block3Start: "",
      block3End: "",
      startDate: "",
      requiredHours: "",
      requiredMinutes: null,
      hoursList: ["0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"],
      applyDialog: "",
      cancelDialog: "",
      menu: false
    };
  },
  created() {
    // Created = run these things upon the page fully loading
    this.pullSettings();
  },
  methods: {
    /* 
        applySettings():
        Closes the confirmation box. Pulls the current data from this vue and sends it to pushSettings.
    */
    applySettings() {
      this.applyDialog = false; // close applyDialog box
      var curSettings = [
        this.block1Start,
        this.block1End,
        this.block2Start,
        this.block2End,
        this.block3Start,
        this.block3End,
        this.startDate,
        "05:00:00"
      ];
      this.pushSettings(curSettings);
    },
    /* 
        cancelSettings():
        closes the cancel dialog box and overwrites all fields by pulling settings again.
    */
    cancelSettings() {
      this.cancelDialog = false;
      this.pullSettings();
    },
    hoursToMin() {

// required hours needs to be integrated after the data table is finished.



      this.requiredMinutes = requiredHours * 60;
      console.log("required minutes input: ", this.requiredMinutes)
    },
    /*
    */
    async pullSettings() {
      try {
        const inData = await ApiFunctions.getSettings(); // inData hold the array from getSettings
        let settings = await inData.data;
        // Testing logs.  Feel free to explore in the Inspect, and see what this data is made out of.
        console.log(inData);
        console.log(settings);
        if (settings.length == 8) {
          // Sets all the data to the settings obtained from the server.
          this.block1Start = settings[0];
          this.block1End = settings[1];
          this.block2Start = settings[2];
          this.block2End = settings[3];
          this.block3Start = settings[4];
          this.block3End = settings[5];
          this.startDate = this.changeDate(settings[6]); //API returns date with /, Browser requires -
        } else {
          throw "Length of settings != 8";
        }
      } catch (error) {
        console.log("catch condition");
        this.error = error.response.data.error;
      }
    },
    changeDate(dateString) {
      var dashDate = dateString.replace(/\//g, "-"); //replaces all / with - for a date.
      //console.log(dashDate);
      return dashDate;
    },
    async pushSettings(settings) {
      try {
        await ApiFunctions.setSettings(settings);
        await this.pullSettings();
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
<style scoped>
#content {
  background-color: aliceblue;
  align-content: center;
}
table.center {
  margin-left: auto;
  margin-right: auto;
}
#allTabs {
  text-align: center;
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
h3 {
  padding: 5px;
  letter-spacing: 3px;
  font-family: Lato;
}
.startTime {
  margin-left: 5px;
  margin-right: 10px;
}
.endTime {
  margin-left: 5px;
}
.h3Settings {
  text-align: left;
  margin: 0;
  padding: 0;
}
#box3 {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 5px 5px #bdbdbd;
  border-style: solid;
  border-color: #bdbdbd;
  align-self: center;
  max-width: 500px;
}
#errorMessage {
  color: #d32f2f;
  font-size: 14pt;
}
/*
For table centering in IE 5.5
body {text-align:center;}
*/
</style>
