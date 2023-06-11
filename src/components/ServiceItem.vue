<template>
  <div class="flex flex-col items-center text-center">
    <div class="w-24 h-24 rounded-full flex items-center justify-center bg-[#c2c2c2]">
      <div class="w-16 h-16 rounded-full flex items-center justify-center bg-[#000000]">
        <Icons :name="el.icon" color="#FAFAFA" />
      </div>
    </div>

    <h5 class="font-semibold text-[20px] leaeding-[28px] mt-5 mb-2">
      <span>{{ el.title }}</span>
    </h5>

    <h6 class="text-[14px] leaeding-[21px]">
      <span>{{ el.text }}</span>
    </h6>
  </div>
</template>

<script setup>
import Icons from '../components/Icons.vue'

const props = defineProps(['el'])
</script>

<style lang="scss" scoped></style>
