<template>
  <header class="">
    <Container class="container mx-auto">
      <div class="h-[94px] flex justify-between items-center">
        <img src="@/assets/images/Logo.svg" alt="" />

        <ul class="flex justify-center items-center gap-[48px]">
          <li class="">
            <router-link to="/">
              <span>Home</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/contact">
              <span>Contact</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/about">
              <span>About</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/signup">
              <span>Sign up</span>
            </router-link>
          </li>
        </ul>

        <div class="flex justify-center items-center gap-[24px] relative">
          <div
            class="flex justify-between items-center bg-[#F5F5F5] px-5 py-2 w-[243px] rounded-sm relative"
          >
            <input
              type="text"
              name=""
              value=""
              class="bg-[#F5F5F5] text-[12px] outline-none"
              placeholder="What are you looking for?"
            />
            <i class="absolute right-0 bx bx-search text-[20px]"></i>
          </div>
          <router-link to="/wishlist"><i class="bx bx-heart text-[23px]"></i></router-link>
          <router-link to="/cart"><i class="bx bx-cart-alt text-[23px]"></i></router-link>
          <div
            @click="toggleSettings"
            class="w-[32px] h-[32px] bg-[#DB4444] text-white flex justify-center items-center rounded-full"
            :class="user ? '' : 'hidden'"
          >
            <!-- <i class="bx bx-user text-[23px]"></i> -->
            <Icons name="user" />
          </div>
          <div
            class="w-[225px] h-[208px] absolute setting top-9 right-0 z-10"
            :class="isSettings ? '' : 'hidden'"
          >
            <ul
              class="flex flex-col gap-3 items-start justify-center pl-[20px] pt-[18px] text-[#FAFAFA] text-[14px]"
            >
              <li class="">
                <router-link to="/account"
                  ><i class="bx bx-user mr-2 text-[20px]"></i>Manage My Account</router-link
                >
              </li>
              <li class="">
                <router-link to="/order"
                  ><i class="bx bx-shopping-bag mr-2 text-[20px]"></i>My Order</router-link
                >
              </li>
              <li class="">
                <router-link to="/cancel"
                  ><i class="bx bx-x-circle mr-2 text-[20px]"></i>My Cancellations</router-link
                >
              </li>
              <li class="">
                <router-link to="/review"
                  ><i class="bx bx-star mr-2 text-[20px]"></i>My Review</router-link
                >
              </li>
              <li class="">
                <router-link to="/logout"
                  ><i class="bx bx-log-out mr-2 text-[20px]"></i>Logout</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup>
import Container from '../Container.vue'
import Icons from '../Icons.vue'

import { ref, computed, onMounted } from 'vue'

import { useAuthStore } from '../../stores/auth'

const user = ref(false)
const isSettings = ref(false)

const toggleSettings = () => {
  isSettings.value = !isSettings.value
}

onMounted(() => {
  const data = localStorage.getItem('data')
  if (data) {
    user.value = true
  }
})
</script>

<style lang="scss" scoped>
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
  right: 0;
  color: #fafafa;
}
.setting {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(75px);

  border-radius: 4px;
}

.router-link-exact-active {
  border-bottom: 1px solid gray;
}
</style>
