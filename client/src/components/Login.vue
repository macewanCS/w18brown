<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Caraway Login">

        <h1>Caraway Volunteer Log-In Page</h1>
 <div class="FormArea">
    <div class="UserInput">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="UsernameField">
            <input name="username" class="mdl-textfield__input" type="text" id="username">
            <label class="mdl-textfield__label" for="username">Username</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="PasswordField">
            <input name="password" class="mdl-textfield__input" type="password" id="password">
            <label class="mdl-textfield__label" for="password">Password</label>
        </div>
    </div>
    <div class="Buttons">
        <button type="button" id="forgotPassword" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Forgot your Password?</button>
        <button type="submit" id="login" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Login</button>
    </div>
</div>

      </panel>
    </v-flex>
  </v-layout>
</template>

<script>

/*
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
*/
</script>

<style scoped>
body,
    html {
        height: 100%;
        width: 100%;
        margin: auto;
        background-repeat: no-repeat;
        background-color: #EEEEEE;
        font-family: Lato;
    }

    form {
        width: 30%;
        background-color: #FFFFFF;

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
        box-shadow: 8px 8px #BDBDBD;
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
        color: #0288D1;
    }
</style>
