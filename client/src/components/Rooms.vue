<template>
  <!-- 
        v-container - Somewhat like a div, but from Vuetify
            fluid - try and expand to full length of screen
            fill-height - fill full height of screen
        v-layout - similar to above but different properties
    -->
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
          {{ "Usernames should be between 3 and 10 characters" }}
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
            <h2>User Created <i class="material-icons">check_circle</i></h2>
            Username:  {{this.savedUser}}
            <br>Employee Type:  {{this.savedType}}
            <br>Temporary Password: {{this.savedPass}}
        </v-flex>
      </v-layout>
  
    <br>
    <v-divider/>
    <br/>

    <h1>Delete Rooms</h1>

    <v-text-field name="deleteRoom" type="text" id="deleteRoom" label="Room Name" v-model="deleteRoom" />
    <v-flex> <!-- grid system -->
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
      <v-layout align-center justify-center> <!-- this centers the contents -->
      
        <v-flex id="boxDelete" class="text-xs-center" mt-2 v-if="deleteConfirm" v-model="deleteConfirm">
            <h2>User Deleted</h2>
            Username:  {{this.savedDeleteName}}
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

    <v-text name="employees" type="text" id="employees" label="employees"  v-model="employees"/>
    
    <!-- snackbars modified from https://github.com/harryho/vue2crm/blob/master/src/components/Login.vue -->
    <!-- PLO snackbar code
      <v-snackbar v-if="lengthError" :timeout="6000" :top="true" :multi-line="mode === 'multi-line'" :vertical="mode === 'vertical'" v-model="lengthError">
        {{ "Usernames should be between 5 and 15 characters" }}
        <v-btn flat class="red--text" @click.native="lengthError = false">Close</v-btn> -->
        <!-- @click.native resets the error to false -->
        <!--
      </v-snackbar>
      -->
     </table>

    </div>
  </v-flex>

</template>

<script>
// drop down menu code from https://vuetifyjs.com/en/components/selects
// This is a pre-styled object meant to be copied and used. It has been modified for use in this app.

//import ApiFunctions from "@/services/ApiFunctions";
import ApiFunctions from "@/services/ApiFunctions";

export default {
  data() {
    return {
      roomNameField: "", 
      deleteRoom: "",





   //   employeeType: "", 
      lengthError: false,
      usedError: false,
      typeError: false,
      confirm: false,
      password: "red",
      savedUser: "",
      savedType: "",
      savedPass: "",
      deleteError: false,
      deleteName: "",
      savedDeleteName: "",
      deleteConfirm: false,


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
        console.log(this.rooms);

    }
    /*
    async deleteBtn() {

      // reset messages
      this.lengthError = false
      this.usedError = false
      this.confirm = false
      this.typeError = false
      this.deleteError = false
      this.deleteConfirm = false

      console.log("delete was pressed")
      console.log("name: ", this.deleteName)

      try {
        const deleteResponse = await ApiFunctions.createEmployeeCheck({
          username: this.deleteName,
          employeeType: ""
        })
        await console.log(deleteResponse.data)

        // alreadyUsed in this case means found which is good.
        if (deleteResponse.data === "alreadyUsed") {
          const deletedConfirm = await ApiFunctions.deleteEmployee({
          username: this.deleteName
          
          })
          this.savedDeleteName = this.deleteName
          this.load();
          this.deleteConfirm = true
        }
        else {
          this.deleteError = true;
        }
      }
      catch (error) {
        console.log("catch condition 1")
      } 

    },



    async submit() {
 
      // reset messages
      this.lengthError = false
      this.usedError = false
      this.confirm = false
      this.typeError = false
      this.deleteError = false
      this.deleteConfirm = false


      try {
        const checkResponse = await ApiFunctions.createEmployeeCheck({
          username: this.username,
          employeeType: this.employeeType.text.toLowerCase()
        })
  

   //     await console.log("response.data in AccountStaff.vue is: ", checkResponse.data );

        if (checkResponse.data === "tooLongOrEmpty") {
          this.lengthError = true;

          */
  /*
  put output error on screen here. username length requirements.
  */
/* 
        }
        else if (checkResponse.data === "alreadyUsed") {
          this.usedError = true;
 */

  /*
  put output error on screen here. username already used requirements.
  */
     /*      
        }
        else if (checkResponse.data === "brown") {
          this.password = (Math.floor(Math.random()* 10000) + 10000)
          try {
            const addResponse = await ApiFunctions.createEmployeeConfirm({
              username: this.username,
              employeeType: this.employeeType.text.toLowerCase(),
              password: this.password
           })
        
            // insert into database
   //         await console.log("response.data in AccountStaff.vue is: ", addResponse.data );

            if (addResponse.data = true) {
  //            console.log("user has been added (need to confirm)")
              this.confirm = true
              // saved values prevent changes to the displayed popup.
              // the variables username and employeeType are linked to the inputs and will change if modified.
              this.savedUser = this.username
              this.savedType = this.employeeType.text.toLowerCase()
              this.savedPass = this.password

              await this.load(); // refreshes the current employee table
            }
          }

          catch (error) {
            console.log("catch condition 1")
            this.error = error.addResponse.data.error;
          } 

        } // end of add user 
    

      } // end of first try
      catch (error) {
        this.typeError = true
        console.log("catch condition 2")

      } 

      

  }*/
}

}; 
</script>

<style>
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
