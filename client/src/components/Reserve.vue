<template>
  <div>
    <br>
    <h1>Create a Reservation</h1>
    <!-- Begin Calendar -->
    <v-container id="calendar" v-bind:style="{background: cal_color}" grid-list-md text-xs-center>

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
              8:00 Morning 11:00
            </div>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][0][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][0][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][0][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator"  class="facilitator">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][0][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][0][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][0][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][0][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][0][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][0][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][0][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][0][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][0][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][0][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][0][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][0][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
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
              11:00<br> Lunch
              <br>1:00
            </div>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][1][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][1][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][1][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][1][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][1][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][1][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][1][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][1][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][1][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][1][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][1][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][1][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][1][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][1][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][1][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
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
                <v-tooltip left v-for="fac in Calendar[0][2][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][2][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][2][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][2][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][2][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[1][2][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][2][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][2][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[2][2][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][2][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][2][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[3][2][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][2][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][2][1]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[4][2][2]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" @click="reserveClick">
                    {{fac.name}}s
                  </v-card>
                  <span class="tooltips">
                    <v-card class="tooltips">
                      <v-card-text>
                        <b>{{fac.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + fac.name}}</b><br> Start Time: {{fac.startTime}}<br> End Time: {{fac.endTime}}
                      </v-card-text>
                    </v-card>
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
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
      blockFree_color: "white",
      cal_color: "#BDBDBD"
    };
  },
  components: {},
  async mounted() {
    console.log("Before");
    console.log(this.Calendar);
    let myVar = await this.getReservations();
    await this.setCalendar(myVar);
    console.log(this.Calendar);
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
                this.Calendar[day][block][slot][i].color = "grey lighten-5";
              } else {
                this.Calendar[day][block][slot][i].color = "red";
              }
            }
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
  text-align: center;
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
.tooltips {
}
</style>
