<template>
  <div class="container mx-auto p-32">
    <div class="flex items-center justify-between">
      <h1 class="text-xl">Wishlist (??soni??)</h1>
      <button class="border border-gray-500 hover:bg-gray-300 rounded-lg py-4 px-10">
        Move All to Bag
      </button>
    </div>
    <div class="flex justify-between my-10">
      <LazyList
        :data="products"
        :itemsPerRender="4"
        containerClasses="list"
        defaultLoadingColor="#222"
      >
        <div class="h-[350px] w-[270px]">
          <div class="bg-[#F5F5F5] w-[270px] h-[250px]">
            <div class="flex items-center justify-between p-5">
              <span class="bg-red-500 px-3 py-1 rounded-lg text-white">-35%</span>
              <i class="bx bx-trash bg-white p-2 px-3 rounded-full shadow text-xl"></i>
            </div>
            <img
              src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              alt=""
              class="w-[80%] mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </LazyList>
    </div>
  </div>
</template>

<script setup>
import LazyList from 'lazy-load-list/vue'
</script>

<style lang="scss" scoped></style>
