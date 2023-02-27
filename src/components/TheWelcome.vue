<script setup>
  import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #heading>Estudiante</template>Oscar Uvense Ayala Gonzáles
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Docente</template> MIW. Inga. Gisela Espinoza
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Asignatura </template> Programación Computacional IV
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Nombre Actividad </template> Portafolio de Cómputo 1
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Fecha de Entrega</template> Domingo 26 de Febrero de 2023
  </WelcomeItem>
</template>
