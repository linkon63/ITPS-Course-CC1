<template>
  <Layout>
    Your cart products are
    <div class="grid grid-cols-4 p-8">
      <div v-for="data in state.data" :key="data" class="m-2">
        <img class="h-[400px] w-[400px] rounded-lg" :src="data.img" alt="" />
        <p class="font-bold pt-2 uppercase">{{ data.name }}</p>
        <div class="flex justify-between items-center">
          <p class="font-bold">$ {{ data.price }}</p>
          <button @click="deleteProduct(data)" class="bg-red-500 rounded-xl px-6 py-2 font-bold text-white">Delete</button>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import Layout from "../../components/layout/Layout.vue";
const state = reactive({ data: [] });
const deleteProduct = (data) =>{
  const filteredData = state.data.filter( item => item.id !== data.id)
  // array delete filtered method array
  state.data = filteredData
  sessionStorage.setItem('addToCart', JSON.stringify(filteredData))
}
onMounted(() => {
  console.log("vue called");
  const addToCartProducts = JSON.parse(sessionStorage.getItem("addToCart"));
  state.data = addToCartProducts;
});
</script>
