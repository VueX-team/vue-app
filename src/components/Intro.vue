<template>
  <section class="intro">
    <Container>
      <div class="flex gap-10">
        <div class="w-[20%] py-5 border-r border-slate-200">
          <Accordion />
        </div>
        <div class="w-[80%]">
          <Carousel />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Accordion from '../components/Accordion.vue'
import Carousel from '../components/Carousel.vue'
import Container from '../components/Container.vue'
</script>

<style lang="scss" scoped></style>
