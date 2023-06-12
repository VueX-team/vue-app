import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    data: {
      email: null,
      password: null
    },
    is_auth: false
  })

  const setData = (data) => {
    state.data = data
  }

  const setAuth = (status) => {
    state.is_auth = status
  }

  const getData = computed(() => state.data)

  const getAuth = computed(() => state.is_auth)

  return { setData, setAuth, getData, getAuth }
})
