<template>
  <div>
    <h1 class="main-title mb-8">Interns manager 🧠</h1>
    <div class="list-wrapper p-8">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <SearchBar @updateSearch="handleSearch" />
        <CustomButton label="Add Intern" @click="addIntern" />
      </div>

      <div v-for="(intern, index) in filteredInterns" :key="intern.id" :class="{ 'bg-gray-100': index % 2 === 1 }"
        class="flex flex-col gap-4">
        <InternListElement :id="intern.id" :firstName="intern.first_name" :lastName="intern.last_name"
          :email="intern.email" :avatar="intern.avatar" @internDeleted="removeIntern" />
      </div>
    </div>
    <div class="pagination p-8">
      <ListPagination :changePage="changePage" :totalPages="totalPages" :currentPage="currentPage"
        :pagesToShow="pagesToShow" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import InternListElement from '../molecules/InternListElement.vue';
import ListPagination from '../atoms/ListPagination.vue';
import SearchBar from '../atoms/SearchBar.vue';
import CustomButton from '../atoms/CustomButton.vue';

const interns = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);
const searchText = ref('');
const router = useRouter();

const fetchInterns = async () => {
  try {
    const response = await axios.get(`https://reqres.in/api/users`, {
      params: { page: currentPage.value }
    });

    interns.value = response.data.data;
    totalPages.value = response.data.total_pages;
  } catch (error) {
    console.error('Failed to fetch interns', error);
  }
};

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

watch(currentPage, fetchInterns);

const pagesToShow = computed(() => {
  const pages = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i);
  }
  return pages;
});

const filteredInterns = computed(() => {
  if (!searchText.value) {
    return interns.value;
  }
  return interns.value.filter((intern) => {
    return (
      intern.first_name.toLowerCase().includes(searchText.value.toLowerCase()) ||
      intern.last_name.toLowerCase().includes(searchText.value.toLowerCase())
    );
  });
});

const handleSearch = (text) => {
  searchText.value = text;
};

const addIntern = () => {
  router.push('/add');
};

const removeIntern = (id) => {
  interns.value = interns.value.filter((intern) => intern.id !== id);
};

onMounted(fetchInterns);
</script>

<style scoped>
.main-title {
  font-size: 40px;
  font-weight: 600;
  text-align: center;
}

.list-wrapper {
  background-color: white;
  box-shadow: -8px 8px 0px 0px rgba(226, 226, 226, 1);
  border-radius: 8px;
}

.bg-gray-100 {
  background-color: #e2e2e227;
  border-radius: 8px;
}
</style>
