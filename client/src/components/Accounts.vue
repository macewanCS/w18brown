<template>
    <div id="app">
        <table class="table">
            <thead>
                <tr>
                    <td>
                        <strong>Title</strong>
                    </td>
                    <td>
                        <strong>Description</strong>
                    </td>
                    <td>
                        <strong>File</strong>
                    </td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="row.id">

                    <td><input type="text" v-model="row.title"></td>
                    <td><input type="text" v-model="row.description"></td>
                    <td>
                        <label class="fileContainer">
                            {{row.file.name}}
                            <input type="file" @change="setFilename($event, row)" :id="index">
                        </label>
                    </td>
                    <td>
                        <a v-on:click="removeElement(index);" style="cursor: pointer">Remove</a>
                    </td>

                </tr>
            </tbody>
        </table>
        <div>
            <button class="button btn-primary" @click="addRow">Add row</button>
        </div>
    </div>
</template>

<script>

export default {
  data: {
    rows: []
  },
  methods: {
    addRow: function() {
      var elem = document.createElement("tr");
      this.rows.push({
        title: "",
        description: "",
        file: {
          name: "Choose File"
        }
      });
    },
    removeElement: function(index) {
      this.rows.splice(index, 1);
    },
    setFilename: function(event, row) {
      var file = event.target.files[0];
      row.file = file;
    }
  }
};
</script>

<style>

</style>
