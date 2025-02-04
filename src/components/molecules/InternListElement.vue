<template>
  <div class="flex items-center p-3 justify-between">
    <div class="flex space-x-4 items-center">
      <InternAvatar :src="avatar" />
      <div>
        <InternName :firstName="firstName" :lastName="lastName" />
      </div>
    </div>

    <div class="flex space-x-2 ml-auto">
      <button @click="editIntern" class="p-2">
        <img src="../../assets/images/edit-icon.svg" alt="Edit" class="w-6 h-6" />
      </button>
      <button @click="deleteIntern" class="p-2">
        <img src="../../assets/images/delete-icon.svg" alt="Delete" class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import InternAvatar from '../atoms/InternAvatar.vue';
import InternName from '../atoms/InternName.vue';

const props = defineProps({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  avatar: String
});

const emit = defineEmits(['internDeleted']);

const router = useRouter();

const editIntern = () => {
  router.push(`/edit/${props.id}`);
};

const deleteIntern = async () => {
  try {
    await axios.delete(`https://reqres.in/api/users/${props.id}`);
    emit('internDeleted', props.id);
  } catch (error) {
    console.error('Failed to delete intern', error);
  }
};
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

button:hover {
  filter: brightness(0) saturate(100%) invert(89%) sepia(29%) saturate(125%) hue-rotate(141deg) brightness(97%) contrast(99%);
}
</style>
