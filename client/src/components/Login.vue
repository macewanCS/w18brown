<!-- Some import code was from the following tutorial.
https://www.youtube.com/watch?v=Fa4cRMaTDUI -->

<template>  
  <panel title="Caraway Login">
    <div id = "testing">
      <h1>Caraway Volunteer <br> Log-In Page</h1>         
      <!-- added v-models for linking to script, added placeholders -->
      <v-text-field name="username" type="text" id="username" label="Username" v-model="username" />                     
      <v-text-field name="password" type="password" id="password" label="Password" v-model="password" />

      <v-flex>
        <v-btn id="forgotPassword" >Forgot your Password?</v-btn>
        <v-btn type="submit" id="login" @click="login"> <!-- calls the login method below in scripts-->
        Login
        </v-btn>
      </v-flex>

    </div>
  </panel>
</template>



<script>
// ** script is the controller **
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      username: "", // ** to update
      password: "", // ** to update
      error: null // ** to update
    };
  },
  methods: {
    async login() {
      console.log("login button was clicked");
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        });

        console.log(response.data);
        /*
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
        */
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
v-app {
  background-color: #EEEEEE;
}
#testing {
  padding: 25px;
  background-color: #FFFFFF;
  box-shadow: 5px 5px #BDBDBD;
  border-style: solid;
  border-color: #BDBDBD;
}
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}
</style>
