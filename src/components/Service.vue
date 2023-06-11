<template>
  <section class="service">
    <Container>
      <div class="flex justify-center gap-20 my-32">
        <div v-for="(el, ind) in service" :key="ind">
          <ServiceItem :el="el" />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../components/Container.vue'
import ServiceItem from '../components/ServiceItem.vue'
import { ref } from 'vue'

const service = ref([
  {
    id: 1,
    title: 'FREE AND FAST DELIVERY',
    text: 'Free delivery for all orders over $140',
    icon: 'delivery'
  },
  {
    id: 2,
    title: '24/7 CUSTOMER SERVICE',
    text: 'Friendly 24/7 customer support',
    icon: 'service'
  },
  {
    id: 3,
    title: 'MONEY BACK GUARANTEE',
    text: 'We reurn money within 30 days',
    icon: 'security'
  }
])
</script>

<style lang="scss" scoped></style>
