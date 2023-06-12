<template>
  <section class="about">
    <Container>
      <RouteInfo route="About"/>

      <div class="my-10 flex items-center justify-between">
        <div class="w-[40%]">
          <h2 class="font-['Inter'] font-semibold text-[54px] leading-[64px] my-10">Our Story</h2>

          <div class="text-[16px] leading-[26px]">
            <h3 class="my-5">
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
              active presense in Bangladesh. Supported by wide range of tailored marketing, data and
              service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </h3>

            <h3>
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
              offers a diverse assotment in categories ranging from consumer.
            </h3>
          </div>
        </div>

        <div class="w-[50%] flex items-end justify-end bg-[#EB7EA8] rounded pt-5">
          <img class="h-[600px] object-cover" src="../assets/images/about-cover.png" alt="" />
        </div>
      </div>

      <div class="my-20 flex justify-between">
        <div v-for="(el, ind) in info" :key="ind">
          <InfoCard :el="el" />
        </div>
      </div>

      <div class="my-20">
        <div class="flex justify-between">
          <div v-for="(el, ind) in employee" :key="ind">
            <EmployeeCard :el="el" />
          </div>
        </div>

        <div class="flex items-center justify-center gap-3">
          <div class="w-3 h-3 rounded-full bg-black opacity-30"></div>
          <div class="w-3 h-3 rounded-full bg-black opacity-30"></div>
          <div
            class="w-5 h-5 rounded-full border-[3px] border-black border-opacity-30 flex items-center justify-center"
          >
            <div class="w-3 h-3 rounded-full bg-[#DB4444]"></div>
          </div>
          <div class="w-3 h-3 rounded-full bg-black opacity-30"></div>
          <div class="w-3 h-3 rounded-full bg-black opacity-30"></div>
        </div>
      </div>
    </Container>
  </section>

  <Service />
</template>

<script setup>
import Container from '../components/Container.vue'
import Service from '../components/Service.vue'
import InfoCard from '../components/InfoCard.vue'
import EmployeeCard from '../components/EmployeeCard.vue'
import RouteInfo from '../components/RouteInfo.vue'

import { ref } from 'vue'

const employee = ref([
  {
    id: 1,
    image: 'about-1.png',
    fullname: 'Tom Cruise',
    job: 'Founder & Chairman',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
  },
  {
    id: 2,
    image: 'about-2.png',
    fullname: 'Emma Watson',
    job: 'Managing Director',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
  },
  {
    id: 3,
    image: 'about-3.png',
    fullname: 'Will Smith ',
    job: 'Product Designer',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
  }
])

const info = ref([
  {
    id: 1,
    money: '10.5k',
    text: 'Sallers active our site',
    icon: 'saller'
  },
  {
    id: 2,
    money: '33k',
    text: 'Mopnthly Produduct Sale',
    icon: 'sale'
  },
  {
    id: 3,
    money: '45.5k',
    text: 'Customer active in our site',
    icon: 'customer'
  },
  {
    id: 4,
    money: '25k',
    text: 'Anual gross sale in our site',
    icon: 'sale'
  }
])
</script>

<style lang="scss" scoped></style>
