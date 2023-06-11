import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { cart_products } from '../contants/cart_products'

export const useCartStore = defineStore('cart', () => {
  const state = reactive({
    list: cart_products.data
  })

  const getItem = (id) => {
    return state.list.find((el) => el.id == id)
  }

  const setList = (list) => {
    state.list = list
  }

  const getList = computed(() => state.list)

  return { setList, getList }
})
