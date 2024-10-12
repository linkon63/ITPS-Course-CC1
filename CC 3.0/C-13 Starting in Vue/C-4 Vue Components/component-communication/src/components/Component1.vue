<template>
  <div class="bg-green-500 p-4 w-full">
    Component 1
    <div class="flex justify-center">
      <button class="p-2 border bg-green-300 rounded-full text-3xl mx-2"
      @click="plusComponent"
      >
        +
      </button>
      <p class="p-2 bg-indigo-500">{{ numberProps }}</p>
      <button class="p-2 border bg-green-300 rounded-full text-3xl mx-2"
      @click="minusComponent"
      >
        -
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["numberProps"]);
const emits = defineEmits(['plusEmit', 'minusEmit'])

const plusComponent = () => {
    console.log('plusComponent');
    emits('plusEmit')
}

const minusComponent = () => {
    console.log('minusComponent');
    emits('minusEmit')
}

</script>
