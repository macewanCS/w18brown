<template>
    <v-card>
        <v-layout row wrap>
            
            <v-flex class="input" xs3 ma-2>
                <v-text-field name="firstName" type="text" label="First Name" v-model="firstName" />
            </v-flex>

            <v-flex class="input" xs3 ma-2>
                <v-text-field name="lastName" type="text" label="Last Name" v-model="lastName" />
            </v-flex>

            <v-flex class="remove" >
                <v-btn fab dark small color="red" class="removebtn" @click="$emit('removeFac')">
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
      firstName: "",
      lastName: ""
    };
  }
};
</script>

<style>
.input {
    padding-left: 50px;
}
#addSubSign {
font-size: 30pt;
}
</style>
