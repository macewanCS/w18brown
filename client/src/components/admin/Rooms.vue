<template>
  <v-flex ma-5> <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
    <div class="text-xs-center"> <!-- this centers the contents -->


     <table class="center">

      <h1>Create Rooms</h1>

      <!-- added v-models for linking to script, added placeholders -->
      <v-text-field name="u=roomNameField" type="text" id="roomNameField" label="Room Name" v-model="roomNameField" />



      <v-flex> <!-- grid system -->

        <v-btn type="submit" color="success" id="Submit" @click="submit">
            Submit
        </v-btn>
        
        <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="lengthError" v-model="lengthError">
          {{ "Room Name should be between 3 and 15 characters" }}
          <i class="material-icons">error</i>
        </v-flex>

        <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="usedError" v-model="usedError">
          {{ "This room already exists" }}
          <i class="material-icons">error</i>
        </v-flex>


      </v-flex>

      <br/>

      <v-layout align-center justify-center> <!-- this centers the contents -->
        <v-flex id="box2" class="text-xs-center" mt-2 v-if="confirm" v-model="confirm">
            <h2>Room Created <i class="material-icons">check_circle</i></h2>
            Room Name:  {{this.savedRoomAdd}}
        </v-flex>
      </v-layout>
  
    <br>
    <v-divider/>
    <br/>

    <h1>Delete Rooms</h1>

    <v-text-field name="deleteRoom" type="text" id="deleteRoom" label="Room Name" v-model="deleteRoom" />
    <v-flex> <!-- grid system -->


             <v-btn color="error" @click.stop="deleteDialog = true">Delete</v-btn>
            <v-dialog v-model="deleteDialog" max-width="250">
                <v-card>
                    <v-card-text>Are you sure you want to delete room "{{this.deleteRoom}}"?</v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="error" @click="deleteBtn" @click.native="deleteDialog = false">Delete</v-btn>
                        <v-btn color="success" @click.native="deleteDialog = false">Cancel</v-btn>
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-dialog> 


       
    




      
      <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="deleteError" v-model="deleteError">
        {{ "This room was not found" }}
        <i class="material-icons">error</i>
      </v-flex>

        <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="deleteLengthError" v-model="deleteLengthError">
          {{ "Room Name should be between 3 and 15 characters" }}
          <i class="material-icons">error</i>
        </v-flex>

    </v-flex>
  <br>
      <v-layout align-center justify-center> <!-- this centers the contents -->
      
        <v-flex id="boxDelete" class="text-xs-center" mt-2 v-if="deleteConfirm" v-model="deleteConfirm">
            <h2>Room Deleted</h2>
            Room Name:  {{this.savedDeleteRoom}}
        </v-flex>
      </v-layout>






   
    <br>
    <v-divider/>
    <br/>

    <h1>Current Rooms</h1>

    <br>

    <v-flex align-center>
        <v-data-table light
            :headers="headers"
            :items="rooms"    
            hide-actions
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
              <td class="text-xs-right">{{ props.item.roomName }}</td>
            </template>
        </v-data-table>
    </v-flex>
    
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
      savedRoomAdd: "",
      deleteConfirm: false,
      confirm: false,
      lengthError: false,
      usedError: false,
      deleteError: false,
      deleteLengthError: false,
      deleteDialog: "",
      // table columns
      headers: [
        {
          text: 'Room Names',
          align: 'center',
          sortable: true,
          value: 'roomName'
        }
      ],
      rooms: {} // this items is for the datatable
    };
  },
  created() {
      this.load();
  },
  methods: {
    async load(){
        var roomResponse = await ApiFunctions.getRoomList();
        var parsedData = JSON.parse(roomResponse.data);
        this.rooms = parsedData.values;
    },
    async resetFields(){
      this.roomNameField = ""
      this.deleteRoom = ""
    },
    async resetMessages(){
      this.lengthError = false
      this.usedError = false
      this.confirm = false
      this.deleteError = false
      this.deleteConfirm = false
      this.deleteLengthError = false
    },
    async submit() {
      this.resetMessages();
      
      if (this.roomNameField.length < 3 || this.roomNameField.length > 15) {
        this.lengthError = true
      }
      else {
        try {
          const addResponse = await ApiFunctions.addRoom({
            roomName: this.roomNameField
          })
          this.load();
          this.savedRoomAdd = this.roomNameField;
          console.log(addResponse.data)
          this.confirm = addResponse.data;
          this.usedError = !addResponse.data; // false add changed to true error

          if (this.confirm == true){
            this.resetFields()
          }
          if (this.usedError == true) {
            console.log("already used")
            this.confirm = false
          }

        }
        catch (error) {
          console.log("catch condition 1")
        } 
      }
    },
    async deleteBtn() {
      this.resetMessages();
      if (this.deleteRoom.length < 3 || this.deleteRoom.length > 15) {
        this.deleteLengthError = true;
      }
      else {
        try {
            const deletedConfirm = await ApiFunctions.deleteRoom({
            roomIn: this.deleteRoom
          })
            this.deleteError = !deletedConfirm.data
            this.savedDeleteRoom = this.deleteRoom
            this.load();
          if (this.deleteError == false){
            this.deleteConfirm = true;
            this.resetFields()

          }
          
        }
        catch (error) {
          console.log("catch condition 1")
        } 
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
  border-color: #00E676;
  font-size: 15pt;
  align-self: center;
  max-width: 400px;
}
#boxDelete {
  padding: 10px;
  background-color: #ffffff;
  border-style: solid;
  border-color: #D32F2F;
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
color: #D32F2F;
font-size: 14pt;
}
</style>
