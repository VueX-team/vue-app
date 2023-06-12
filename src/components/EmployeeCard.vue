<template>
  <div>
    <div class="w-[400px] rounded bg-[#F5F5F5] flex items-end justify-center pt-5">
      <img
        v-if="el.image == 'about-1.png'"
        class="h-[400px] object-cover"
        src="../assets/images/about-1.png"
        alt="employee"
      />
      <img
        v-else-if="el.image == 'about-2.png'"
        class="h-[400px] object-cover"
        src="../assets/images/about-2.png"
        alt="employee"
      />
      <img
        v-else-if="el.image == 'about-3.png'"
        class="h-[400px] object-cover"
        src="../assets/images/about-3.png"
        alt="employee"
      />
    </div>

    <h4 class="font-['Inter'] font-medium text-[32px] leading-[30px] mt-10 mb-3">
      <span>{{ el.fullname }}</span>
    </h4>

    <h4 class="text-[16px] leading-[24px]">
      <span>{{ el.job }}</span>
    </h4>

    <div class="flex gap-2 my-5">
      <a :href="el.twitter"
        ><img src="" alt="" /><img
          class="w-[24px] h-[24px]"
          src="../assets/images/twitter.png"
          alt=""
      /></a>
      <a :href="el.instagram"><img src="" alt="" /><Icons name="instagram" color="black" /></a>
      <a :href="el.linkedin"><img src="" alt="" /><Icons name="linkedin" color="black" /></a>
    </div>
  </div>
</template>

<script setup>
import Icons from '../components/Icons.vue'

const props = defineProps(['el'])
</script>

<style lang="scss" scoped></style>
