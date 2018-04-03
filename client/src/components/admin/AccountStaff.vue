<template>
  <!--
        v-container - Somewhat like a div, but from Vuetify
            fluid - try and expand to full length of screen
            fill-height - fill full height of screen
        v-layout - similar to above but different properties
    -->
  <v-flex ma-5>
    <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
    <div class="text-xs-center">
      <!-- this centers the contents -->

      <table class="center">
        <h1>Create Employee Accounts</h1>
        <!-- added v-models for linking to script, added placeholders -->
        <v-text-field name="username" type="text" id="username" label="Username" v-model="username" />
        <!-- items is the list of items to be displayed -->
        <!-- employeeType is the variable to save the result into -->
        <v-select v-bind:items="items" v-model="employeeType" label="Employee Type" single-line></v-select>
        <v-flex>
          <!-- grid system -->
          <v-btn type="submit" color="success" id="Submit" @click="submit">
            Submit
          </v-btn>
          <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="lengthError" v-model="lengthError">
            {{ "Usernames should be between 5 and 15 characters" }}
            <i class="material-icons">error</i>
          </v-flex>
          <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="usedError" v-model="usedError">
            {{ "This username is unavailable" }}
            <i class="material-icons">error</i>
          </v-flex>
          <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="typeError" v-model="typeError">
            {{ "An employee type must be selected" }}
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
        <h1>Delete Employee Accounts</h1>
        <v-text-field name="deleteName" type="text" id="deleteName" label="Username" v-model="deleteName" />
        <v-flex>
          <!-- grid system -->
  
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
                 <v-btn color="error" @click.stop="deleteDialog = true">Delete</v-btn>
            <v-dialog v-model="deleteDialog" max-width="250">
                <v-card>
                    <v-card-text>Are you sure you want to delete employee "{{this.deleteName}}"?</v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="error" @click="deleteBtn" @click.native="deleteDialog = false">Delete</v-btn>
                        <v-btn color="success" @click.native="deleteDialog = false">Cancel</v-btn>
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-dialog> 

        <br>
        <v-divider/>
        <br/>
        <h1>Current Employee Accounts</h1>
        <br>
        <v-layout align-center justify-center> <!-- this centers the contents -->
          <v-flex align-center xs10>
            <v-data-table light :headers="headers" :items="users" hide-actions class="elevation-1">
              <template slot="items" slot-scope="props">
                <td align="center">{{ props.item.name }}</td>
                <td  align="center">{{ props.item.type }}</td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
        <v-text name="employees" type="text" id="employees" label="employees" v-model="employees" />
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
      username: "",
      //   employeeType: "",
      lengthError: false,
      usedError: false,
      typeError: false,
      employeeType: null, // should be null until input is selected
      confirm: false,
      password: "",
      savedUser: "",
      savedType: "",
      savedPass: "",
      deleteError: false,
      deleteName: "",
      savedDeleteName: "",
      deleteConfirm: false,
      deleteDialog: "",


      // dropdown items
      items: [
        // this is for the dropdown
        { text: "Teacher" },
        { text: "Board" },
        { text: "Admin" }
      ],
      // table columns
      headers: [
        {
          text: "User Names",
          align: "center",
          sortable: true,
          value: "name"
        },
        {
          text: "Employee Type",
          align: "center",
          sortable: true,
          value: "type"
        }
      ],
      users: {} // this items is for the datatable
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      var employees = await ApiFunctions.getEmployeeList();
      var parsedData = JSON.parse(employees.data);
      this.users = parsedData.values;
    },
    async resetFields(){
      this.username = ""
      this.employeeType = null
      this.deleteName = ""
    },
    async deleteBtn() {
      // reset messages
      this.lengthError = false;
      this.usedError = false;
      this.confirm = false;
      this.typeError = false;
      this.deleteError = false;
      this.deleteConfirm = false;
      console.log("delete was pressed");
      console.log("name: ", this.deleteName);
      try {
        const deleteResponse = await ApiFunctions.createEmployeeCheck({
          username: this.deleteName,
          employeeType: ""
        });
        await console.log(deleteResponse.data);
        // alreadyUsed in this case means found which is good.
        if (deleteResponse.data === "alreadyUsed") {
          const deletedConfirm = await ApiFunctions.deleteEmployee({
            username: this.deleteName
          });
          this.savedDeleteName = this.deleteName;
          this.load();
          this.deleteConfirm = true;
          this.resetFields()
        } else {
          this.deleteError = true;
        }
      } catch (error) {
        console.log("catch condition 1");
      }
    },

    async submit() {
      // reset messages
      this.lengthError = false;
      this.usedError = false;
      this.confirm = false;
      this.typeError = false;
      this.deleteError = false;
      this.deleteConfirm = false;

      try {
        const checkResponse = await ApiFunctions.createEmployeeCheck({
          username: this.username,
          employeeType: this.employeeType.text.toLowerCase()
        });

        //     await console.log("response.data in AccountStaff.vue is: ", checkResponse.data );
        if (checkResponse.data === "tooLongOrEmpty") {
          this.lengthError = true;
          /*
  put output error on screen here. username length requirements.
  */
        } else if (checkResponse.data === "alreadyUsed") {
          this.usedError = true;

          /*
  put output error on screen here. username already used requirements.
  */
        } else if (checkResponse.data === "brown") {
          this.password = Math.floor(Math.random() * 90000) + 10000;
          try {
            const addResponse = await ApiFunctions.createEmployeeConfirm({
              username: this.username,
              employeeType: this.employeeType.text.toLowerCase(),
              password: this.password
            });
            // insert into database
            //         await console.log("response.data in AccountStaff.vue is: ", addResponse.data );
            if ((addResponse.data = true)) {
              //            console.log("user has been added (need to confirm)")
              this.confirm = true;
              // saved values prevent changes to the displayed popup.
              // the variables username and employeeType are linked to the inputs and will change if modified.
              this.savedUser = this.username;
              this.savedType = this.employeeType.text.toLowerCase();
              this.savedPass = this.password;
              this.resetFields()
              await this.load(); // refreshes the current employee table
            }
          } catch (error) {
            console.log("catch condition 1");
            this.error = error.addResponse.data.error;
          }
        } // end of add user
      } catch (error) { // end of first try
        this.typeError = true;
        console.log("catch condition 2");
      }
    }
  }
};
</script>
<style scoped>
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
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
