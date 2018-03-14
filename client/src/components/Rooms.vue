<template>
  <v-flex ma-5>
    <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
    <div class="text-xs-center">
      <!-- this centers the contents -->

      <table class="center">
        <h1>Create Rooms</h1>
        <!-- added v-models for linking to script, added placeholders -->
        <v-text-field name="u=roomNameField" type="text" id="roomNameField" label="Room Name" v-model="roomNameField" />

        <v-flex>
          <!-- grid system -->
          <v-btn type="submit" color="success" id="Submit" @click="submit">
            Submit
          </v-btn>

          <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="lengthError" v-model="lengthError">
            {{ "Room Name should be between 3 and 10 characters" }}
            <i class="material-icons">error</i>
          </v-flex>
          <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="usedError" v-model="usedError">
            {{ "This room already exists" }}
            <i class="material-icons">error</i>
          </v-flex>

        </v-flex>
        <br/>
        <v-layout align-center justify-center>
          <!-- this centers the contents -->
          <v-flex id="box2" class="text-xs-center" mt-2 v-if="confirm" v-model="confirm">
            <h2>User Created
              <i class="material-icons">check_circle</i>
            </h2>
            Username: {{this.savedUser}}
            <br>Employee Type: {{this.savedType}}
            <br>Temporary Password: {{this.savedPass}}
          </v-flex>
        </v-layout>

        <br>
        <v-divider/>
        <br/>
        <h1>Delete Rooms</h1>
        <v-text-field name="deleteRoom" type="text" id="deleteRoom" label="Room Name" v-model="deleteRoom" />
        <v-flex>
          <!-- grid system -->
          <v-btn type="deleteBtn" id="deleteBtn" color="error" @click="deleteBtn">
            <!-- calls the login method below in scripts-->
            Delete
          </v-btn>

          <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="deleteError" v-model="deleteError">
            {{ "Usernames not found" }}
            <i class="material-icons">error</i>
          </v-flex>
        </v-flex>
        <br>
        <v-layout align-center justify-center>
          <!-- this centers the contents -->

          <v-flex id="boxDelete" class="text-xs-center" mt-2 v-if="deleteConfirm" v-model="deleteConfirm">
            <h2>User Deleted</h2>
            Username: {{this.savedDeleteName}}
          </v-flex>
        </v-layout>
        <br>
        <v-divider/>
        <br/>
        <h1>Current Rooms</h1>
        <br>
        <v-flex align-center>
          <v-data-table light :headers="headers" :items="rooms" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
              <td class="text-xs-right">{{ props.item.roomName }}</td>
            </template>
          </v-data-table>
        </v-flex>
        <v-text name="employees" type="text" id="employees" label="employees" v-model="employees" />

      </table>
    </div>
  </v-flex>
</template>
<script>
import ApiFunctions from "@/services/ApiFunctions";
export default {
  data() {
    return {
      roomNameField: "",
      deleteRoom: "",
      savedDeleteRoom: "",

      //   employeeType: "",
      lengthError: false,
      usedError: false,
      confirm: false,
      password: "red",
      savedUser: "",
      savedType: "",
      savedPass: "",
      deleteError: false,
      deleteName: "",
      deleteConfirm: false,

      // table columns
      headers: [
        {
          text: "Room Names",
          align: "center",
          sortable: true,
          value: "roomName"
        }
      ],
      rooms: {} // this items is for the datatable
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      var roomResponse = await ApiFunctions.getRoomList();
      var parsedData = JSON.parse(roomResponse.data);
      this.rooms = parsedData.values;
    },
    async submit() {
      // reset messages
      this.lengthError = false;
      this.usedError = false;
      this.confirm = false;
      this.deleteError = false;
      this.deleteConfirm = false;
      if (this.roomNameField.length < 3 || this.roomNameField.length > 10) {
        this.lengthError = true;
      } else {
        try {
          const addResponse = await ApiFunctions.addRoom({
            roomName: this.roomNameField
          });
          this.load();
        } catch (error) {
          console.log("catch condition 1");
        }
      }
    },
    async deleteBtn() {
      // reset messages
      this.lengthError = false;
      this.usedError = false;
      this.confirm = false;
      this.typeError = false;
      this.deleteError = false;
      this.deleteConfirm = false;
      try {
        console.log("sending to ApiFunctions: ", this.deleteRoom);
        const deletedConfirm = await ApiFunctions.deleteRoom({
          roomIn: this.deleteRoom
        });
        this.savedDeleteRoom = this.deleteName;
        this.load();
        //   this.deleteConfirm = true

        if ((this.deletedConfirm = false)) {
          this.deleteError = true;
        }
      } catch (error) {
        console.log("catch condition 1");
      }
    }
  }
};
</script>
<style scoped>
.center {
  min-width: 500px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
#box {
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 5px 5px #bdbdbd;
  border-style: solid;
  border-color: #bdbdbd;
  align-self: center;
  max-width: 500px;
}
#box2 {
  padding: 10px;
  background-color: #ffffff;
  border-style: solid;
  border-color: #00e676;
  font-size: 15pt;
  align-self: center;
  max-width: 400px;
}
#boxDelete {
  padding: 10px;
  background-color: #ffffff;
  border-style: solid;
  border-color: #d32f2f;
  font-size: 15pt;
  align-self: center;
  max-width: 400px;
}
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}
h2 {
  padding: 5px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 15pt;
  color: #0288d1;
  font-family: Lato;
}
#errorMessage {
  color: #d32f2f;
  font-size: 14pt;
}
</style>
