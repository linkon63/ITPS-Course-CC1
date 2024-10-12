<template>
  <div class="grid gap-4">
    <div v-for="data in productData" :key="data">
      <img class="h-auto max-w-full rounded-lg" :src="data.img" alt="" />
      <p class="font-bold pt-2 uppercase">{{ data.name }}</p>
      <div class="flex justify-between items-center">
        <p class="font-bold">$ {{ data.price }}</p>
        <PreviewModal :data="data" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import PreviewModal from "./PreviewModal.vue"
defineProps(["productData"]);
const addProduct = (product) => {
  console.log("addProduct", product);
};
// const toggleModal = ref(false);
// const currentProductData = ref({});
// const openModal = (product) => {
//   currentProductData.value = product;
//   toggleModal.value = true;
// };
</script>