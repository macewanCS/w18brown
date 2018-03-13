<template>
  <div>
    <br>
    <h1>Create a Reservation</h1>
    <v-divider />
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
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][0][0]" :key="fac.index">
                  <div v-on:click.stop="newReserve(fac)" slot="activator">
                    <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator">
                      {{fac.name}}
                    </v-card>
                  </div>
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
                  <div v-on:click.stop="newReserve(fac)" slot="activator">
                    <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
                      {{fac.name}}
                    </v-card>
                  </div>
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
              11:50<br> Lunch
              <br>1:00
            </div>
          </v-card>
        </v-flex>
        <v-flex xs3 class="cal-block-col">
          <v-card v-bind:color="blockDay_color" light class="cal-block-day">
            <v-layout row>
              <v-flex>
                <v-tooltip left v-for="fac in Calendar[0][1][0]" :key="fac.index">
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
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
                  <div v-on:click.stop="newReserve(fac)" slot="activator">
                    <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
                      {{fac.name}}
                    </v-card>
                  </div>
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
                  <div v-on:click.stop="newReserve(fac)" slot="activator">
                    <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click.stop="newReserve">
                      {{fac.name}}
                    </v-card>
                  </div>
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
                  <div v-on:click.stop="newReserve(fac)" slot="activator">
                    <v-card hover v-bind:style="{height: fac.height}" v-bind:color="fac.color" slot="activator" class="facilitator" v-on:click="newReserve">
                      {{fac.name}}
                    </v-card>
                  </div>
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
      <v-dialog v-model="ReserveDialog" max-width="50%">
        <v-card>
          <h1 class="h1Dialog">Reserve a time</h1>
          <v-card-text>
            <v-select v-bind:items="availFacilitators" v-model="selectedFacil" label="Select a Facilitator" single-line></v-select>
            <v-layout row>
              <v-spacer />
              <v-select v-bind:items="availableTimes" v-model="selectedStartTime" label="Start-Time" single-line v-on:input="updateEndTimes"></v-select>
              <v-spacer />
              <v-select v-bind:items="availableEndTimes" v-model="selectedEndTime" label="End-Time" single-line></v-select>
              <v-spacer />
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="success" @click.native="clearDialogBoxes">Reserve</v-btn>
            <v-btn color="error" @click.native="clearDialogBoxes">Cancel</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      cal_color: "#BDBDBD",
      calendar_ready: false,
      // Below is used for new Reservations
      ReserveDialog: "",
      familyID: "",
      availFacilitators: ["Test Facilitator 001", "Test Facilitator 002"],
      selectedFacil: null,
      date: "",
      startTime: "",
      endTime: "",
      availableTimes: [],
      availableEndTimes: [],
      selectedStartTime: "",
      selectedEndTime: "",
      room: ""
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
      this.calendar_ready = true;
    },
    newReserve(origin) {
      //console.log(origin);
      this.availableTimes = this.create5MinIntervals(
        origin.startTime,
        origin.endTime
      );
      //console.log(this.availableTimes);
      this.ReserveDialog = true; //Display ReserveDialog
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
    },
    clearDialogBoxes() {
      this.ReserveDialog = false;
      this.selectedStartTime = "";
      this.selectedEndTime = "";
      this.availableTimes = [];
      this.availableEndTimes = [];
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
h1Dialog {
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
</style>
