<template>
  <div class="add-user-wrapper">
    <h1 class="text-3xl font-semibold mb-8">Add intern 👇🏻</h1>
    <div class="columns columns-2xl flex flex-col xl:flex-row justify-center gap-4">
      <InternInfoForm class="aspect-3/2" v-model:internData="internData" :submitInternData="submitInternData"
        buttonText="Add intern" />
      <UploadAvatar class="aspect-square" :avatarUrl="avatarUrl" @update-avatar="updateAvatar" />
    </div>
  </div>
</template>

<!-- <script setup>
import { ref } from 'vue';
import axios from 'axios';
import InternInfoForm from '../molecules/InternInfoForm.vue';
import UploadAvatar from '../molecules/UploadAvatar.vue';

const internData = ref({
  firstName: '',
  lastName: '',
});

const avatarUrl = ref('');

const updateAvatar = (newAvatarUrl) => {
  avatarUrl.value = newAvatarUrl;
};

const submitInternData = async (newInternData) => {
  try {
    const fullName = `${newInternData.firstName} ${newInternData.lastName}`;
    const response = await axios.post('https://reqres.in/api/users', {
      name: fullName,
      job: 'intern',
    });

    console.log('Intern added:', response.data);
  } catch (error) {
    console.error('Error adding intern:', error);
  }
};
</script> -->

<script setup>
import { ref } from 'vue';
import { useInternStore } from '@/stores/interns';
import { useRouter } from 'vue-router';
import axios from 'axios';
import InternInfoForm from '../molecules/InternInfoForm.vue';
import UploadAvatar from '../molecules/UploadAvatar.vue';

const store = useInternStore();
const router = useRouter();

const internData = ref({
  firstName: '',
  lastName: '',
});
const avatarUrl = ref('');

const updateAvatar = (newAvatarUrl) => {
  avatarUrl.value = newAvatarUrl;
};

const submitInternData = async (newInternData) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', {
      name: `${newInternData.firstName} ${newInternData.lastName}`,
      job: 'intern',
    });

    const newIntern = {
      id: response.data.id,
      first_name: newInternData.firstName,
      last_name: newInternData.lastName,
      email: `${newInternData.firstName.toLowerCase()}.${newInternData.lastName.toLowerCase()}@example.com`,
      avatar: avatarUrl.value || 'https://via.placeholder.com/150',
    };

    store.addIntern(newIntern); // 🚀 Aktualizujemy Store
    router.push('/'); // 🔄 Przekierowanie do listy
  } catch (error) {
    console.error('Error adding intern:', error);
  }
};
</script>

<style scoped></style>
