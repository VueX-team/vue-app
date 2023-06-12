<template>
  <div>
    <div class="flex items-center gap-5 text-2xl mb-10">
      <!-- <i class="text-4xl bg-red-500 px-2 py-1 text-white rounded-full" :class="icon"></i> -->
      <Icons :name="icon" />
      <h6 class="font-medium text-[24 px] leading-[24px]">
        <span> {{ title }} </span>
      </h6>
    </div>
    <slot />
  </div>
</template>

<script setup>
import Icons from './Icons.vue'

const props = defineProps(['icon', 'title'])
</script>

<style lang="scss" scoped></style>
