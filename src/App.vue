<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="ugb logo" class="logo" src="@/assets/logoUGB.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="PORTAFOLIO" />

      <nav>
        <RouterLink to="/">Portada</RouterLink><br>
        <RouterLink to="/about">Introducción</RouterLink><br>
        <RouterLink to="/contenidos">Sumario de Contenidos</RouterLink><br>
        <RouterLink to="/apuntes">Apuntes de Clase</RouterLink><br>
        <RouterLink to="/guias">Guías de Laboratorio</RouterLink><br>
        <RouterLink to="/casos">Casos de Estudio</RouterLink><br>
        <!-- <RouterLink to="/tareas">Tareas Ex-Aula</RouterLink><br> -->
        <RouterLink to="/investigaciones">Investigaciones</RouterLink><br>
        <RouterLink to="/evidencias">Papeletas y evidencias de evaluaciones</RouterLink><br>
        <RouterLink to="/proyecto">Proyecto Integrador</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #fefefe; 
  /* line-height: 1.5;
  max-height: 100vh; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #a00505;
  font-size: 16px;
}

nav a.router-link-exact-active:hover {
  background-color: #ffffff;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 2px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    margin-right: 35px;
    margin-left: 10px;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 4;
    font-size: 1rem;

    padding: 6;
    margin-top: 1rem;
  }
}
</style>
