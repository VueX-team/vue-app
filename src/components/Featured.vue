<template>
  <section class="featured">
    <Container>
      <div class="my-10">
        <SectionTitle :title="'Featured'" />

        <div class="flex items-center justify-between pt-5 pb-10">
          <SectionText :text="'New Arrival'" />
        </div>

        <div class="grid grid-cols-4 grid-rows-2 gap-5">
          <div
            class="relative bg-black rounded flex items-end justify-center row-span-2 col-span-2"
          >
            <div class="absolute left-5 bottom-5 w-[250px]">
              <h5 class="font-['Inter'] font-semibold text-[24px] leading-[24px] text-[#FAFAFA]">
                <span>PlayStation 5</span>
              </h5>
              <h6 class="text-[14px] leading-[21px] text-[#FAFAFA] my-3">
                <span>Black and White version of the PS5 coming out on sale.</span>
              </h6>

              <button class="border-b border-[#FFFFFF]">
                <span class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Shop now</span>
              </button>
            </div>
            <img
              class="w-[500px] h-[500px] object-contain"
              src="../assets/images/featured-1.png"
              alt=""
            />
          </div>
          <div class="relative bg-black rounded flex items-end justify-end col-span-2">
            <div class="absolute left-5 bottom-5 w-[260px]">
              <h5 class="font-['Inter'] font-semibold text-[24px] leading-[24px] text-[#FAFAFA]">
                <span>Women’s Collections</span>
              </h5>
              <h6 class="text-[14px] leading-[21px] text-[#FAFAFA] my-3">
                <span>Featured woman collections that give you another vibe.</span>
              </h6>

              <button class="border-b border-[#FFFFFF]">
                <span class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Shop now</span>
              </button>
            </div>
            <img
              class="w-[400px] h-[250px] object-contain"
              src="../assets/images/featured-2.png"
              alt=""
            />
          </div>
          <div class="relative bg-black rounded flex items-center justify-center">
            <div class="absolute left-5 bottom-5 w-[250px]">
              <h5 class="font-['Inter'] font-semibold text-[24px] leading-[24px] text-[#FAFAFA]">
                <span>Speakers</span>
              </h5>
              <h6 class="text-[14px] leading-[21px] text-[#FAFAFA] my-3">
                <span>Amazon wireless speakers</span>
              </h6>

              <button class="border-b border-[#FFFFFF]">
                <span class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Shop now</span>
              </button>
            </div>
            <img
              class="w-[200px] h-[200px] object-contain"
              src="../assets/images/featured-3.png"
              alt=""
            />
          </div>
          <div class="relative bg-black rounded flex items-center justify-center">
            <div class="absolute left-5 bottom-5 w-[250px]">
              <h5 class="font-['Inter'] font-semibold text-[24px] leading-[24px] text-[#FAFAFA]">
                <span>Perfume</span>
              </h5>
              <h6 class="text-[14px] leading-[21px] text-[#FAFAFA] my-3">
                <span>GUCCI INTENSE OUD EDP</span>
              </h6>

              <button class="border-b border-[#FFFFFF]">
                <span class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Shop now</span>
              </button>
            </div>
            <img
              class="w-[200px] h-[200px] object-contain"
              src="../assets/images/featured-4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../components/Container.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SectionText from '../components/SectionText.vue'
</script>

<style lang="scss" scoped></style>
