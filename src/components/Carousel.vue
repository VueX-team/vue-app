<template>
  <div class="carousel">
    <div class="slides" :style="{ transform: `translateX(${translateValue}px)` }">
      <div v-for="(item, index) in carouselItems" :key="index" class="slide">
        <img :src="item.image" :alt="item.altText" class="carousel-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const carouselItems = ref([
  { image: 'https://i.dummyjson.com/data/products/2/1.jpg', altText: 'Image 1' },
  { image: 'https://i.dummyjson.com/data/products/2/1.jpg', altText: 'Image 2' },
  { image: 'https://i.dummyjson.com/data/products/2/1.jpg', altText: 'Image 3' }
])

let translateValue = ref(0)

const slideCarousel = () => {
  const slideWidth = 300 // Adjust the slide width as needed
  translateValue.value -= slideWidth
}
</script>

<style lang="scss" scoped>
.carousel {
  height: 440px;
  width: 880px;
  background: #000;
  overflow: hidden;

  .slides {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .slide {
    flex: 0 0 auto;
    width: 100%;
    padding: 0 10px;
  }

  .carousel-image {
    // width: 100%;
    height: 100%;
  }
}
</style>
