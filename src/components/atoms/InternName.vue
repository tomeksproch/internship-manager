<template>
  <span>{{ firstName }} {{ lastName }}</span>
</template>

<script setup>
defineProps({
  firstName: String,
  lastName: String
});
</script>
