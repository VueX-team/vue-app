import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
// import { products } from '@/constants/products'

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    // list: products
  })

  const getItem = (id) => {
    return state.list.find((el) => el.id == id)
  }
})
