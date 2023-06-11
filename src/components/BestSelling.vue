<template>
  <section class="best-selling">
    <Container>
      <div class="my-10">
        <SectionTitle :title="'This Month'" />

        <div class="flex items-center justify-between pt-5 pb-10">
          <SectionText :text="'Best Selling Products'" />

          <div>
            <ViewAllBtn @show="(status) => (is_show_all = status)" :is_show_all="false" />
          </div>
        </div>

        <div class="flex justify-between my-10">
          <div v-for="(el, ind) in getList.slice(5, 9)" :key="ind">
            <BestSellingCard :el="el" />
          </div>
        </div>

        <div v-if="is_show_all" class="flex justify-between mb-10 mt-[100px]">
          <div v-for="(el, ind) in getList.slice(12, 16)" :key="ind">
            <BestSellingCard :el="el" />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../components/Container.vue'
import BestSellingCard from '../components/BestSellingCard.vue'
import ViewAllBtn from '../components/ViewAllBtn.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SectionText from '../components/SectionText.vue'

import { ref } from 'vue'
import { useProductStore } from '../stores/product'
const { getList, setList } = useProductStore()

const is_show_all = ref(false)
</script>

<style lang="scss" scoped></style>
