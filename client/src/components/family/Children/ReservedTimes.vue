<template>
    <v-container class="contentContainer">
        <h1>Upcoming Reservations</h1>
        <v-data-table :headers="headers" :items="futureReservations" item-key="reservationID">
            <template slot="items" slot-scope="props">
                <tr @click="props.expanded = !props.expanded">
                    <td>{{ props.item.date }}</td>
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.startTime }}</td>
                    <td>{{ props.item.endTime }}</td>
                    <td>{{ props.item.room }}</td>
                    <td>{{ props.item.reservationID }}</td>
                </tr>
            </template>
            <template slot="no-data">
                <v-alert :value="true" color="info">
                    No upcoming reservations.
                </v-alert>
            </template>
            <template slot="expand" slot-scope="props">
                <v-card flat>
                    <v-btn block color="error" dark @click="cancelReservation(props.item.reservationID)">Cancel this Reservation</v-btn>
                </v-card>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
/*  Notes from Taryn:  Get rid of FABs from Create family, replace with normal buttons
    Add cards to the cardless sections of Create Family Accounts page to unify the look
    If we have time, stay consistent to the _____ built up by google by going from list --> modal(add/remove) --> Back to list
*/
import ApiFunctions from "../../../services/ApiFunctions";
import { mapState } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "Date",
          value: "date"
        },
        {
          text: "Facilitator",
          value: "name"
        },
        {
          text: "Starting at",
          value: "startTime"
        },
        {
          text: "Ending at",
          value: "endTime"
        },
        {
          text: "Room",
          value: "room"
        },
        {
          text: "reservationID",
          value: "reservationID"
        }
      ],
      futureReservations: []
    };
  },
  props: {
    updateMe: false
  },
  computed: {
    ...mapState(["accountID"]) //Can obtain accountID by using this.accountID now.
  },
  async mounted() {
    this.getFutureReserves();
    console.log("Hello", this.futureReservations);
    console.log(this.needToUpdate)
  },
  methods: {
    async getFutureReserves() {
      if (this.accountID) {
        let results = await ApiFunctions.getReservationByFamily(this.accountID);
        this.futureReservations = JSON.parse(results.data);
        console.log(this.futureReservations);
      } else {
        throw "Missing Account ID";
      }
    },
    async cancelReservation(ID) {
      console.log(ID);
      let result = await ApiFunctions.cancelReservation({ reserveID: ID });
      console.log(result);
      this.getFutureReserves();
      this.$emit("updateCal");
    }
  },
  watch: {
    updateMe: function() {
      console.log("updateMe Triggered")
        this.getFutureReserves();
    }
  }
};
</script>

<style scoped>
.contentContainer {
  max-width: 800px;
}
</style>
