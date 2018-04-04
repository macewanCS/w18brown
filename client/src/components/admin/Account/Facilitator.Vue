<template>
    <v-card>
        <v-layout row wrap>
            
            <v-flex class="input" xs3 ma-2>
                <v-text-field name="firstName" type="text" label="First Name" v-model="firstName" />
            </v-flex>

            <v-flex class="input" xs3 ma-2>
                <v-text-field name="lastName" type="text" label="Last Name" v-model="lastName" />
            </v-flex>
            <v-spacer id="mySpace" />
            <v-flex class="remove" >
                <v-btn type="submit" color="error" class="removebtn" @click="$emit('removeFac')">
                    Delete
                </v-btn>
            </v-flex>

        </v-layout>
    </v-card>
</template>

<script>
export default {
    props: {
        formSubmit: {}
    }, 
    data() {
        return {
        firstName: "",
        lastName: "",
        fullName: ""
        };
    },
    methods: {
        async resetForm() {
            this.firstName = "";
            this.lastName = "";
            this.fullName = "";
        }     
    },
    watch: {
        formSubmit: function () {
            if (this.formSubmit) {
                this.fullName = this.firstName.concat(" ");
                this.fullName = this.fullName.concat(this.lastName);
                this.$emit('submit',this.firstName, this.lastName);
            }
        }
    }
};
</script>

<style scoped>
#addSubSign {
font-size: 30pt;
}
.remove {
    display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
#mySpace {
    width: 200px;
}
.removebtn {
    transform: scale(0.75);

}
</style>
