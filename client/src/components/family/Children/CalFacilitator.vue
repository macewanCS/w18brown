<template>
  <v-tooltip left>
    <div v-on:click.stop="clicked" slot="activator">
      <v-card hover v-bind:style="{height: myHeight}" v-bind:color="isFieldTrip ? 'blue': myProp.color" slot="activator" class="facilitator" v-bind:class="{fieldTrip : isFieldTrip}">
        {{myName}}
      </v-card>
    </div>
    <span class="tooltips">
      <v-card class="tooltips">
        <v-card-text>
          <b>{{myName}}</b><br>{{startTime}}<br>{{endTime}}
        </v-card-text>
      </v-card>
    </span>
  </v-tooltip>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    myProp: {},
    isFieldTrip: {}
  },
  created() {
  },
  computed: {
    myHeight: function() {
      if (this.isFieldTrip) {
        return "735px";
      } else {
        return this.myProp.height;
      }
    },
    myName: function() {
      if (this.isFieldTrip) {
        return "Field Trip";
      } else if (this.myProp.name.valueOf() == "free") {
        return "Free";
      } else {
        return "Reserved by: " + this.myProp.name;
      }
    },
    startTime: function() {
      if (this.isFieldTrip) {
        return ""
      } else {
        return "Start Time: " + this.myProp.startTime
      }
    },
    endTime: function() {
      if (this.isFieldTrip) {
        return ""
      } else {
        return "End Time: " + this.myProp.endTime
      }
    }
  },
  methods: {
    clicked() {
      if (this.isFieldTrip) {
        this.$emit("fclicked", this.myFieldTrip)
      } else {
        this.$emit("clicked", this.myProp);
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
  font-size: 8pt;
}
.fieldTrip {
  min-width: 164px;
  width: 164px;
  max-width: 164px;
  height: 740px;
  z-index: 3;
  background-color: aliceblue;
}
.textSize{
  font-size: 5pt;
}
</style>
