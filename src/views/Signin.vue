<template>
  <div class="container">
    <div class="my-20 flex">
      <div class="w-[50%]">
        <img class="w-full h-auto" :src="authImg" alt="" />
      </div>
      <div class="w-[50%] flex items-center">
        <form @submit.prevent="useRegister" class="p-5 text-start w-[60%] mx-auto">
          <h1 class="text-3xl mb-3">Log in to Exclusive</h1>
          <p class="text-sm mb-7">Enter your details below</p>
          <input
            v-model="user.email"
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            class="w-full border-b border-black/30 pb-2 mb-8 outline-none"
            required="true"
          />
          <input
            v-model="user.password"
            type="password"
            placeholder="Password"
            class="w-full border-b border-black/30 pb-2 mb-8 outline-none"
            required="true"
          />
          <div class="flex gap-14 items-center justify-between">
            <button
              class="bg-[#DB4444] w-full py-3 text-white rounded-md mb-5 hover:bg-red-500 duration-150"
            >
              Log In
            </button>
            <button class="text-[#DB4444] w-full py-3 rounded-md mb-5 duration-150">
              Forget Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import googleIcon from '@/assets/images/Icon-Google.png'
import authImg from '@/assets/images/auth_img.png'
import { reactive } from 'vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
const user = reactive({
  email: '',
  password: ''
})
const router = useRouter()

const authStore = useAuthStore()

const useRegister = () => {
  try {
    localStorage.setItem('data', JSON.stringify(user))
    authStore.setData(user)
    authStore.setAuth(true)
    toast.success('Successfully Logged in', {
      autoClose: 1000,
      theme: 'light'
    })
    setTimeout(() => {
      router.push('/')
    }, 1000)
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="scss" scoped></style>
