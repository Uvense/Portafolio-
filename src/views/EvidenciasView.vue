<template>
  <div class="evidencias">
    <br>
    <br>
    <h1>Evidencias</h1>
    <hr>
    <br>
    <div>
      <h3>Laboratorio 1</h3>
      <app-tabs :tabList="tabList">
        <template v-slot:tabPanel-1>
          <br>
          <div class="container">
            <img src="..\assets\Laboratorio1.jpg">
          </div>
        </template>
        <template v-slot:tabPanel-2>
          <div class="container">
            <img src="..\assets\Laboratio1.jpg">
          </div>
          <br>
        </template>
      </app-tabs>
      <h3>Laboratorio 2</h3>
      <br>
      <div class="container">
        <img src="..\assets\Lab2.png" height="290">
      </div>
      <br>
    </div>
</div>
</template>

<script>
  import AppTabs from "../components/AppTabs.vue";
  export default {
    components: {
      AppTabs,
    },
    
    data() {
      return {
        tabList: ["Evidencia 1", "Evidencia 2"],
      };
    },
  };
</script>

<style>
@media (min-width: 1024px) {
  .evidencias h1 {
  margin-right: 10px;
  }

  .evidencias p {
    margin-left: 20px;
  }

}
</style>
