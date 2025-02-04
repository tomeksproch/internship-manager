<template>
  <div class="p-4 md:p-32">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
.main-wrapper {
  padding: 8rem;
}
</style>
