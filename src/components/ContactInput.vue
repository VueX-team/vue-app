<template>
  <div>
    <input
      type="text"
      class="bg-[#F5F5F5] border text-gray-900 rounded-md block w-full p-2.5 outline-none h-[50px] mb-10 text-md"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<script setup>
const props = defineProps(['placeholder', 'title'])
</script>

<style lang="scss" scoped></style>
