<template>
  <div>
    <div>
      Facilitator
      <v-btn fab dark small color="green" @click="addFacilitator">
        +
      </v-btn>

      <ul v-for="(fac,index) in facilitators" v-bind:key="fac">
        <v-divider />
        <Facilitator v-on:removeFac="removeFac(index)"> </Facilitator>
      </ul>
    </div>
    <div>
      Student
      <v-btn fab dark small color="green" @click="addStudent">
        +
      </v-btn>

      <ul v-for="(student,index) in students" v-bind:key="student">
        <v-divider />
        <Student v-on:removeStudent="removeStudent(index)"> </Student>
      </ul>  
    </div>
  <div>
    Historic Hours
  </div>
  <div>
    <v-divider />
    Contact Information
    <v-layout row wrap>
      <v-flex class="input" xs4>
        <v-text-field name="Phone Number" type="text" label="Phone Number" v-model="Phone" />
      </v-flex>
      <v-flex class="input" xs4>
        <v-text-field name="Email" type="text" label="Email" v-model="Email" />
      </v-flex>
    </v-layout>
  </div>
  </div>
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
      students: [""]
    };
  },
  methods: {
    addFacilitator: function() {
      this.facilitators.push(facCounter);
      facCounter++;
    },
    addStudent: function(){
      this.students.push(studentCounter);
      studentCounter++;
    },
    removeFac: function(index) {
      this.facilitators.splice(index,1);
    },
    removeStudent: function(index) {
      this.students.splice(index,1);
    }

  },
  components: {
    Facilitator,
    Student
  }
};
</script>

<style>

</style>
