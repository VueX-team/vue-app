<script setup>
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <div>
    <div class="w-full bg-black">
      <HeaderTop />
    </div>
    <Header />
    <router-view></router-view>
    <div class="w-full bg-black">
      <Footer />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
