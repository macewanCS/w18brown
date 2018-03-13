<template>
    <v-card>
        <v-layout row wrap>
            <v-flex class="input" xs3>
                <v-text-field name="firstName" type="text" label="First Name" v-model="firstName" />
            </v-flex>
            <v-flex class="input" xs3>
                <v-text-field name="lastName" type="text" label="Last Name" v-model="lastName" />
            </v-flex>
            <v-flex xs2 sm6>
                <v-select :items="grades" v-model="a1" label="Grade" autocomplete>
                </v-select>
            </v-flex>
            <v-flex class="input" xs3>
            </v-flex>
            <v-flex class="remove" >
                <v-btn fab dark small color="red" class="removebtn" @click="$emit('removeStudent')">
                    -
                </v-btn>
            </v-flex>
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
        grades: ["Kindergarten","1","2","3","4","5","6"],
        rooms: ["blue","red","purple"]
    };
  }
};
</script>

<style>
.input {
    padding-left: 50px;
}
</style>
