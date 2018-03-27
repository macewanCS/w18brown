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
                <v-select :items="grades" v-model="a1" label="Grade" autocomplete/>
            </v-flex>

            <v-flex xs2 sm2 ma-2>
                <v-select :items="rooms" v-model="a1" label="Rooms" autocomplete/>
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
export default {
  data() {
    return {
        a1: null,
        firstName: "",
        lastName: "",
        grades: ["K","1","2","3","4","5","6", "7", "8", "9", "10", "11", "12"],
        rooms: ["blue","red","purple"]
    };
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
