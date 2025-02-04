<template>
  <div class="flex items-center space-x-2">
    <input v-model="searchText" @input="updateSearch" type="text" placeholder="Search by name..."
      class="px-4 py-2 border rounded-md w-full" />
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const searchText = ref('');
const emit = defineEmits(['updateSearch']);

const updateSearch = () => {
  emit('updateSearch', searchText.value);
};
</script>

<style scoped>
input {
  font-size: 16px;
  border-color: #ccc;
}

input:focus {
  border-color: #6BD9E9;
  outline: none;
}
</style>
