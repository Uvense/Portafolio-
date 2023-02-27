<template>
    <div class="contenidos">
      <br>
      <br>
      <h1>Sumario de Contenidos</h1>
      <hr>
      <br>
    <div>
      <app-tabs :tabList="tabList">
        <template v-slot:tabPanel-1>
          <br>
          <b>Desarrollo Frontend con librerías del lado del cliente</b>
          <div>
            <ul>
              <li>Introducción a JavaScript Básico</li>
              <li>Introducción a las librerías (Vue.js y Bootstrap)</li>
              <li>Rendering declarativo y manipulación del DOM</li>
              <li>Introducción al rendenring declarativo</li>
              <li>Expresiones, propiedades y control de flujos con directivas</li>
              <li>Renderizado de listas</li>
              <li>Manejo de eventos Clases y estilos en tiempo real</li>
              <li>Sistema de componentes</li>
              <li>Crear componentes Custom</li>
              <li>Comunicación entre componentes: propiedades y eventos</li>
            </ul>
          </div>
        </template>
        <template v-slot:tabPanel-2>
          <br>
          <b>Desarrollo Backend con el Framework del lado del servidor y base de datos</b>
          <div>
            <ul>
              <li>Introducción al desarrollo con PHP</li>
              <li>Declaración de variables</li>
              <li>Declaración de funciones</li>
              <li>Programación orientada a objetos</li>
              <li>Conexión a base de datos</li>
              <li>Introducción a Laravel</li>
              <li>CRUD con Laravel</li>
            </ul>
          </div>
          <br>
        </template>
        <template v-slot:tabPanel-3>
          <br>
          <b>Incorporando tecnologías de Servidor Web</b>
          <div>
            <ul>
              <li>Formularios Laravel</li>
              <li>Sistema de rutas y controladores</li>
              <li>Validación de datos</li>
              <li>Blade: sistema de plantillas avanzado</li>
              <li>Trabajando con Laravel/UI</li>
              <li>Creación de API REST con Laravel</li>
              <li>Consumo de API REST</li>
            </ul>
          </div>
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
        tabList: ["Cómputo 1", "Cómputo 2", "Cómputo 3"],
      };
    },
  };
</script>

<style>
@media (min-width: 1024px) {
    .contenidos h1 {
    margin-right: 10px;
    margin-left: 10px;
  }

  .contenidos p {
    text-align: center;
    margin-left: 20px;
  }

  .contenidos b {
    color: #a00505;
    font-size: 16px;
  }

  .contenidos h2 {
    text-align: left;
    margin-left: 95px;
  }
  
  .flex {
    display: flex;
  }
}
</style>
  