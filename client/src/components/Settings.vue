<template>
    <v-tabs fixed-tabs dark>
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
                <h3>Year Start Date
                    <input id="yearStart" type="date" v-model="startDate">
                </h3>

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
      requiredHours: ""
    };
  },
  created() {
    this.updateSettings();
  },
  methods: {
    async updateSettings() {
      try {
        const test = await ApiFunctions.getSettings();
        let settings = await test.data;
        console.log(test);
        console.log(settings);
        this.block1Start = settings[0];
        this.block1End = settings[1];
        this.block2Start = settings[2];
        this.block2End = settings[3];
        this.block3Start = settings[4];
        this.block3End = settings[5];
        this.startDate = this.changeDate(settings[6]);
      } catch (error) {
        console.log("catch condition");
        this.error = error.response.data.error;
      }
    },
    changeDate(dateString) {
        var dashDate = dateString.replace(/\//g, "-");
        //console.log(dashDate);
        return(dashDate);
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

/*
For table centering in IE 5.5
body {text-align:center;}
*/
</style>
