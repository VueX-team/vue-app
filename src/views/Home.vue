<script setup>
import Accordion from '@/components/Accordion.vue'
import Carousel from '@/components/Carousel.vue'
import Container from '../components/Container.vue'
import Header from '../components/Header/Header.vue'
import { useProductStore } from '../stores/product'

const { getProduct } = useProductStore()
</script>

<template>
  <section>
    <Container>
      <div class="flex gap-10">
        <div class="w-[20%] py-5 border-r border-slate-200">
          <Accordion />
        </div>
        <div class="w-[80%]">
          <Carousel />
        </div>
      </div>
    </Container>
  </section>
  <section>
    <Container>
      <div class="bg-black py-20 px-14 flex justify-between">
        <div class="w-[50%]">
          <h6 class="font-semibold text-[16px] leading-[20px] text-[#00FF66]">
            <span> Categories </span>
          </h6>

          <h2 class="font-['Inter'] font-semibold text-[48px] leading-[60px] text-[#FAFAFA] my-14">
            <span> Enhance Your Music Experience </span>
          </h2>

          <div class="flex gap-5 text-center">
            <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
              <div>
                <h6 class="font-semibold text-[16px] leading-[20px]">23</h6>
                <p class="text-[11px] leading-[18px]">Hours</p>
              </div>
            </div>

            <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
              <div>
                <h6 class="font-semibold text-[16px] leading-[20px]">05</h6>
                <p class="text-[11px] leading-[18px]">Days</p>
              </div>
            </div>

            <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
              <div>
                <h6 class="font-semibold text-[16px] leading-[20px]">59</h6>
                <p class="text-[11px] leading-[18px]">Minutes</p>
              </div>
            </div>

            <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
              <div>
                <h6 class="font-semibold text-[16px] leading-[20px]">35</h6>
                <p class="text-[11px] leading-[18px]">Seconds</p>
              </div>
            </div>
          </div>

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

      <div class="my-10">
        <div class="flex items-center gap-5">
          <div class="w-5 h-10 rounded bg-[#DB4444]"></div>

          <h6 class="font-semibold text-[16px] leading-[20px] text-[#DB4444]">
            <span>Our Products</span>
          </h6>
        </div>

        <div class="flex items-center justify-between py-5">
          <div>
            <h3 class="font-['Inter'] font-semibold text-[36px] leading-[48px]">
              <span>Explore Our Products</span>
            </h3>
          </div>

          <div class="flex gap-3">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]">
              <img src="../assets/icons/arrow-left.svg" alt="p" />
            </div>

            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]">
              <img src="../assets/icons/arrow-right.svg" alt="p" />
            </div>
          </div>
        </div>

        <div class=""></div>
      </div>
    </Container>
  </section>
</template>
