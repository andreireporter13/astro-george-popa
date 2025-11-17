<template>
  <button @click="count++">Clicked {{ count }} times</button>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<style>
button {
  background-color: #1d4ed8;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2563eb;
}
</style>
