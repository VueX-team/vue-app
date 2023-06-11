<template>
  <div class="container mx-auto p-32">
    <div v-if="product.length" class=""></div>
    <LazyList v-else :data="product" containerClasses="list" defaultLoadingColor="#222">
      <div class="flex gap-3 text-xl">
        <span class="text-gray-500">Account</span>
        <span class="text-gray-500">/</span>
        <span class="text-gray-500">{{ product?.category }}</span>
        <span class="text-gray-500">/</span>
        <span class="text-black">{{ product?.title }}</span>
      </div>
      <div class="text-center py-32 pb-20">
        <div class="lg:flex gap-5">
          <div class="w-full lg:w-[60%] flex items-center gap-10">
            <div class="space-y-5">
              <div
                class="bg-[#F5F5F5] shadow-lg rounded-xl h-[130px] w-[170px] flex items-center p-3"
                v-for="el in product?.images?.slice(0, 4)"
              >
                <img :src="el" alt="" class="object-cover rounded-lg h-full" />
              </div>
            </div>
            <div
              class="bg-[#F5F5F5] shadow-xl w-full h-full flex items-center p-5 px-10 rounded-xl"
            >
              <img :src="product?.thumbnail" alt="" class="object-cover w-full rounded-xl" />
            </div>
          </div>
          <div class="text-start pl-5">
            <h1 class="text-3xl">{{ product?.title }}</h1>
            <div class="flex items-center w-full gap-1">
              <div class="flex items-center">
                <i
                  v-for="el in Math.floor(product.rating || 0)"
                  class="bx bxs-star text-yellow-500 text-lg"
                ></i>
                <i
                  v-for="el in Math.ceil(5 - product.rating || 0)"
                  class="bx bxs-star text-black/30 text-lg"
                ></i>
              </div>
              <span class="text-sm">({{ product.discountPercentage }}150 Reviews)</span>
              <span class="text-sm text-[#00FF66]">In Stock</span>
            </div>
            <h2 class="text-2xl py-3">${{ product.price }}</h2>
            <p class="text-sm mb-5">{{ product.description }}</p>
            <div class="mb-5 border-b border-black/30"></div>
            <div class="mb-5 flex items-center gap-2">
              <label class="text-lg mr-5">Colours:</label>
              <input type="radio" class="h-[20px] accent-[#A0BCE0]" name="color1" checked />
              <input type="radio" class="h-[20px] accent-[#E07575]" name="color" checked />
            </div>
            <div class="mb-5 flex items-center gap-2">
              <span class="text-lg mr-5">Size:</span>
              <button
                v-for="el in ['XS', 'S', 'M', 'L', 'XL']"
                class="border border-black/30 rounded-lg h-[35px] w-[35px] hover:bg-red-500 hover:text-white hover:border-0"
              >
                {{ el }}
              </button>
            </div>
            <div class="flex gap-3">
              <AdderInput />
              <button class="bg-[#DB4444] rounded-md w-[150px] text-white">Buy Now</button>
              <button
                class="border border-black/30 rounded-md px-3 hover:bg-gray-200 text-2xl flex items-center justify-center"
              >
                <i class="bx bx-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LazyList>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useWithlistStore } from '@/stores/wishlist'
import { ref, onMounted } from 'vue'
import AdderInput from '@/components/AdderInput.vue'

const store = useWithlistStore()
const product = ref('')

onMounted(() => {
  product.value = store.getWishlist(1)
})
</script>
