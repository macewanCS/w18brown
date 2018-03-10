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
      username: "", 
   //   employeeType: "", 
      error: null,

      employeeType: null, // should be null until input is selected
      
      items: [
        { text: 'Teacher' },
        { text: 'Board' },
        { text: 'Admin' }
      ]
    };
  },

  methods: {
    async submit() {
 
  //response = "Test Response";    // <-- this code wont work outside of the export default scope. It does work here. 

        console.log("In AccountStaff.vue file:\nusername: ", this.username, "\ntype: ", this.employeeType.text.toLowerCase())
      console.log("submit button was clicked");
      
    //  console.log("Dropdown type: ", this.dropdownType.text.toLowerCase()  );
      
   //   console.log("username and length: ", this.username, this.username.length)
  

      try {
        const checkResponse = await ApiFunctions.createEmployeeCheck({
          username: this.username,
          employeeType: this.employeeType.text.toLowerCase()
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
              employeeType: this.employeeType.text.toLowerCase(),
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
