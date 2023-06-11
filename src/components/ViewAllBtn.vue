<template>
  <button @click="() => {is_show_all = !is_show_all; $emit('show', is_show_all)}" class="bg-[#DB4444] rounded py-4 px-12">
    <span class="font-medium text-[16px] leading-[24px] text-[#FAFAFA]"
      >View {{ is_show_all ? 'Less' : 'All' }} {{ text }}</span
    >
  </button>
</template>

<script setup>
const props = defineProps(['is_show_all', 'text'])
</script>

<style lang="scss" scoped></style>
