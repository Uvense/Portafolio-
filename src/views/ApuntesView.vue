<template>
    <div class="apuntes">
      <h1>Apuntes de Clase</h1>
      <hr>
      <!-- Computo 1 -->
      <app-tabs :tabList="tabList0">
        <br>
        <template v-slot:tabPanel-1>
          <br>
          <div class="container mi-div1">
            <div>
              <app-tabs :tabList="tabList1">
                <br>
                <template v-slot:tabPanel-1>
                  <br>
                  <div class="container">
                    <h2>Cómputo 1</h2>
                    <img src="..\assets\IMG_4353.jpg" height="500">
                  </div>
                </template>
                <template v-slot:tabPanel-2>
                  <br>
                  <div class="container">
                    <h2>Cómputo 1</h2>
                    <img src="..\assets\IMG_4354.jpg" height="500">
                  </div>
                  <br>
                </template>
                <template v-slot:tabPanel-3>
                  <br>
                  <div class="container">
                    <h2>Cómputo 1</h2>
                    <img src="..\assets\IMG_4355.jpg" height="500">
                  </div>
                  <br>
                </template>
                <template v-slot:tabPanel-4>
                  <br>
                  <div class="container">
                    <h2>Cómputo 1</h2>
                    <img src="..\assets\IMG_4356.jpg" height="500">
                  </div>
                  <br>
                </template>
              </app-tabs>
            </div>
          </div>
        </template>
        <!-- Computo 2 -->
        <template v-slot:tabPanel-2>
          <br>
          <div class="container mi-div2">
            <app-tabs :tabList="tabList2">
              <br>
              <template v-slot:tabPanel-1>
                <br>
                <div class="container">
                  <h2>Cómputo 2</h2>
                  <img src="..\assets\apuntec21.png" height="200">
                </div>
              </template>
              <template v-slot:tabPanel-2>
                <br>
                <div class="container">
                  <h2>Cómputo 2</h2>
                  <img src="..\assets\IMG_5603.jpg" height="500">
                </div>
                <br>
              </template>
              <template v-slot:tabPanel-3>
                <br>
                <div class="container">
                  <h2>Cómputo 2</h2>
                  <img src="..\assets\IMG_5604.jpg" height="500">
                </div>
                <br>
              </template>
              <template v-slot:tabPanel-4>
                <br>
                <div class="container">
                  <h2>Cómputo 2</h2>
                  <img src="..\assets\IMG_5605.jpg" height="500">
                </div>
                <br>
              </template>
            </app-tabs>
          </div>
          <br>
        </template>
      </app-tabs>
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
        tabList0: ["Cómputo 1", "Cómputo 2"],
        tabList1: ["Apunte 1", "Apunte 2", "Apunte 3", "Apunte 4"],
        tabList2: ["Apunte 1", "Apunte 2", "Apunte 3", "Apunte 4"],
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

  .container {
    justify-content: center;
  }

</style>
  