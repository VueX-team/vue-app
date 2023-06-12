<template>
  <div class="group">
    <div
      class="border-2 group-hover:bg-[#DB4444] group-hover:border-[#DB4444] p-3 border-[#0000004D] rounded w-[300px] h-[250px] flex flex-col items-center justify-center text-center group-hover:text-white"
    >
      <div
        class="w-24 h-24 rounded-full flex items-center justify-center bg-[#c2c2c2] group-hover:bg-[#ff7b7b]"
      >
        <div
          class="w-16 h-16 rounded-full flex items-center justify-center bg-[#000000] group-hover:bg-white"
        >
          <Icons class="group-hover:hidden block" :name="el.icon" color="white" />
          <Icons class="group-hover:block hidden" :name="el.icon" color="black" />
        </div>
      </div>

      <h5 class="font-['Inter'] font-medium text-[32px] leaeding-[30px] mt-5 mb-2">
        <span>{{ el.money }}</span>
      </h5>

      <h6 class="text-[16px] leaeding-[24px]">
        <span>{{ el.text }}</span>
      </h6>
    </div>
  </div>
</template>

<script setup>
import Icons from '../components/Icons.vue'

const props = defineProps(['el'])
</script>

<style lang="scss" scoped></style>
