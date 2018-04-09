<template>
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
                        <td class="text-xs-right">{{ props.item.facilitators }}</td>
                        <td class="text-xs-right">{{ props.item.students }}</td>
                    </template>
                </v-data-table>
            </v-flex>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        }
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
    }
}
</script>

<style>

</style>
