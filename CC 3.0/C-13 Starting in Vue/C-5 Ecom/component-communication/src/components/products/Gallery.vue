<script setup>
import { reactive } from "vue";
import GridCard from "./components/GridCard.vue";
const state = reactive({
  data1: [
    {
      id: 1,
      name: "medicine",
      price: 500,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    },
    {
      id: 2,
      name: "nike shoes",
      price: 3200,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    },
    {
      id: 3,
      name: "gucci bag",
      price: 1200,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    },
  ],
  data2: [
    {
      id: 4,
      name: "tree pot",
      price: 800,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    },
    {
      id: 5,
      name: "smart watch",
      price: 1100,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      id: 6,
      price: 700,
      name: "bata shoes",
    },
  ],
  data3: [
    {
      id: 31,
      name: "facewash",
      price: 600,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    },
    {
      id: 32,
      name: "bag",
      price: 100,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      id: 33,
      price: 200,
      name: "light",
    },
  ],
  data4: [
    {
      id: 41,
      name: "charger",
      price: 150,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    },
    {
      id: 42,
      name: "gamepad",
      price: 2500,
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
      id: 43,
      price: 500,
      name: "bag",
    },
  ],
});
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    <GridCard :product-data="state.data1" />
    <GridCard :product-data="state.data2" />
    <GridCard :product-data="state.data3" />
    <GridCard :product-data="state.data4" />
  </div>
</template>
