<script setup>
import Accordion from '@/components/Accordion.vue'
import Carousel from '@/components/Carousel.vue'
</script>

<template>
  <div class="flex gap-10">
    <div class="w-[20%] py-10 border-r border-slate-200">
      <Accordion />
    </div>
    <div class="w-[80%]">
      <Carousel />
    </div>
  </div>
</template>
