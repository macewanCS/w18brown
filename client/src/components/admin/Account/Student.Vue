<template>
    <v-card>
        <v-layout row wrap>
            <v-flex class="input" xs3 ma-2>
                <v-text-field name="firstName" type="text" label="First Name" v-model="firstName" />
            </v-flex>

            <v-flex class="input" xs3 ma-2>
                <v-text-field name="lastName" type="text" label="Last Name" v-model="lastName" />
            </v-flex>

            <v-flex xs2 sm3 ma-2>
                <v-select :items="grades" v-model="a1" label="Grade" autocomplete/>
            </v-flex>

      <!--      <v-flex class="input" xs3> -->

            <v-flex class="remove" >
                <v-btn type="submit" color="error" class="removebtn" @click="$emit('removeFac')">
                    Delete
                </v-btn>
            </v-flex>

      <!--      </v-flex> -->

        </v-layout>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
        a1: null,
        firstName: "",
        lastName: "",
        grades: ["Kindergarten","1","2","3","4","5","6", "7", "8", "9", "10", "11", "12"],
        rooms: ["blue","red","purple"]
    };
  }
};
</script>

<style>
.input {
    padding-left: 50px;
}
.removebtn {
    transform: scale(.75);

}
</style>
