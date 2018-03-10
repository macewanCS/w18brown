<template>
  <!-- 
        v-container - Somewhat like a div, but from Vuetify
            fluid - try and expand to full length of screen
            fill-height - fill full height of screen
        v-layout - similar to above but different properties
    -->



    
  <div>
    <h1>Create Employee Account</h1>
    <!-- added v-models for linking to script, added placeholders -->
    <v-text-field name="username" type="text" id="username" label="Username" v-model="username" />
    <v-text-field name="type" type="type" id="type" label="Type" v-model="employeeType" />
    <!--
    <div class="flex xs6"><div tabindex="0" data-uid="734" role="combobox" class="input-group input-group--append-icon input-group--text-field input-group--select input-group--single-line primary--text"><label>Select</label><div class="input-group__input"><div class="input-group__selections" style="overflow: hidden;"><input disabled="disabled" tabindex="-1" class="input-group--select__autocomplete" style="display: none;"></div><div class="menu" style="display: inline-block;"></div><i aria-hidden="true" class="icon material-icons input-group__append-icon input-group__icon-cb">arrow_drop_down</i></div><div class="input-group__details"></div></div></div>
    -->
    <v-flex> <!-- grid system -->
        <v-btn type="submit" id="Submit" @click="submit">
            <!-- calls the login method below in scripts-->
            Submit
        </v-btn>
      
      
          <v-subheader>Employee Type</v-subheader>
     <!-- items is the list of items to be displayed -->
     <!-- dropdownType is the variable to save the result into -->
          <v-select
            v-bind:items="items" 
            v-model="dropdownType"
            label="Type"
            single-line
            bottom
          ></v-select>
  
   
<div id="app">
  <v-app id="inspire">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs6>
          <v-subheader>Standard</v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-select
            :items="items"
            v-model="e1"
            label="Select"
            single-line
          ></v-select>
        </v-flex>
        <v-flex xs6>
          <v-subheader>Standard with focus</v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-select
            :items="items"
            v-model="e2"
            label="Select"
            class="input-group--focused"
            item-value="text"
          ></v-select>
        </v-flex>
        <v-flex xs6>
          <v-subheader>Error</v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-select
            label="Select"
            :items="items"
            v-model="e3"
            :error-messages="['Please select an option']"
            item-value="text"
          ></v-select>
        </v-flex>
        <v-flex xs6>
          <v-subheader>Disabled</v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-select
            label="Select"
            :items="items"
            v-model="e4"
            disabled
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>







    </v-flex>
    <br/>
    <h1>Current Employee Accounts</h1>
    <p>To come!</p>
  </div>
</template>

<script>
// drop down menu code from https://vuetifyjs.com/en/components/selects
// This is a pre-styled object meant to be copied and used. It has been modified for use in this app.

 











//import ApiFunctions from "@/services/ApiFunctions";
import ApiFunctions from "@/services/ApiFunctions";


export default {
  data() {
    return {
      username, 
      employeeType, 
      error: null,

      dropdownType: null, // should be null until input is selected
      
      items: [
        { text: 'Teacher' },
        { text: 'Board' },
        { text: 'Admin' }
      ],

      states: [
        'teacher', 'board', 'admin'
      ],




  el: '#app',
  data () {
    return {
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ]
    }
  }
















    };
  },

  methods: {
    async submit() {
 
  //response = "Test Response";    // <-- this code wont work outside of the export default scope. It does work here. 

   //   console.log("In AccountStaff.vue file:   username: ", this.username, "type: ", this.employeeType)
   //   console.log("submit button was clicked");
   //   console.log("username and length: ", this.username, this.username.length)

      try {
        const checkResponse = await ApiFunctions.createEmployeeCheck({
          username: this.username,
          employeeType: this.employeeType
        })
        
        await console.log("response.data in AccountStaff.vue is: ", checkResponse.data );

        if (checkResponse.data === "tooLongOrEmpty") {

  /*
  put output error on screen here. username length requirements.
  */

        }
        else if (checkResponse.data === "alreadyUsed") {

  /*
  put output error on screen here. username already used requirements.
  */
          
        }
        else if (checkResponse.data === "brown") {

          try {
            const addResponse = await ApiFunctions.createEmployeeConfirm({
              username: this.username,
              employeeType: this.employeeType,
              password: "brown" //////////----------------------------------------------- this default password should be replaced.
            })

            await console.log("response.data in AccountStaff.vue is: ", addResponse.data );

            if (addResponse.data = true) {
              console.log("user has been added (need to confirm)")
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
  insert into database
      */

  }
}

     
  




/*
    try {
      const response = await ApiFunctions.createEmployee({
        username: this.username,
        employeeType: this.employeeType
      });

      await console.log("create employee response.data is: ", response.data);


      if (response.data == "admin"){

        console.log("admin detected")
        this.$router.push({
          name: 'dashboardadmin'
        })
      } 

      
      } catch (error) {
        console.log("catch condition")
        this.error = error.response.data.error;
      }
    }*/
    
  
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
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}

</style>
