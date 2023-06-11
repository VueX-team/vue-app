<template>
  <div class="container">
    <div class="my-20 lg:flex">
      <div class="lg:w-[50%]">
        <img :src="authImg" alt="" class="rounded-lg" />
      </div>
      <div class="lg:w-[50%] flex items-center">
        <form @submit.prevent="useRegister" class="p-5 text-start w-[60%] mx-auto">
          <h1 class="text-3xl mb-3">Create an account</h1>
          <p class="text-sm mb-7">Enter your details below</p>
          <input
            type="text"
            placeholder="Name"
            class="w-full border-b border-black/30 pb-2 mb-8 outline-none"
            v-model="user.name"
            required="true"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            class="w-full border-b border-black/30 pb-2 mb-8 outline-none"
            v-model="user.email"
            required="true"
          />
          <input
            type="text"
            placeholder="Password"
            class="w-full border-b border-black/30 pb-2 mb-8 outline-none"
            v-model="user.password"
            required="true"
          />
          <button
            class="bg-[#DB4444] w-full py-4 text-white rounded-md mb-5 hover:bg-red-500 duration-150"
          >
            Create Account
          </button>
          <button
            class="border border-black/30 w-full py-4 text-black rounded-md mb-5 flex items-center justify-center gap-3 hover:bg-gray-200 duration-150"
          >
            <img :src="googleIcon" alt="" />
            Sign up with Google
          </button>
          <div class="flex py-4 items-center justify-center gap-3">
            <h4 class="text-gray-500">Already have account?</h4>
            <router-link to="/login" class="border-b border-black">Log in</router-link>
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

const user = reactive({
  name: '',
  email: '',
  password: ''
})
const router = useRouter()

const useRegister = () => {
  try {
    localStorage.setItem('token', JSON.stringify(user))
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
