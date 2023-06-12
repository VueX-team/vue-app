<template>
  <section>
    <Container>
      <div class="flex justify-end my-10">
        <button
          @click="scrollTop"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]"
        >
          <Icons name="arrow-up" color="black" />
        </button>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../components/Container.vue'
import Icons from '../components/Icons.vue'

const scrollTop = () => {
  window.scrollTo(0, 0)
}
</script>

<style lang="scss" scoped></style>
