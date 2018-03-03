<!-- Some import code was from the following tutorial.
https://www.youtube.com/watch?v=Fa4cRMaTDUI -->

<template>
    <!-- 
        v-container - Somewhat like a div, but from Vuetify
            fluid - try and expand to full length of screen
            fill-height - fill full height of screen
        v-layout - similar to above but different properties
    -->
    <v-container fluid fill-height>
        <v-layout align-center justify-center>

            <div id="box">
                <h1>Caraway Volunteer <br> Log-In Page</h1>
                <!-- added v-models for linking to script, added placeholders -->
                <v-text-field name="username" type="text" id="username" label="Username" v-model="username" />
                <v-text-field name="password" type="password" id="password" label="Password" v-model="password" />

                <v-flex>
                    <v-btn id="forgotPassword">Forgot your Password?</v-btn>
                    <v-btn type="submit" id="login" @click="login">
                        <!-- calls the login method below in scripts-->
                        Login
                    </v-btn>
                </v-flex>
            </div>

        </v-layout>
    </v-container>
</template>



<script>
// ** script is the controller **
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      username, // ** to update
      password, // ** to update
      error: null // ** to update
    };
  },
  methods: {
    async login() {
      console.log("In Login.vue file:   username: ", this.username, "password: ", this.password)
      console.log("login button was clicked");
      
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        });

        await console.log("response.data is: ", response.data);

        if (response.data == "incorrect"){
          console.log(typeof(response.data))
          console.log("this should not go to the admin page.")
        } else if (response.data == "admin"){

          console.log("admin detected")
          this.$router.push({
            name: 'admin'
          })
        } else if (response.data == "family"){

          console.log("family detected")
          this.$router.push({
            name: 'family'
          })
        } else if (response.data == "teacher"){

          console.log("teacher detected")
          this.$router.push({
            name: 'teacher'
          })
        } else if (response.data == "board"){

          console.log("board detected")
          this.$router.push({
            name: 'board'
          })
        }

      
        /*
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'admin'
        })*/
        
      } catch (error) {
        console.log("catch condition")
        this.error = error.response.data.error;
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
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}
</style>
