<template>
  <div class="my-10 flex gap-3 text-[14px] leading-[21px]">
    <router-link to="/"
      ><h6 class="opacity-50"><span>Home</span></h6></router-link
    >
    <h6 class="opacity-50"><span>/</span></h6>
    <h6>
      <span>{{ route }}</span>
    </h6>
  </div>
</template>

<script setup>
const props = defineProps(['route'])
</script>

<style lang="scss" scoped></style>
