<template>
  <div class="flex items-center gap-5 pt-10">
    <div class="w-5 h-10 rounded bg-[#DB4444]"></div>

    <h6 class="font-semibold text-[16px] leading-[20px] text-[#DB4444]">
      <span>{{ title }}</span>
    </h6>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style lang="scss" scoped></style>
