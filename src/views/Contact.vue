<script setup>
import ContactLeft from '@/components/ContactLeft.vue'
import ContactInput from '@/components/ContactInput.vue'
</script>
<template>
  <div class="container mx-auto px-[135px]">
    <div class="flex text-[14px] justify-between my-[80px]">
      <p class=""><span class="opacity-50">Home</span> / Contact</p>
    </div>
    <div class="flex gap-10 py-32">
      <div class="w-[33%] shadow-lg rounded-lg p-10">
        <ContactLeft icon="bx bx-phone" title="Call To Us">
          <p class="mb-5">We are available 24/7, 7 days a week.</p>
          <p class="mb-5">Phone: +8801611112222</p>
        </ContactLeft>
        <div class="h-[2px] bg-black/30 mb-10"></div>
        <ContactLeft icon="bx bx-envelope" title="Write To US">
          <p class="mb-5">Fill out our form and we will contact you within 24 hours.</p>
          <p class="mb-5">Emails: customer@exclusive.com</p>
          <p class="mb-5">Emails: support@exclusive.com</p>
        </ContactLeft>
      </div>
      <div class="w-[66%] shadow-lg rounded-lg p-10">
        <div class="flex gap-5">
          <ContactInput placeholder="Your Name *" />
          <ContactInput placeholder="Your Email *" />
          <ContactInput placeholder="Your Phone *" />
        </div>
        <textarea
          cols="50"
          rows="14"
          class="bg-[#F5F5F5] border text-gray-900 text-lg rounded-md block w-full p-2.5 outline-none mb-10"
          placeholder="Your Massage"
        ></textarea>
        <div class="text-end">
          <button class="bg-[#DB4444] px-6 py-3 rounded-md text-white">Send Massage</button>
        </div>
      </div>
    </div>
  </div>
</template>
