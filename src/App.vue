<template>
  <div>
    <div class="fixed top-0 z-50 w-full">
      <div class="w-full bg-black">
        <HeaderTop />
      </div>
      <div class="w-full border-b bg-white">
        <Header />
      </div>
    </div>
    <main class="mt-44 min-h-screen">
      <router-view></router-view>
    </main>
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
