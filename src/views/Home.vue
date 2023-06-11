<script setup>
import Accordion from '@/components/Accordion.vue'
import Carousel from '@/components/Carousel.vue'
</script>

<template>
  <div class="container">
    <div class="accordion">
      <Accordion />
    </div>
    <div class="carousel">
      <Carousel />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 30px;
  display: flex;
}
.accordion {
  border-right: 1px solid #000;
  flex: 1;
  margin-right: 20px; /* Adjust margin as needed */
}
.carousel {
  flex: 2;
}
</style>
