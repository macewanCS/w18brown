<template>
  <v-flex ma-5>
    <div class="text-xs-center">

      <table class="center">
        <h1>Reset a Password</h1>
        <br>
        <v-text-field name="username" type="text" id="username" label="Username to Reset" v-model="username" />
        <v-text-field name="username2" type="text" id="username2" label="Repeat Username" v-model="username2" />
        
        <br>
        <v-flex>
          <!-- grid system -->
          <v-btn type="submit" color="info" id="Submit" @click="submit">
            Submit
          </v-btn>

        <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="usernameMatchError" v-model="usernameMatchError">
          {{ "Usernames must match" }}
          <i class="material-icons">error</i>
        </v-flex>

          <v-flex id="errorMessage" class="text-xs-center" mt-3 v-if="noUserError" v-model="noUserError">
            {{ "The username was not found" }}
            <i class="material-icons">error</i>
          </v-flex>


        </v-flex>
        <br/>
        <v-layout align-center justify-center>
          <!-- this centers the contents -->
          <v-flex id="box2" class="text-xs-center" mt-2 v-if="confirm" v-model="confirm">
            <h2>Passord Reset
              <i class="material-icons">check_circle</i>
            </h2>
            Username: {{this.savedUser}}
            <br>Temporary Password: {{this.savedPass}}
          </v-flex>
        </v-layout>

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
      username2: "", // for matching
      password: "",
      noUserError: false,
      confirm: false,
      usernameMatchError: false,
      savedUser: "",
      savedPass: ""
    };
  },
  created() {
  },
  methods: {
    async reset(){
      this.noUserError = false;
      this.confirm = false;
      this.usernameMatchError = false;
      this.savedPass = "";
    },
  
    async submit() {
      //  await reset(); // not working!
      this.usernameMatchError = false;
      this.confirm = false;
      this.noUserError = false;

      this.savedUser = username;

      await console.log(this.username, this.username2)

      if (this.username != this.username2){
        console.log("usernames dont match")
        this.usernameMatchError = true;
      }
      else {
        try {
          const checkResponse = await ApiFunctions.accountExists({
            username: this.username
          });

          if (checkResponse.data === false) {
            console.log("error message");
            this.noUserError = true;
          }
          else if (checkResponse.data === true){
            console.log("lets reset");
            try {
              this.password = await Math.floor(Math.random() * 90000) + 10000;
              const changeResponse = await ApiFunctions.changePassword({
                username: this.username,
                password: this.password
              });
              if ((changeResponse.data = true)) {
                this.savedUser = this.username;
                this.savedPass = this.password;
                this.confirm = true;
              }
            } catch (error) {
              console.log("catch condition 1");
            }
          } 
        } catch (error) { 
          console.log("catch condition 2");
        }
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
