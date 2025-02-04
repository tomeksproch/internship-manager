<template>
  <div class="intern-info-wrapper p-8 flex flex-col justify-around ">
    <div class="flex flex-col gap-7 xl:flex-row">
      <CustomInput label="First name" id="first-name" v-model="localInternData.firstName"
        placeholder="Enter first name" />
      <CustomInput label="Last name" id="last-name" v-model="localInternData.lastName" placeholder="Enter last name" />
    </div>
    <CustomButton :label="buttonText" @click="handleSubmitInternData" class="w-full max-w-[300px] xl:w-[300px]" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import CustomInput from '../atoms/CustomInput.vue';
import CustomButton from '../atoms/CustomButton.vue';

const props = defineProps({
  internData: {
    type: Object,
    required: true,
  },
  submitInternData: {
    type: Function,
    required: true,
  },
  buttonText: String,
});

const emit = defineEmits(['update:modelValue']);

const localInternData = ref({ ...props.internData });

watch(() => props.internData, (newData) => {
  localInternData.value = { ...newData };
}, { deep: true });

const handleSubmitInternData = () => {
  emit('update:modelValue', localInternData.value);
  props.submitInternData(localInternData.value);
};
</script>

<style scoped>
.intern-info-wrapper {
  background-color: white;
  height: 400px;
  width: 100%;
  border-radius: 8px;
  box-shadow: -8px 8px 0px 0px rgba(226, 226, 226, 1);
}
</style>
