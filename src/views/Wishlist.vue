<template>
  <div class="container mx-auto py-10">
    <div class="flex items-center justify-between mb-5">
      <h1 class="text-xl">Wishlist ({{ products.length }})</h1>
      <button class="border border-gray-500 hover:bg-gray-300 rounded-lg py-4 px-10">
        Move All to Bag
      </button>
    </div>

    <div class="grid grid-cols-4">
      <div v-for="el in products" class="h-[400px] w-[270px]">
        <div class="bg-[#F5F5F5] w-[270px] h-[250px]">
          <div class="flex items-center justify-between p-5">
            <span class="bg-red-500 px-3 py-1 rounded-lg text-white"> -{{ el.stock }}</span>
            <i
              @click="() => deleteProduct(el.id)"
              class="bx bx-trash bg-white p-2 px-3 rounded-full shadow text-xl cursor-pointer"
            ></i>
          </div>
          <img
            :src="el.thumbnail"
            alt=""
            class="w-[80%] mx-auto object-cover h-[200px]"
            loading="lazy"
          />
          <button @click="() => addCart(el)" class="bg-black w-full text-white py-3">
            <i class="bx bx-cart"></i> Add To Cart
          </button>
          <h1 class="text-xl py-2">{{ el.title }}</h1>
          <div class="flex items-center gap-3">
            <span class="text-lg text-red-500">${{ el.price }}</span>
            <span class="text-lg text-gray-500 line-through">${{ el.price + el.stock }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LazyList from 'lazy-load-list/vue'
import { useWithlistStore } from '@/stores/wishlist'
import { useCartStore } from '@/stores/cart'
import { ref, onMounted } from 'vue'
import { toast } from 'vue3-toastify'

const cartStore = useCartStore()
const store = useWithlistStore()
const products = ref([])

const deleteProduct = (id) => {
  store.deleteWishlist(id)
  toast.success('Delete SuccessFuly', {
    autoClose: 1000,
    theme: 'light'
  })
}

const addCart = (list) => {
  cartStore.setItem(list)
  toast.success('Product added to Cart SuccessFuly', {
    autoClose: 1000,
    theme: 'light'
  })
}

onMounted(() => {
  products.value = store.getAll()
})
</script>

<style lang="scss" scoped></style>
