<template>
    <div class="apuntes">
      <h1>Apuntes de Clase</h1>
      <hr>
      <br>
      <div>
        <app-tabs :tabList="tabList">
          <br>
          <template v-slot:tabPanel-1>
            <br>
            <div class="container">
              <img src="..\assets\IMG_4353.jpg" height="500">
            </div>
          </template>
          <template v-slot:tabPanel-2>
            <br>
            <div class="container">
              <img src="..\assets\IMG_4354.jpg" height="500">
            </div>
            <br>
          </template>
          <template v-slot:tabPanel-3>
            <br>
            <div class="container">
              <img src="..\assets\IMG_4355.jpg" height="500">
            </div>
            <br>
          </template>
          <template v-slot:tabPanel-4>
            <br>
            <div class="container">
              <img src="..\assets\IMG_4356.jpg" height="500">
            </div>
            <br>
          </template>
        </app-tabs>
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
        tabList: ["Apunte 1", "Apunte 2", "Apunte 3", "Apunte 4"],
      };
    },
  };
</script>

<style>
  @media (min-width: 1024px) {
    .apuntes h1 {
    margin-right: 10px;
  }

  .apuntes p {
    margin-left: 20px;
  }

  }

  .flex {
    display: flex;
  }
</style>
  