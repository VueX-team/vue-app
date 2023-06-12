<template>
  <button
    @click="addToCart(id)"
    class="group-hover:flex hidden absolute bottom-0 w-full bg-[#000000] items-center justify-center py-3 rounded-b"
  >
    <h6 class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
      <span>Add To Cart </span>
    </h6>
  </button>
</template>

<script setup>
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const props = defineProps(['id'])

const { getItem } = useProductStore()
const { setItem } = useCartStore()

const router = useRouter()

const addToCart = (id) => {
  const data = localStorage.getItem('data')
  if (!data) {
    alert('Please, register or login before!')
    router.push('/signin')
  }
  const product = getItem(id)

  setItem(product)
}
</script>

<style lang="scss" scoped></style>
