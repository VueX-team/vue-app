import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { products } from '../contants/products'

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    list: products.data
  })

  const getItem = (id) => {
    return state.list.find((el) => el.id == id)
  }

  const setList = (list) => {
    state.list = list
  }

  const getList = computed(() => state.list)

  return { setList, getList, getItem }
})
