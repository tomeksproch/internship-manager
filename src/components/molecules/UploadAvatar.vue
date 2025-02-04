<template>
  <div class="upload-avatar-wrapper">
    <div class="image-wrapper flex flex-col justify-center align-center p-8">
      <img :src="avatarUrl || avatarDefault" alt="Avatar" class="mb-8" />
      <CustomInput v-model="inputAvatarUrl" id="avatarUrl" placeholder="Enter new avatar URL" label="" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import avatarDefault from '../../assets/images/avatar.svg';
import CustomInput from '../atoms/CustomInput.vue';

defineProps({
  avatarUrl: {
    type: String,
    default: avatarDefault,
  },
});

const inputAvatarUrl = ref('');
</script>

<style scoped>
.upload-avatar-wrapper {
  background-color: white;
  height: 400px;
  border-radius: 8px;
  box-shadow: 8px 8px 0px 0px rgba(226, 226, 226, 1);
}

.image-wrapper {
  height: 100%;
  align-items: center;
}

img {
  height: 200px;
  width: 200px;
}
</style>
