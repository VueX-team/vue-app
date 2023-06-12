<template>
  <div
    class="group duration-800 w-[300px] h-[300px] flex items-center justify-center p-14 rounded bg-[#F5F5F5] relative"
  >
    <div class="absolute top-3 right-3 flex flex-col gap-3">
      <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
        <img src="../assets/icons/like.svg" alt="p" />
      </div>

      <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
        <img src="../assets/icons/visible.svg" alt="p" />
      </div>
    </div>

    <AddToCartBtn :id="el.id" />

    <img class="h-full object-cover rounded-lg" :src="el.thumbnail" alt="image" />
  </div>

  <div class="w-[300px]">
    <h6 class="font-medium text-[16px] leading-[24px] py-3">
      <span>{{ el.title }}</span>
    </h6>

    <div class="flex gap-3">
      <h6 class="font-medium text-[16px] leading-[24px] text-[#DB4444]">
        <span>${{ el.price }}</span>
      </h6>

      <div class="flex">
        <img v-for="(r, ind) in Math.floor(el.rating)" src="../assets/icons/star-fill.svg" />
        <img v-for="(r, ind) in 5 - Math.floor(el.rating)" src="../assets/icons/star.svg" />
      </div>

      <h6 class="font-semibold text-[16px] leading-[21px] opacity-50">
        <span>({{ el.stock }})</span>
      </h6>
    </div>
  </div>
</template>

<script setup>
import AddToCartBtn from './AddToCartBtn.vue'

const props = defineProps(['el'])
</script>

<style lang="scss" scoped></style>
