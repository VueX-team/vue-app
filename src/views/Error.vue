<template>
  <Container>
    <RouteInfo route="404 error" />

    <div class="text-center my-32">
      <h1 class="font-['Inter'] font-medium text-[110px] leading-[115px]">
        <span>404 Not Found</span>
      </h1>

      <h2 class="text-[16px] leading-[24px] py-5 mb-20">
        <span>Your visited page not found. You may go home page.</span>
      </h2>

      <router-link to="/" class="bg-red-500 px-10 py-5 text-white rounded-md">
        <span>Back to home page</span>
      </router-link>
    </div>
  </Container>
</template>

<script setup>
import Container from '../components/Container.vue'
import RouteInfo from '../components/RouteInfo.vue'
</script>
