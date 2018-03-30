<template>
    <v-tooltip left>
        <div v-on:click.stop="clicked" slot="activator">
            <v-card hover v-bind:style="{height: myProp.height}" v-bind:color="myProp.color" slot="activator" class="facilitator" v-bind:class="{fieldTrip : isFieldTrip}">
                {{myProp.name}}
            </v-card>
        </div>
        <span class="tooltips">
            <v-card class="tooltips">
                <v-card-text>
                    <b>{{myProp.name.valueOf() == "free" ? "Available for Reservations" : "Reserved by: " + myProp.name}}</b><br> Start Time: {{myProp.startTime}}<br> End Time: {{myProp.endTime}}
                </v-card-text>
            </v-card>
        </span>
    </v-tooltip>
</template>
<script>
export default {
  data() {
    return {
      isFieldTrip: false
    };
  },
  props: {
    myProp: {}
  },
  created() {
    this.checkFieldTrip();
  },
  methods: {
    clicked() {
      this.$emit("clicked", this.myProp);
    },
    checkFieldTrip() {
      if (this.myProp.isFieldTrip) {
      }
    }
  }
};
</script>
<style>
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
.fieldTrip {
  width: 168px;
  max-width: 168px;
}
</style>
