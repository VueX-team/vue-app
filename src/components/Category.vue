<template>
  <section class="category">
    <Container>
      <div class="my-10">
        <SectionTitle :title="'Categories'" />

        <div class="flex items-center justify-between pt-5 pb-10">
          <SectionText :text="'Browse By Category'" />

          <PaginationCustom />
        </div>

        <div class="flex justify-between my-10">
          <swiper
            :modules="modules"
            :slides-per-view="5"
            :space-between="25"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(el, ind) in category" :key="ind">
              <CategoryCard :el="el" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../components/Container.vue'
import PaginationCustom from '../components/Pagination.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SectionText from '../components/SectionText.vue'
import CategoryCard from '../components/CategoryCard.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ref } from 'vue'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const category = ref([
  {
    id: 1,
    name: 'Phones',
    icon: 'phones'
  },
  {
    id: 2,
    name: 'Computers',
    icon: 'computers'
  },
  {
    id: 3,
    name: 'SmartWatch',
    icon: 'smartwatch'
  },
  {
    id: 4,
    name: 'Camera',
    icon: 'camera'
  },
  {
    id: 5,
    name: 'HeadPhones',
    icon: 'headphones'
  },
  {
    id: 6,
    name: 'Gaming',
    icon: 'gaming'
  }
])
</script>

<style lang="scss" scoped></style>
