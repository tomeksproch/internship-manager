<template>
  <div class="add-user-wrapper">
    <h1 class="text-3xl font-semibold mb-8">Edit intern 👇🏻</h1>
    <div class="columns columns-2xl flex flex-col xl:flex-row justify-center gap-4">
      <InternInfoForm class="aspect-3/2" v-model:internData="internData" :submitInternData="submitInternData"
        buttonText="Update intern" />
      <UploadAvatar class="aspect-square" :avatarUrl="avatarUrl" @update-avatar="updateAvatar" />
    </div>
  </div>
</template>

<!-- <script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import UploadAvatar from '../molecules/UploadAvatar.vue';
import InternInfoForm from '../molecules/InternInfoForm.vue';

const route = useRoute();
const router = useRouter();

const internData = ref({
  firstName: '',
  lastName: '',
});

const avatarUrl = ref('');

const updateAvatar = (newAvatarUrl) => {
  avatarUrl.value = newAvatarUrl;
};

const fetchInternData = async () => {
  try {
    const response = await axios.get(`https://reqres.in/api/users/${route.params.id}`);
    const intern = response.data.data;
    internData.value.firstName = intern.first_name;
    internData.value.lastName = intern.last_name;
    avatarUrl.value = intern.avatar;
  } catch (error) {
    console.error('Failed to fetch intern data', error);
  }
};

const submitInternData = async (updatedInternData) => {
  try {
    const response = await axios.put(`https://reqres.in/api/users/${route.params.id}`, {
      first_name: updatedInternData.firstName,
      last_name: updatedInternData.lastName,
      avatar: avatarUrl.value,
    });

    console.log('Intern updated:', response.data);
    router.push('/');
  } catch (error) {
    console.error('Error updating intern:', error);
  }
};

onMounted(() => {
  fetchInternData();
});
</script> -->

<script setup>
import { ref, onMounted } from 'vue';
import { useInternStore } from '@/stores/interns';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import UploadAvatar from '../molecules/UploadAvatar.vue';
import InternInfoForm from '../molecules/InternInfoForm.vue';

const store = useInternStore();
const route = useRoute();
const router = useRouter();

const internData = ref({
  firstName: '',
  lastName: '',
});
const avatarUrl = ref('');

const fetchInternData = () => {
  const intern = store.interns.find((i) => i.id == route.params.id);
  if (intern) {
    internData.value.firstName = intern.first_name;
    internData.value.lastName = intern.last_name;
    avatarUrl.value = intern.avatar;
  }
};

const updateAvatar = (newAvatarUrl) => {
  avatarUrl.value = newAvatarUrl;
};

const submitInternData = async (updatedInternData) => {
  try {
    await axios.put(`https://reqres.in/api/users/${route.params.id}`, {
      first_name: updatedInternData.firstName,
      last_name: updatedInternData.lastName,
      avatar: avatarUrl.value,
    });

    store.updateIntern(route.params.id, {
      first_name: updatedInternData.firstName,
      last_name: updatedInternData.lastName,
      avatar: avatarUrl.value,
    });

    router.push('/'); // 🔄 Przekierowanie na listę
  } catch (error) {
    console.error('Error updating intern:', error);
  }
};

onMounted(fetchInternData);
</script>

<style scoped></style>
