import { defineStore } from 'pinia'
import axios from 'axios'

export const useInternStore = defineStore('interns', {
  state: () => ({
    interns: [],
    originalInterns: [],
    totalPages: 1,
    currentPage: 1,
  }),

  actions: {
    async fetchInterns(page = 1) {
      try {
        const response = await axios.get('https://reqres.in/api/users', {
          params: { page },
        })
        this.interns = response.data.data
        this.originalInterns = response.data.data
        this.totalPages = response.data.total_pages
        this.currentPage = page
      } catch (error) {
        console.error('Błąd pobierania danych:', error)
      }
    },

    addIntern(intern) {
      this.interns = [...this.interns, intern]
    },

    updateIntern(id, updatedIntern) {
      this.interns = this.interns.map((intern) =>
        intern.id === id ? { ...intern, ...updatedIntern } : intern,
      )
    },

    deleteIntern(id) {
      this.interns = this.interns.filter((intern) => intern.id !== id)
    },

    resetInterns() {
      this.interns = [...this.originalInterns]
    },
  },
})
