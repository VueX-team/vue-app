<template>
  <Container>
    <RouteInfo route="Contact" />

    <div class="flex justify-between my-10">
      <div class="w-[30%] custom-shadow rounded-lg p-10">
        <ContactLeft icon="phone" title="Call To Us">
          <p class="mb-5">We are available 24/7, 7 days a week.</p>
          <p class="mb-5">Phone: +8801611112222</p>
        </ContactLeft>

        <div class="h-[2px] bg-black/30 mb-10"></div>

        <ContactLeft icon="email" title="Write To US">
          <p class="mb-5">Fill out our form and we will contact you within 24 hours.</p>
          <p class="mb-5">Emails: customer@exclusive.com</p>
          <p class="mb-5">Emails: support@exclusive.com</p>
        </ContactLeft>
      </div>

      <div class="w-[66%] custom-shadow rounded-lg p-10">
        <div class="flex gap-5">
          <ContactInput placeholder="Your Name *" />
          <ContactInput placeholder="Your Email *" />
          <ContactInput placeholder="Your Phone *" />
        </div>

        <textarea
          cols="50"
          rows="8"
          class="bg-[#F5F5F5] border text-gray-900 text-lg rounded-md block w-full p-2.5 outline-none mb-10"
          placeholder="Your Massage"
        ></textarea>

        <div class="text-end">
          <button class="bg-[#DB4444] px-6 py-3 rounded-md text-white">Send Massage</button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from '../components/Container.vue'
import RouteInfo from '../components/RouteInfo.vue'
import ContactLeft from '@/components/ContactLeft.vue'
import ContactInput from '@/components/ContactInput.vue'
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
}
</style>
