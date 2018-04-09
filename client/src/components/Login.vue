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
                <h1 class="text-xs-center" >Caraway Facilitation<br> Login Page</h1>
                <!-- added v-models for linking to script, added placeholders -->
                <v-text-field name="username" type="text" id="username" label="Username" v-model="username" @keyup.enter="login"/>
                <v-text-field name="password" type="password" id="password" label="Password" v-model="password" @keyup.enter="login"/>

                  <!--  <v-btn id="forgotPassword">Forgot your Password?</v-btn> -->
                  <v-flex >
                    <div class="text-xs-center"> <!-- this centers the contents -->
                      <v-btn type="submit" id="login" color="success" @click="login">
                        <!-- calls the login method below in scripts-->
                        Login
                      </v-btn>
                    </div>
                  </v-flex>

                <!-- mt-3 is margin on the top with a size of 3. see link
                https://vuetifyjs.com/en/layout/spacing
                 -->
        <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="error" v-model="error">
          {{ "Error: Incorrect username or password" }}
          <i class="material-icons">error</i>
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
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    async login() {
 /*      console.log(
        "In Login.vue file:   username: ",
        this.username,
        "password: ",
        this.password
      ); */
 //     console.log("login button was clicked");

      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        });
   //     await console.log("response.data is: ", response.data);

        if (response.data.type == "admin") {
  //        console.log("admin detected");
          this.$router.push({
            name: "dashboardadmin"
          });
        } else if (response.data.type == "family") {
  //        console.log("family detected");
          this.$store.dispatch("setAccountID", response.data.accountID);
          this.$store.dispatch("setToken", response.data.token);
          this.$router.push({
            name: "dashboardfamily"
          });
        } else if (response.data.type == "teacher") {
   //       console.log("teacher detected");
          this.$store.dispatch("setAccountID", response.data.accountID);
          this.$store.dispatch("setToken", response.data.token);
          this.$router.push({
            name: "scheduleteacher"
          });
        } else if (response.data.type == "board") {
  //        console.log("board detected");
          this.$store.dispatch("setAccountID", response.data.accountID);
          this.$store.dispatch("setToken", response.data.token);
          this.$router.push({
            name: "scheduleboard"
          });
        } else {
   //       console.log(typeof response.data.type);
   //       console.log("Login Failed!");
          //
          //  Add redirect to error page?
          //
          this.error = true;
        }

        /*
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'admin'
        })*/
      } catch (error) {
        console.log("catch condition", error);
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
#errorMessage {
  color: #d32f2f;
  font-size: 14pt;
}
</style>
