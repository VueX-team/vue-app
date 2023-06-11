<template>
  <div class="accordion">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="accordion-item"
      :class="{ active: activeIndex === index }"
    >
      <div class="accordion-title" @click="toggleAccordion(index)">
        {{ section.title }}
        <i class="bx" :class="activeIndex === index ? 'bx-chevron-down' : 'bx-chevron-up'"></i>
      </div>
      <div class="accordion-content">
        {{ section.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sections = [
  { title: 'Woman’s Fashion', content: 'Content Woman’s Fashion' },
  { title: 'Men’s Fashion', content: 'Content Men’s Fashion' },
  { title: 'Electronics', content: 'Content Electronics' },
  { title: 'Home & Lifestyle', content: 'Content Home & Lifestyle' },
  { title: 'Medicine', content: 'Content Medicine' },
  { title: 'Sports & Outdoor', content: 'Content Sports & Outdoor' },
  { title: 'Baby’s & Toys', content: 'Content Baby’s & Toys' },
  { title: 'Groceries & Pets', content: 'Content Groceries & Pets' }
]
const activeIndex = ref(0)

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? -1 : index
}
</script>

<style lang="scss">
.accordion {
  .accordion-item {
    .accordion-title {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;

      .bx {
        margin-left: auto;
        font-size: 16px;
        transition: transform 0.3s ease-in-out;
      }
    }

    .accordion-content {
      padding: 10px;
      display: none;
      border-bottom: 1px solid #ccc;
    }

    &.active {
      .accordion-content {
        display: block;
      }
    }
  }
}
</style>
