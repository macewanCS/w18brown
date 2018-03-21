<template>
    <v-container class="contentContainer">
        <h1>Upcoming Reservations</h1>
        <v-data-table :headers="headers" :items="futureReservations">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.date }}</td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.startTime }}</td>
                <td>{{ props.item.endTime }}</td>
                <td>{{ props.item.reservationID }}</td>
                <td>{{ props.item.room }}</td>
            </template>
            <template slot="no-data">
                <v-alert :value="true" color="error" icon="warning">
                    Sorry, nothing to display here :(
                </v-alert>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
//Note for Bruce to bring up to Peter:  Need to get room from the getReservationByFamily.
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
          text: "reservationID",
          value: "reservationID"
        },
        {
          text: "Room",
          value: "room"
        }
      ],
      futureReservations: []
    };
  },
  computed: {
    ...mapState(["accountID"]) //Can obtain accountID by using this.accountID now.
  },
  async mounted() {
    this.getFutureReserves();
    console.log("Hello", this.futureReservations);
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
    }
  }
};
</script>

<style scoped>
.contentContainer {
  max-width: 800px;
}
</style>
