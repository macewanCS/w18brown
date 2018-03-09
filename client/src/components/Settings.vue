<template>
    <v-tabs fixed-tabs dark id="allTabs">
        <v-tab key="tab1">
            Date/Time Settings
        </v-tab>
        <v-tab key="tab2">
            Other Settings
        </v-tab>

        <v-tabs-items id="content">
            <v-tab-item key="tab1">

                <h2>Date/Time Settings</h2>
                <br>
                <h3>Block Times</h3>
                <table class="center">
                    <tr>
                        <th>
                            <h3>Block 1</h3>
                        </th>
                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td>
                            <input id="b1Start" type="time" v-model="block1Start">
                        </td>

                        <td>End Time</td>
                        <td>
                            <input id="b1End" type="time" v-model="block1End">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Block 2</h3>
                        </th>
                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td>
                            <input id="b2Start" type="time" v-model="block2Start">
                        </td>

                        <td>End Time</td>
                        <td>
                            <input id="b2End" type="time" v-model="block2End">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Block 3</h3>
                        </th>
                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td>
                            <input id="b3Start" type="time" v-model="block3Start">
                        </td>

                        <td>End Time</td>
                        <td>
                            <input id="b3End" type="time" v-model="block3End">
                        </td>
                    </tr>
                </table>
                <h2>Date Settings</h2>
                <h3>System Start Date
                    <input id="yearStart" type="date" v-model="startDate">
                    <!-- would like to wrap this next line. perhaps in a box -->
                    <p>The start date must be set once. It marks the beginning of the system and is used to determine when to start requiring facilitation hours.</p>
                </h3>
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
            </v-tab-item>
            <v-tab-item key="tab2">
                fffffff
            </v-tab-item>
        </v-tabs-items>
    </v-tabs>
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
      applyDialog: "",
      cancelDialog: ""
    };
  },
  created() { // Created = run these things upon the page fully loading
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
    /*

    */
    async pullSettings() {
      try {
        const inData = await ApiFunctions.getSettings(); // inData hold the array from getSettings
        let settings = await inData.data;
        // Testing logs.  Feel free to explore in the Inspect, and see what this data is made out of.
        console.log(test);
        console.log(settings);
        if (settings.length == 8) { // Sets all the data to the settings obtained from the server.
          this.block1Start = settings[0];
          this.block1End = settings[1];
          this.block2Start = settings[2];
          this.block2End = settings[3];
          this.block3Start = settings[4];
          this.block3End = settings[5];
          this.startDate = this.changeDate(settings[6]);
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

<style>
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

/*
For table centering in IE 5.5
body {text-align:center;}
*/
</style>
