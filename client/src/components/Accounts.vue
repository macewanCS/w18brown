<template>
    <div>
        <v-btn fab dark small color="green" @click="addFacilitator">
            +
        </v-btn>

        <ul v-for="fac in facilitators" v-bind:key="fac">
            <v-divider />
            <Facilitator> </Facilitator>
        </ul>
    </div>
</template>

<script>
import Facilitator from "@/components/Account/Facilitator.vue";
var facCounter = 1;

export default {
  data() {
    return {
      facilitators: [""]
    };
  },
  methods: {
    addFacilitator: function() {
      this.facilitators.push("");
    }
  },
  components: {
    Facilitator
  }
};
</script>

<style>

</style>
