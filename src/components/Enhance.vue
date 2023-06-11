<template>
  <section>
    <Container>
      <div class="bg-black py-20 px-14 flex justify-between mt-32">
        <div class="w-[50%]">
          <h6 class="font-semibold text-[16px] leading-[20px] text-[#00FF66]">
            <span> Categories </span>
          </h6>

          <h2 class="font-['Inter'] font-semibold text-[48px] leading-[60px] text-[#FAFAFA] my-14">
            <span> Enhance Your Music Experience </span>
          </h2>

          <CountDown />

          <button class="rounded bg-[#00FF66] py-4 px-14 mt-10">
            <span class="font-medium text-[16px] leading-[24px] text-[#FAFAFA]">Buy Now!</span>
          </button>
        </div>

        <div class="w-[50%]">
          <div class="relative flex items-center justify-center h-[400px]">
            <div
              class="absolute w-[600px] h-[600px] bg-white opacity-30 rounded-full blur-[100px]"
            ></div>
            <img
              class="w-full h-full object-cover absolute"
              src="../assets/images/enhance.png"
              alt="enhance"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../components/Container.vue'
import CountDown from '../components/CountDown.vue'
</script>

<style lang="scss" scoped></style>
