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
              <v-layout align-center justify-center>
                <v-flex id="box2" class="text-xs-center" mt-2 v-if="confirm" v-model="confirm">
                <h2>Family Created <i class="material-icons">check_circle</i></h2>
                    FamilyID (Username):  {{this.usernameDisplay}}
                    <br>
                    Password: {{this.passwordDisplay}}
                </v-flex>
              </v-layout>
            </table>
          </div>

        </v-flex>
      </v-tab-item>
      <v-tab-item key="tab2">
        <v-dialog v-model="dialog" max-width="1000px">
          <v-card>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="First Name" v-model="editedItem.firstName"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Last Name" v-model="editedItem.lastName"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="grades" v-model="editedItem.grade" label="Grade" autocomplete/>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="roomsList" v-model="editedItem.room" label="Rooms" autocomplete/>
                  </v-flex>
                </v-layout>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Phone" v-model="editedItem.phone"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Phone" v-model="editedItem.phone2"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Email" v-model="editedItem.email"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Email" v-model="editedItem.email2"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Bonus" v-model="editedItem.bonus"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Comments" v-model="editedItem.comment"></v-text-field>
                  </v-flex>                                                       
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-flex ma-5>
          <div class="text-xs-center">
            <h1>View Family Account</h1>
            <v-flex class="center" xs4>
              <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
                width = "200px"
              ></v-text-field>   
            </v-flex>              
            <table class="center">
                <v-flex align-center>             
                  <v-data-table light
                    :headers="headers"
                    :items="accounts"
                    :search="search"
                    class="elevation-1"
                  >
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-right">{{ props.item.familyID }}</td>
                      <td class="text-xs-right">{{ props.item.firstName }}</td>
                      <td class="text-xs-right">{{ props.item.lastName }}</td>   
                      <td class="text-xs-right">{{ props.item.facilitators }}</td>                                           
                      <td class="text-xs-right">{{ props.item.room }}</td>
                      <td class="text-xs-right">{{ props.item.grade }}</td>
                      <td class="justify-center layout px-0">
                        <v-btn icon class="mx-0" @click="editItem(props.item)">
                          <v-icon color="teal">edit</v-icon>
                        </v-btn>
                        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                          <v-icon color="pink">delete</v-icon>
                        </v-btn>
                      </td>                                   
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
      dialog: false,
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
      grades: ["K","1","2","3","4","5","6", "7", "8", "9", "10", "11", "12"],
      roomsList: [""],
      headers: [
        {
          text: 'Family ID',
          align: 'center',
          sortable: true,
          value: 'familyID'
        },
        {
          text: 'First Name',
          align: 'center',
          sortable: true,
          value: 'firstName'
        },
        {
          text: 'Last Name',
          align: 'center',
          sortable: true,
          value: 'lastName'
        },
        {
          text: 'Facilitators',
          align: 'center',
          sortable: true,
          value: 'facilitators'
        },
        {
          text: 'Room',
          align: 'center',
          sortable: true,
          value: 'room'
        },
        {
          text: 'Grade',
          align: 'center',
          sortable: true,
          value: 'grade'
        }, 
      ],
      accounts: [],
      accounts2: [],
      submitBoolean: false,
      studentData: [],
      facilitatorData: [],
      accountName: "",
      errors: [],
      confirm: false,
      usernameDisplay: "",
      passwordDisplay: "",
      search:"",
      editedIndex: -1,
      editedItem: {

      },
      beforeEdit: {
        id: "",
        first: "",
        last: "",
      }
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load(){
      var studentResponse = await ApiFunctions.getChildList();
      this.accounts = studentResponse.data;
      this.accounts.forEach(async element => {
        var result = await ApiFunctions.getFacilitators(element.familyID);
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
      this.accounts.forEach(async element => {
        var result = await ApiFunctions.getFamilybyID(element.familyID);
        result.data.forEach(element2 =>{
        element.phone = element2.phone;
        element.phone2 = element2.phone2;
        element.email = element2.email;
        element.email2 = element2.email2;
        element.bonus = element2.bonusHours;
        element.comment = element2.bonusComment;
        })
      });

      var roomResponse = await ApiFunctions.getRoomList();
      var parsedData = JSON.parse(roomResponse.data);
      this.rooms = parsedData.values;
      var list = new Array();
      this.rooms.forEach(function(element) {
        list.push(element.roomName);
      });
      this.roomsList = list;
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
    editItem (item) {
      this.editedIndex = this.accounts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.beforeEdit.id = item.familyID;
      this.beforeEdit.first = item.firstName;
      this.beforeEdit.last = item.lastName;
    },
    async deleteItem (item) {
      const index = this.accounts.indexOf(item);
      confirm('Are you sure you want to delete this item?') && this.accounts.splice(index, 1);
      var result = await ApiFunctions.deleteChildbyID(item.familyID,item.firstName,item.lastName);      
    },
    close () {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300)
    },

    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.accounts[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
      var studentField = {};
      var accountField = {};
      studentField.accountID = this.beforeEdit.id;
      accountField.accountID = this.beforeEdit.id;
      accountField.bonusHours = this.editedItem.bonus;
      accountField.bonusComment = this.editedItem.comment;
      accountField.phone = this.editedItem.phone;
      accountField.phone2 = this.editedItem.phone2;
      accountField.email = this.editedItem.email;
      accountField.email2 = this.editedItem.email2;
      studentField.beforeFirst = this.beforeEdit.first;
      studentField.beforeLast = this.beforeEdit.last;
      studentField.first = this.editedItem.firstName;
      studentField.last = this.editedItem.lastName;
      studentField.room = this.editedItem.room;
      studentField.grade = this.editedItem.grade;
      var accJSON = JSON.stringify(accountField);
      var stuJSON = JSON.stringify(studentField);
      var account = await ApiFunctions.updateAccount(accJSON);
      var student = await ApiFunctions.updateChild(stuJSON);
      this.editedItem = {};
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
      //this.confirm = false;
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
        field.phone1 = this.phone1;
        field.phone2 = this.phone2;
        field.email1 = this.email1;
        field.email2 = this.email2;
        field.historicHours = this.historic;
        field.facilitators = this.facilitatorData;
        field.students = this.studentData;
        field.password = this.password;
        var json = JSON.stringify(field);
        var submit = await ApiFunctions.confirmCreateFamily(json);
        this.usernameDisplay = this.ID;
        this.passwordDisplay = this.password;
        this.confirm = true;
        this.resetForm();
        this.load();
      });
    }
  },
  components: {
    Facilitator,
    Student
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
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
