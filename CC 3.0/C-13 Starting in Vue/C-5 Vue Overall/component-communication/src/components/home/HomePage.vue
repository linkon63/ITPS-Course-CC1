<template>
    <Layout>
        <div class="container mx-auto">
            <Breadcrumb />
            <Title />
            <Filter />
            <Gallery />
        </div>
    </Layout>
</template>
<script setup>
import Layout from '../layout/Layout.vue';
import Breadcrumb from '../women/Breadcrumb.vue';
import Title from '../women/Title.vue';
import Filter from '../women/Filter.vue';
import Gallery from '../women/Gallery.vue';
</script>