<template>
  <v-flex ma-5> <!-- ma-5 puts margins on all sides of size 5 (maximum size)-->
    <div class="text-xs-center"> <!-- this centers the contents -->
      <!--Using v-content screws up the positioning.  Reverting to div to fix centering-->
      <h1>Teacher Dashboard</h1>
    </div>
  </v-flex>
</template>

<script>
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20pt;
  color: #0288d1;
  font-family: Lato;
}
</style>
