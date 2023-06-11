<script setup>
import appleSliderImg from '@/assets/images/apple_slider_img.png'
import appleLogo from '@/assets/images/apple_logo.png'

import { ref } from 'vue'

const activeSlide = ref(2)

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + slides.value.length) % slides.value.length
}

const setActiveSlide = (index) => {
  activeSlide.value = index
}
</script>

<template>
  <div class="relative p-5 my-10 bg-black rounded-md">
    <div class="h-[350px] text-white">
      <div v-for="(slide, index) in 5" :key="index" :class="{ hidden: activeSlide !== index }">
        <div class="flex items-center justify-between pl-10">
          <div class="">
            <div class="flex items-center gap-10">
              <img :src="appleLogo" alt="" />
              <h2>iPhone 1{{ index + 1 }} Series</h2>
            </div>
            <h1 class="text-[48px] my-5 w-[350px]">Up to 1{{ index }}% off Voucher</h1>
            <h2 class="flex items-center text-lg gap-2">
              <h2 class="border-b">Show now</h2>
              <i class="bx bx-right-arrow-alt text-3xl no-underline"></i>
            </h2>
          </div>
          <img :src="appleSliderImg" class="h-full" />
        </div>
      </div>
    </div>
    <div class="carousel-dots">
      <button
        v-for="(slide, index) in 5"
        :key="index"
        @click="setActiveSlide(index)"
        :class="{ 'carousel-dot': true, active: activeSlide === index }"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.carousel-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}

.carousel-dot.active {
  background-color: orangered;
  border: 2px solid white;
}
</style>
