<template>
  <Container>
    <div class="flex items-center justify-between py-3">
      <div></div>

      <div class="flex items-center justify-center gap-5">
        <h6 class="text-[#FAFAFA]">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        </h6>
        <a href="#" class="text-white underline">Shop Now</a>
      </div>

      <select class="bg-black outline-none text-white">
        <option value="English">English</option>
        <option value="Russian">Russian</option>
      </select>
    </div>
  </Container>
</template>

<script setup>
import Container from '../Container.vue'
</script>

<style lang="scss" scoped>
.setting {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(75px);

  border-radius: 4px;
}
</style>
