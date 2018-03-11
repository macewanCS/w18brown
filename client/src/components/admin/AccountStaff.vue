<template>
  <!-- 
        v-container - Somewhat like a div, but from Vuetify
            fluid - try and expand to full length of screen
            fill-height - fill full height of screen
        v-layout - similar to above but different properties
    -->


  <v-flex ma-5> <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->

    <div class="text-xs-center"> <!-- this centers the contents -->

      <h1>Create Employee Account</h1>
      <!-- added v-models for linking to script, added placeholders -->
      <v-text-field name="username" type="text" id="username" label="Username" v-model="username" />
    <!--
      <v-text-field name="type" type="type" id="type" label="Type" v-model="employeeType" />
    -->
      <!--
      <div class="flex xs6"><div tabindex="0" data-uid="734" role="combobox" class="input-group input-group--append-icon input-group--text-field input-group--select input-group--single-line primary--text"><label>Select</label><div class="input-group__input"><div class="input-group__selections" style="overflow: hidden;"><input disabled="disabled" tabindex="-1" class="input-group--select__autocomplete" style="display: none;"></div><div class="menu" style="display: inline-block;"></div><i aria-hidden="true" class="icon material-icons input-group__append-icon input-group__icon-cb">arrow_drop_down</i></div><div class="input-group__details"></div></div></div>
      -->
        <!-- items is the list of items to be displayed -->
        <!-- dropdownType is the variable to save the result into -->
      <v-select
        v-bind:items="items" 
        v-model="employeeType"
        label="Employee Type"
        single-line
      ></v-select>
      <v-flex> <!-- grid system -->
      
        <v-btn type="submit" id="Submit" @click="submit">
            <!-- calls the login method below in scripts-->
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

      </v-flex>
      <br/>
      <v-layout align-center justify-center> <!-- this centers the contents -->
          <v-flex id="box2" class="text-xs-center" mt-2 v-if="confirm" v-model="confirm">
            <h2>User Created <i class="material-icons">check_circle</i></h2>
            Username:  {{this.username}}
            <br>Employee Type:  {{this.employeeType.text}}
            <br>Temporary Password: {{this.password}}
            </v-flex>
      </v-layout>
 <br> <br>
      <v-divider/>
      <br/>
      <h1>Current Employee Accounts</h1>

<br>


  <v-data-table
    :headers="headers"
    :items="users"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
    </template>
  </v-data-table>














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
      employees: "",
      employeeType: null, // should be null until input is selected
      confirm: false,
      password: "red",
      // dropdown items
      items: [
        { text: 'Teacher' },
        { text: 'Board' },
        { text: 'Admin' }
      ]
      ,
      // table columns
      headers: [
        {
          text: 'User Names',
          align: 'center',
          sortable: true,
          value: 'name'
        },
        { text: 'Employee Type', 
          align: 'center',
          sortable: true,
          value: 'type' },
      ],
      users: {}
      
      /* example row
      {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          }
      */
      
  

    };
  },

  methods: {
    async submit() {
 
      // reset messages

      this.lengthError = false
      this.usedError = false
      this.confirm = false


  //response = "Test Response";    // <-- this code wont work outside of the export default scope. It does work here. 

      console.log("In AccountStaff.vue file:\nusername: ", this.username, "\ntype: ", this.employeeType.text.toLowerCase())
      console.log("submit button was clicked");


      var employees = await ApiFunctions.getEmployeeList();
     // console.log(employees.data.values)
      this.employees = JSON.parse(employees)
      console.log("parsed: ", this.employees)
      this.users = this.employees
      console.log("type of employees: ", typeof(this.employees))


    //  this.users = employees.data.values
   
    //  console.log("Dropdown type: ", this.dropdownType.text.toLowerCase()  );
      
   //   console.log("username and length: ", this.username, this.username.length)
  

      try {
        const checkResponse = await ApiFunctions.createEmployeeCheck({
          username: this.username,
          employeeType: this.employeeType.text.toLowerCase()
        })
        









        await console.log("response.data in AccountStaff.vue is: ", checkResponse.data );

        if (checkResponse.data === "tooLongOrEmpty") {
          this.lengthError = true;
  /*
  put output error on screen here. username length requirements.
  */

        }
        else if (checkResponse.data === "alreadyUsed") {
          this.usedError = true;


  /*
  put output error on screen here. username already used requirements.
  */
          
        }
        else if (checkResponse.data === "brown") {
          this.password = checkResponse.data
          try {
            const addResponse = await ApiFunctions.createEmployeeConfirm({
              username: this.username,
              employeeType: this.employeeType.text.toLowerCase(),
              password: "brown" //////////----------------------------------------------- this default password should be replaced.
           })
        
            // insert into database
            await console.log("response.data in AccountStaff.vue is: ", addResponse.data );

            if (addResponse.data = true) {
              console.log("user has been added (need to confirm)")
              this.confirm = true
            }
          }

          catch (error) {
            console.log("catch condition")
            this.error = error.addResponse.data.error;
          } 

        } // end of add user 

      } // end of first try
      catch (error) {
        console.log("catch condition")
        this.error = error.checkResponse.data.error;
      } 


  
      /*
      */

  }
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
