<template>
  <button :type="type" :class="['custom-button', 'px-4', 'py-2', 'rounded-lg',]" :disabled="disabled"
    @click="$emit('click')">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.custom-button {
  background-color: #6BD9E9;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.custom-button:hover {
  background-color: #D2EFF3;
  color: white;
}
</style>
