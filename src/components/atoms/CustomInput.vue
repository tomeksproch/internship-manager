<template>
  <div class="custom-input-wrapper">
    <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input v-bind="$attrs" :type="type" :id="id" :value="modelValue" @input="handleInput"
      class="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      :placeholder="placeholder" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
.custom-input-wrapper {
  width: 100%;
}

input {
  width: 100%;
}
</style>
