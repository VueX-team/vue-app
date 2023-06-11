<template>
  <div>
    <div class="w-full bg-black">
      <HeaderTop />
    </div>
    <div class="w-full border-b">
      <Header />
    </div>
    <router-view></router-view>
    <div class="w-full bg-black">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<style lang="scss" scoped></style>
