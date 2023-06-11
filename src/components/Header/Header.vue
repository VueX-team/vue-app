<template>
  <header class="border-b">
    <div class="header-sale shadow">
      <p class="header-sale_p">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </p>
      <a href="" class="header-sale_a">Shop Now</a>
      <select class="header-sale_select">
        <option value="English">English</option>
        <option value="Russian">Russian</option>
      </select>
    </div>
    <Container>
      <div class="h-[94px] flex justify-between items-center">
        <img src="../../assets/images/Logo.svg" alt="" />
        <ul class="flex justify-center items-center gap-[48px]">
          <li class="">
            <router-link to="/">
              <span class="ml-3">Home</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/contact">
              <span class="ml-3">Contact</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/about">
              <span class="ml-3">About</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/signup">
              <span class="ml-3">Sign up</span>
            </router-link>
          </li>
        </ul>

        <div class="flex justify-center items-center gap-[24px]">
          <div
            class="flex justify-between items-center bg-[#F5F5F5] px-5 py-2 w-[243px] rounded-sm"
          >
            <input
              type="text"
              name=""
              value=""
              class="bg-[#F5F5F5] text-[12px] outline-none"
              placeholder="What are you looking for?"
            />
            <i class="bx bx-search text-[20px]"></i>
          </div>
          <i class="bx bx-heart text-[23px]"></i>
          <i class="bx bx-cart-alt text-[23px]"></i>
          <div
            class="w-[32px] h-[32px] bg-[#DB4444] text-white flex justify-center items-center rounded-full"
            :class="user ? '' : 'hidden'"
          >
            <i class="bx bx-user text-[23px]"></i>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup>
import Container from '@/components/Container.vue'
import { ref } from 'vue'

const user = ref(false)
</script>

<style scoped>
.header-sale {
  background-color: black;
  color: #fafafa;
  display: flex;
  justify-content: center;
  height: 48px;
  align-items: center;
  position: relative;
}

.header-sale_p {
  font-size: 14px;
}

.header-sale_a {
  font-weight: 600;
  margin-left: 8px;
  color: #fafafa;
}

.header-sale_select {
  background-color: black;
  outline-style: none;
  position: absolute;
  right: 136px;
  color: #fafafa;
}
</style>
