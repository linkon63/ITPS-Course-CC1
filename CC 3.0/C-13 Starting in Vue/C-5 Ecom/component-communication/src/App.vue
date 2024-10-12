<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import HomePage from './components/home/HomePage.vue';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style scoped></style>
