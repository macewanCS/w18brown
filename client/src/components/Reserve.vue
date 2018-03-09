<template>
<!-- Begin Calendar -->
        <v-container id="calendar" grid-list-md text-xs-center >
          <!-- Row 1: Header -->
          <v-layout row class="cal-header">
            <v-flex md1 class="cal-times">

            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark>
                <v-card-text>
                  Monday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark>
                <v-card-text>
                  Tuesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark>
                <v-card-text>
                  Wednesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark>
                <v-card-text>
                  Thursday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3>
              <v-card color="blue-grey" dark>
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
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text class="block-time">
                  Block 1
                  <br>Insert Time
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-layout row>
                  <v-flex class="test">
                    <v-card hover wrap v-for="fac in MonB1" :key="fac" v-bind:style="{height: fac.height}" class="facilitator">
                      {{fac.name}} FFFFFFFFFFFFF
                    </v-card>
                  </v-flex>
                  <v-flex>
                    <v-card hover v-for="fac in MonB2" :key="fac" v-bind:style="{height: fac.height}" class="facilitator">
                      {{fac.name}}
                    </v-card>
                  </v-flex>
                  <v-flex>
                    <v-card hover v-for="fac in MonB3" :key="fac" v-bind:style="{height: fac.height}" class="facilitator">
                      {{fac.name}}
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex xs3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Tuesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Wednesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Thursday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Friday
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- Row 3: Block 2 -->
          <v-layout row class="cal-block">
            <v-flex md1 class="cal-times">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text class="block-time">
                  Block 2
                  <br> Insert Time
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Monday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Tuesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Wednesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Thursday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Friday
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- Row 4: Block 3 -->
          <v-layout row class="cal-block">
            <v-flex md1 class="cal-times">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text class="block-time">
                  Block 3
                  <br> Insert Time
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Monday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Tuesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Wednesday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Thursday
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md3 class="cal-block-col">
              <v-card color="blue-grey" dark class="cal-block-day">
                <v-card-text>
                  Friday
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- End Calendar -->

</template>

<script>
export default {
  data() {
    return {
      MonB1: [
        { name: "test", height: "100px" },
        { name: "test1", height: "100px" }
      ],
      MonB2: [
        { name: "Free", height: "225px" }
      ],
      MonB3: [
        { name: "Free", height: "225px" }
      ]
    };
  },
  components: {}
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
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}
#calendar {
  background-color: red;
  min-width: 1000px; 
  max-width: 1000px;
}
.cal-block {
  height: 300px;
  max-height: 300px;
  min-height: 300px;
  background-color: purple;
}
.cal-block-col {
  background-color: pink;
}
.cal-block-day {
  min-height: 100%;
  max-width: 300px;
  color: red;
  padding: 5px;
}
.cal-times {
  min-width: 80px;
  max-width: 80px;
}
.block-time {
  text-align: center;
  padding-top: 100%;
  padding-bottom: 100%;
}
.facilitator {
  margin-top: 2px;
  width: 50px;
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 10 0 auto;
}
</style>
