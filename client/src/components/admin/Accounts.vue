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
                  <Facilitator :formSubmit="submitBoolean" v-on:submit="getFacilitatorData" v-on:removeFac="removeFac(index)"> </Facilitator>
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
                    <Student :formSubmit="submitBoolean" v-on:submit="getStudentData" v-on:removeStudent="removeStudent(index)"> </Student>
                  </ul>
                </div>

                <div>
                  <br>
                  <h3>Contact Information</h3>
                  <v-layout row wrap>
                    <v-flex class="input" xs5>
                      <v-text-field name="Phone Number" type="text" label="Phone Number" v-model="phone1" />
                    </v-flex>
                    <v-flex class="input" xs6>
                      <v-text-field name="Email" type="text" label="Email" v-model="email1" />
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex class="input" xs5>
                      <v-text-field name="Phone Number" type="text" label="Phone Number" v-model="phone2" />
                    </v-flex>
                    <v-flex class="input" xs6>
                      <v-text-field name="Email" type="text" label="Email" v-model="email2" />
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
                    :items="accounts"
                    class="elevation-1"
                  >
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-right">{{ props.item.id }}</td>
                      <td class="text-xs-right">{{ props.item.facilitators }}</td>
                      <td class="text-xs-right">{{ props.item.students }}</td>
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
      ID: "",
      password: "",
      facilitators: [""],
      students: [""],
      historic: null,
      comments: "",
      bonus: "",
      email1: "",
      email2: "",
      phone1: "",
      phone2: "",
      headers: [
        {
          text: 'Family ID',
          align: 'center',
          sortable: true,
          value: 'id'
        },
        {
          text: 'Facilitators',
          align: 'center',
          sortable: true,
          value: 'facilitators'
        },
        {
          text: 'Students',
          align: 'center',
          sortable: true,
          value: 'students'
        }
      ],
      accounts: [],
      submitBoolean: false,
      studentData: [],
      facilitatorData: [],
      accountName: "",
      errors: [],
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load(){
      var familyResponse = await ApiFunctions.getFamilyList();
      var parsedData = JSON.parse(familyResponse.data);
      this.accounts = parsedData.values;
      var index = 0;
      this.accounts.forEach(async element => {
        var result = await ApiFunctions.getFacilitators(JSON.stringify(element.id));
        if(result.data === false){
          element.facilitators = "None";
        }
        else {
          var finalString1 = "";
          var count = 0;
          result.data.forEach(element3 => {
            finalString1 = finalString1.concat(element3);
            if (count != result.data.length - 1) {
              finalString1 = finalString1.concat(", ");
              count ++;
            }
          })
          element.facilitators = finalString1;
        }
      });
      this.accounts.forEach(async element=> {
        var result = await ApiFunctions.getStudents(JSON.stringify(element.id));
        element.students = [];
        if(result.data === false){
          element.students = "None";
        }
        else {
          var finalString = "";
          var count = 0;
          result.data.forEach(element2 =>{
            var name = element2.firstName + " " + element2.lastName;
            finalString = finalString.concat(name);
            if (count != result.data.length - 1) {
              finalString = finalString.concat(", ");
              count++;
            }
          })
          element.students = finalString;
        }
      });
    },

    async getStudentData (firstName, lastName, grade, room) {
      var info = {};
      info.firstName = firstName;
      info.lastName = lastName;
      info.grade = grade;
      info.room = room;
      this.studentData.push(info);
    },
    async getFacilitatorData (first, last) {
      this.accountName = last;
      var fullName = first.concat(" ");
      fullName = fullName.concat(last);
      var info = {};
      info.name = fullName;      
      this.facilitatorData.push(info);
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
    },
    async resetForm() {
      this.ID = "";
      this.password = "";
      this.facilitators = [""];
      this.students = [""];
      this.historic = null; 
      this.comments = "";
      this.bonus = "";
      this.email1 = "";
      this.email2 = "";
      this.phone1 = "";
      this.phone2 = "";
      this.submitBoolean = false;
      this.studentData = [];
      this.facilitatorData = [];
      this.accountName = "";
    },
    async submitFamily () {
      this.errors =[];
      this.submitBoolean = true;
      this.$nextTick(async function () {
        this.ID = this.accountName;
        this.ID = this.ID.concat(await Math.floor(Math.random() * 9000) + 1000);
        this.password = await Math.floor(Math.random() * 90000) + 10000;

        var field = {};
        field.accountID = this.ID;
        field.bonusHours = this.bonus;
        field.bonusComment = this.comments;
        field.phone = this.phone1 + "," + this.phone2;
        field.email = this.email1 + "," + this.email2;
        field.historicHours = this.historic;
        field.facilitators = this.facilitatorData;
        field.students = this.studentData;
        field.password = this.password;
        var json = JSON.stringify(field);
        if (error.length == 0) {
          var submit = await ApiFunctions.confirmCreateFamily(json);
          resetForm();
        }
      });
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
