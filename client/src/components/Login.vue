<!-- Some import code was from the following tutorial.
https://www.youtube.com/watch?v=Fa4cRMaTDUI -->

<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Caraway Login">
        <h1>Caraway Volunteer Log-In Page</h1>
        <div class="FormArea">
            <div class="UserInput">
                <div id="UsernameField">
                    <!-- added v-models for linking to script, added placeholders -->
                    <input name="username" type="text" id="username" placeholder="Login" v-model="username">                     
                </div>
                  <br>  
                <div id="PasswordField">
                    <input name="password" type="password" id="password" placeholder="Password" v-model="password">
                </div>
            </div>
            <div class="Buttons">
                <button type="button" id="forgotPassword" >Forgot your Password?</button>
                <button type="submit" id="login" @click="login"> <!-- calls the login method below in scripts-->
                  Login
                </button>
            </div>
        </div>
      </panel>
    </v-flex>
  </v-layout>
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
body,
html {
  height: 100%;
  width: 100%;
  margin: auto;
  background-repeat: no-repeat;
  background-color: #eeeeee;
  font-family: Lato;
}

form {
  width: 30%;
  background-color: #ffffff;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  position: absolute;
  height: 300px;

  padding: 50px;
  margin: auto;
  text-align: center;
  /*border-style: solid;*/
  box-shadow: 8px 8px #bdbdbd;
}

input {
  width: 200px;
  height: 25px;
}

button {
  margin-left: 1vw;
}

.UserInput {
  margin-bottom: 10px;
}

.Buttons {
  text-align: center;
}

h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
}
</style>
