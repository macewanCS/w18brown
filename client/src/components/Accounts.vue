<template>
  <v-flex ma-5>
    <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
    <div class="text-xs-center">
      <!-- this centers the contents -->

      <table class="center">
        <h1>Create Family Accounts</h1>
        <br>
        <div>
          <h3>Facilitators
            <v-btn fab dark small color="green" @click="addFacilitator">
              +
            </v-btn>
          </h3>
          <ul v-for="(fac,index) in facilitators" v-bind:key="fac">
            <v-divider />
            <Facilitator v-on:removeFac="removeFac(index)"> </Facilitator>
          </ul>
          <div>
            <br>
            <h3>Students
              <v-btn fab dark small color="green" @click="addStudent">
                +
              </v-btn>
            </h3>
            <ul v-for="(student,index) in students" v-bind:key="student">
              <v-divider />
              <Student v-on:removeStudent="removeStudent(index)"> </Student>
            </ul>
          </div>

          <div>
            <br>
            <h3>Contact Information</h3>
            <v-layout row wrap>
              <v-flex class="input" xs5>
                <v-text-field name="Phone Number" type="text" label="Phone Number" v-model="Phone" />
              </v-flex>
              <v-flex class="input" xs6>
                <v-text-field name="Email" type="text" label="Email" v-model="Email" />
              </v-flex>
            </v-layout>
          </div>
          <br>
          <v-divider />
          <br>
          <h3>Bonus Hours</h3>
          <v-layout row wrap>
            <v-flex class="input" xs4>
              <v-text-field name="Bonus" type="text" label="Bonus" v-model="bonus" />
            </v-flex>
            <v-flex class="input" xs7>
              <v-text-field name="Comments" type="text" label="Comments" v-model="comments" />
            </v-flex>
          </v-layout>
          <div>
            <br>
            <v-divider />
            <br>

            <h3>Historic Hours</h3>
            <v-flex class="input" xs4>
              <v-text-field name="Historic Hours" type="text" label="Historic Hours" v-model="historic" />
            </v-flex>
          </div>
          <v-btn type="submitFamily" color="success" id="submitFamily" @click="submitFamily">
            Submit
          </v-btn>
        </div>
      </table>
    </div>

  </v-flex>
</template>
<script>
import Facilitator from "@/components/Account/Facilitator.vue";
import Student from "@/components/Account/Student.vue";
var facCounter = 1;
var studentCounter = 1;
export default {
  data() {
    return {
      facilitators: [""],
      students: [""],
      historic: null, // to be implemented
      comments: "", // to be implemented
      bonus: "", // to be implemented
      Email: "", // to be implemented
      Phone: "" // to be implemented
    };
  },
  methods: {
    addFacilitator: function() {
      this.facilitators.push(facCounter);
      facCounter++;
    },
    addStudent: function() {
      this.students.push(studentCounter);
      studentCounter++;
    },
    removeFac: function(index) {
      this.facilitators.splice(index, 1);
    },
    removeStudent: function(index) {
      this.students.splice(index, 1);
    }
  },
  components: {
    Facilitator,
    Student
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
h3 {
  padding: 5px;
  letter-spacing: 3px;
  font-family: Lato;
  text-align: left;
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
