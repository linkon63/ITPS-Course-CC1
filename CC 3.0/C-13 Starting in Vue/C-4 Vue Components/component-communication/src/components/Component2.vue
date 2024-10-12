<template>
     <div class="bg-sky-500 p-4 w-full">
        Component 2 A
        <p>
            {{ inputProps }}
        </p>
        <button class="bg-red-200 p-4" @click="$emit('clearEmit')">Clear</button>
    </div>
</template>
<script setup>
const props = defineProps(['inputProps'])
const emits = defineEmits(['clearEmit'])
</script>