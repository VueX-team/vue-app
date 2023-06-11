<template>
  <div>
    <div v-for="(item, index) in accordionItems" :key="index">
      <div
        class="flex items-center justify-between py-2 pr-4 cursor-pointer"
        @click="() => toggleAccordion(index)"
      >
        <div>{{ item.title }}</div>
        <i
          v-if="item.content"
          :class="{
            'bx bx-chevron-down': activeIndex === index,
            'bx bx-chevron-right': activeIndex !== index
          }"
          class="text-2xl"
        ></i>
      </div>
      <div v-if="item.content" v-show="activeIndex === index" class="border-black/50 p-4 bg-white">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const accordionItems = [
  { title: 'Woman’s Fashion', content: 'Content for Woman’s Fashion' },
  { title: 'Men’s Fashion', content: 'Content for Woman’s Fashion' },
  { title: 'Electronics' },
  { title: 'Home & Lifestyle' },
  { title: 'Medicine' },
  { title: 'Sports & Outdoor' },
  { title: 'Baby’s & Toys' },
  { title: 'Groceries & Pets' },
  { title: 'Health & Beauty' }
]

const activeIndex = ref(-1)

function toggleAccordion(index) {
  activeIndex.value = activeIndex.value === index ? -1 : index
}
</script>

<style>
.accordion-title {
  border-bottom: 1px solid #ddd;
}

.accordion-title i {
  font-size: 1.5rem;
}

.accordion-content {
  border-bottom: 1px solid #ddd;
}
</style>
