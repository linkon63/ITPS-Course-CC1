<template>
  <div class="bg-red-500">
    <h1 class="text-white text-3xl p-4">Global Components</h1>
    <input
      type="text"
      placeholder="type anything"
      class="p-2 text-white bg-gray-300 m-8"
      v-model="state.formValue"
    />
    <div class="flex justify-center">
      <button class="p-2 border bg-green-300 rounded-full text-3xl mx-2"
      @click="plus"
      >
        +
      </button>
      <p class="p-2 bg-indigo-500">{{ number }}</p>
      <button class="p-2 border bg-green-300 rounded-full text-3xl mx-2"
      @click="minus"
      >
        -
      </button>
    </div>
  </div>
  <div class="flex justify-between">
    <Component1 :numberProps="number" @plusEmit="plus" @minusEmit="minus" />
    <Component2 :inputProps="state.formValue" @clearEmit="clear" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";


const number = ref(0)
const state = reactive({
  formValue : ""
})

const plus = () => {
  number.value = number.value + 1
}

const minus = () => {
  if(number.value > 0){
    number.value = number.value - 1
  }
}


const clear = () => {
  state.formValue = ""
}
</script>

<style scoped></style>
