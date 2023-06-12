<template>
  <div>
    <h3 class="font-['Inter'] font-semibold text-[36px] leading-[48px]">
      <span>{{ text }}</span>
    </h3>
  </div>
</template>

<script setup>
const props = defineProps(['text'])
</script>

<style lang="scss" scoped></style>
