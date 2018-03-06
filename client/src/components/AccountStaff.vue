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
                <v-text-field name="type" type="type" id="type" label="Type" v-model="type" />
                <v-flex> <!-- grid system -->
                    <v-btn type="submit" id="Submit" @click="submit">
                        <!-- calls the login method below in scripts-->
                        Submit
                    </v-btn>
                    <p>Return temporary password here</p>
                </v-flex>
            </div>
 
</template>

<script>
import AuthenticationService from "@/services/ApiFunctions";

export default {
  data() {
    return {
      username, // ** to update
      type, // ** to update
      error: null // ** to update
    };
  },
  methods: {
    async submit() {
      console.log("In AccountStaff.vue file:   username: ", this.username, "type: ", this.type)
      console.log("createEmployee button was clicked");
      
      try {
        const response = await AuthenticationService.createEmployee({
          username: this.username,
          type: this.type
        });
/*
        await console.log("response.data is: ", response.data);


        if (response.data == "admin"){

          console.log("admin detected")
          this.$router.push({
            name: 'dashboardadmin'
          })
        } else if (response.data == "family"){

          console.log("family detected")
          this.$router.push({
            name: 'dashboardfamily'
          })
        } else {

          console.log(typeof(response.data))
          console.log("Login Failed!")
          //
          //  Add redirect to error page?
          //
          this.$router.push({
              name: 'underconstruction'
            })
          }
*/
       
      } catch (error) {
        console.log("catch condition")
        this.error = error.response.data.error;
      }
      
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
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}

</style>
