<template>
  <section class="most-sales">
    <Container
      ><div class="my-10">
        <SectionTitle :title="`Today's`" />

        <div class="flex items-center justify-between pt-5 pb-10">
          <div class="flex gap-16 items-end">
            <SectionText :text="'Most Sales'" />

            <CountDownMS />
          </div>

          <Pagination />
        </div>

        <div class="flex justify-between my-10">
          <div v-for="(el, ind) in getList.slice(0, 4)" :key="ind">
            <MostSalesCard :el="el" />
          </div>
        </div>

        <div v-if="is_show_all" class="flex justify-between mb-10 mt-[100px]">
          <div v-for="(el, ind) in getList.slice(4, 8)" :key="ind">
            <MostSalesCard :el="el" />
          </div>
        </div>

        <div class="flex items-center justify-center">
          <ViewAllBtn
            @show="(status) => (is_show_all = status)"
            :is_show_all="false"
            :text="'Products'"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../components/Container.vue'
import MostSalesCard from '../components/MostSalesCard.vue'
import CountDownMS from '../components/CountDownMS.vue'
import Pagination from '../components/Pagination.vue'
import ViewAllBtn from '../components/ViewAllBtn.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SectionText from '../components/SectionText.vue'

import { ref } from 'vue'
import { useProductStore } from '../stores/product'
const { getList, setList } = useProductStore()

const is_show_all = ref(false)
</script>

<style lang="scss" scoped></style>
