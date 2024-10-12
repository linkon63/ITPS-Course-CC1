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
import Breadcrumb from '../products/Breadcrumb.vue';
import Title from '../products/Title.vue';
import Filter from '../products/Filter.vue';
import Gallery from '../products/Gallery.vue';
</script>