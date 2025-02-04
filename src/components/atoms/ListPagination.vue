<template>
  <div class="mt-7">
    <nav class="flex items-center justify-between">
      <CustomButton :disabled="currentPage === 1" @click="changePage(currentPage - 1)" label="Previous" />

      <div class="flex space-x-2">
        <CustomButton v-if="currentPage > 3" @click="changePage(1)" label="1" />
        <span v-if="currentPage > 3">...</span>

        <CustomButton v-for="page in pagesToShow" :key="page" @click="changePage(page)" :disabled="currentPage === page"
          :label="page.toString()" />

        <span v-if="currentPage < totalPages - 2">...</span>
        <CustomButton v-if="currentPage < totalPages - 2" @click="changePage(totalPages)"
          :label="totalPages.toString()" />
      </div>

      <CustomButton :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)" label="Next" />
    </nav>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import CustomButton from '../atoms/CustomButton.vue';

defineProps({
  changePage: {
    type: Function,
    required: true,
  },
  totalPages: Number,
  currentPage: Number,
  pagesToShow: Array,
});
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
