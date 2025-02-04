<template>
  <img :src="src" alt="Avatar" class="rounded-full w-12 h-12" />
</template>

<script setup>
defineProps({
  src: String
});
</script>
