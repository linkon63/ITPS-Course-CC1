<template>
    <Header />
    <slot />
    <Footer />
</template>
<script setup>
import Header from '../shared/Header.vue';
import Footer from '../shared/Footer.vue';
</script>