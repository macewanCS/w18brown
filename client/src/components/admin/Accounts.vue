<template>
  <v-tabs fixed-tabs dark id="allTabs">
    <v-tab key="tab1">
        Create Family Accounts
    </v-tab>
    <v-tab key="tab2">
        View Family Accounts
    </v-tab>
    <v-tabs-items id="content">
      <v-tab-item key ="tab1">
        <v-flex ma-5>
          <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
          <div class="text-xs-center">
            <!-- this centers the contents -->

            <table class="center">
              <h1>Create Family Accounts</h1>
              <br>
              <div>
                <h3>
                  Facilitators
                  <v-btn type="submit" color="info" id="Submit" @click="addFacilitator" style="fixed: right;">
                    Add
                  </v-btn>
                  
                </h3>
                <ul v-for="(fac,index) in facilitators" v-bind:key="fac">
                  <v-divider />
                  <Facilitator v-on:removeFac="removeFac(index)"> </Facilitator>
                </ul>
                <div>
                  <br>
                  <h3>
                    Students
                    <v-btn type="submit" color="info" id="Submit" @click="addStudent" style="fixed: right;">
                      Add
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
                <v-btn type="submitFamily" color="success" id="submitFamily" @click="submitFamily" style="float: right;">
                  Submit
                </v-btn>
              </div>
            </table>
          </div>

        </v-flex>
      </v-tab-item>
      <v-tab-item key="tab2">
        <v-flex ma-5>
          <div class="text-xs-center">
            <table class="center">
              <h1>View Family Account</h1>

                <v-flex align-center>
                  <v-data-table light
                    :headers="headers"
                    :items="families"    
                    hide-actions
                    class="elevation-1"
                  >
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-right">{{ props.item.familyID }}</td>
                    </template>
                  </v-data-table>
                </v-flex>
            </table>
          </div>
        </v-flex>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>
<script>
import Facilitator from "@/components/admin/Account/Facilitator.vue";
import Student from "@/components/admin/Account/Student.vue";
import ApiFunctions from "@/services/ApiFunctions";
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
      Phone: "", // to be implemented
      headers: [
        {
          text: 'Family ID',
          align: 'center',
          sortable: true,
          value: 'familyID'
        }
      ],
      families: {}
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load(){
      var familyResponse = await ApiFunctions.getFamilyList();
      var parsedData = JSON.parse(familyResponse.data);
      this.families = parsedData.values;
    },

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
#mySpace {
    width: 10px;
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
.input {
    padding-left: 50px;
}
</style>
