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
                            <input id="b1Start" type="time">
                        </td>

                        <td>End Time</td>
                        <td>
                            <input id="b1End" type="time">
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
                            <input id="b2Start" type="time">
                        </td>

                        <td>End Time</td>
                        <td>
                            <input id="b2End" type="time">
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
                            <input id="b3Start" type="time">
                        </td>

                        <td>End Time</td>
                        <td>
                            <input id="b3End" type="time">
                        </td>
                    </tr>
                </table>
                <h2>Date Settings</h2>
                <h3>Year Start Date
                    <input id="yearStart" type="date">
                </h3>

            </v-tab-item>
            <v-tab-item key="tab2">
                fffffff
            </v-tab-item>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: null
    };
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
