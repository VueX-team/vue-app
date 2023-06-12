<template>
  <div class="group">
    <div
      class="border-2 group-hover:bg-[#DB4444] group-hover:border-[#DB4444] p-3 border-[#0000004D] rounded w-[200px] h-[180px] flex flex-col items-center justify-center gap-5"
    >
      <Icons class="group-hover:hidden block" :name="el.icon" color="black" />
      <Icons class="group-hover:block hidden" :name="el.icon" color="white" />

      <h6 class="text-[16px] leading-24px group-hover:text-white">
        <span>{{ el.name }}</span>
      </h6>
    </div>
  </div>
</template>

<script setup>
import Icons from '../components/Icons.vue'

const props = defineProps(['el'])
</script>

<style lang="scss" scoped></style>
