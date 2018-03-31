<template>
    <v-card>
        <v-layout row wrap>
            <v-flex class="input" xs3 ma-2>
                <v-text-field name="firstName" type="text" label="First Name" v-model="firstName" />
            </v-flex>

            <v-flex class="input" xs3 ma-2>
                <v-text-field name="lastName" type="text" label="Last Name" v-model="lastName" />
            </v-flex>

            <v-flex xs2 sm1 ma-2>
                <v-select :items="grades" v-model="gradeSelected" label="Grade" autocomplete />
            </v-flex>

            <v-flex xs2 sm2 ma-2>
                <v-select :items="roomsList" v-model="roomSelected" label="Rooms" autocomplete/>
            </v-flex>
            <v-flex class="remove" >
                <v-btn type="submit" color="error" class="removebtn" @click="$emit('removeStudent')">
                    Delete
                </v-btn>
            </v-flex>

        </v-layout>
    </v-card>
</template>

<script>
import ApiFunctions from "@/services/ApiFunctions";
export default {
    props: {
        formSubmit: {}
    },    
    data() {
        return {
            firstName: "",
            lastName: "",
            grades: ["K","1","2","3","4","5","6", "7", "8", "9", "10", "11", "12"],
            rooms: {},
            gradeSelected: "",
            roomSelected: "",
            roomsList: [""],
        };
    },
    created() {
      this.load();
      console.log(this.formSubmit);
    },
    methods: {
        async load(){
            var roomResponse = await ApiFunctions.getRoomList();
            var parsedData = JSON.parse(roomResponse.data);
            this.rooms = parsedData.values;
            var list = new Array();
            this.rooms.forEach(function(element) {
                list.push(element.roomName);
            });
            this.roomsList = list;
        }
    },
    watch: {
        formSubmit: function () {
            console.log(this.formSubmit);
            if (this.formSubmit) {
                this.$emit('submit','test');
            }
        }
    }
};

</script>

<style scoped>
.remove {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}
.removebtn {
    transform: scale(0.75);
}
</style>
