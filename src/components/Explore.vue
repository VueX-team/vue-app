<template>
  <section class="explore">
    <Container>
      <div class="my-10">
        <SectionTitle :title="'Our Products'" />

        <div class="flex items-center justify-between pt-5 pb-10">
          <SectionText :text="'Explore Our Products'" />

          <Pagination />
        </div>

        <div class="flex justify-between my-10">
          <div v-for="(el, ind) in getList.slice(16, 20)" :key="ind">
            <ExploreCard :el="el" />
          </div>
        </div>

        <div v-if="is_show_all" class="flex justify-between mb-10 mt-[100px]">
          <div v-for="(el, ind) in getList.slice(20, 24)" :key="ind">
            <ExploreCard :el="el" />
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
import ExploreCard from '../components/ExploreCard.vue'
import ViewAllBtn from '../components/ViewAllBtn.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SectionText from '../components/SectionText.vue'
import Pagination from '../components/Pagination.vue'

import { ref } from 'vue'
import { useProductStore } from '../stores/product'
const { getList, setList } = useProductStore()

const is_show_all = ref(false)
</script>

<style lang="scss" scoped></style>
