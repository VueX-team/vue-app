<template>
  <div>
    <div class="flex items-center gap-5 text-2xl mb-10">
      <i class="text-4xl bg-red-500 px-2 py-1 text-white rounded-full" :class="icon"></i>
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps(['icon', 'title'])
</script>

<style lang="scss" scoped></style>
