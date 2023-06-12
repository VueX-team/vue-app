<template>
  <div class="container mx-auto px-[135px]">
    <div class="flex text-[14px] justify-between my-[80px]">
      <p class=""><span class="opacity-50">Home</span> / My Account</p>
    </div>

    <div class="w-full">
      <table class="w-full border-separate border-spacing-y-4">
        <thead class="shadow h-[72px] text-center">
          <td class="w-[25%]">Product</td>
          <td class="w-[25%]">Price</td>
          <td class="w-[25%]">Quantity</td>
          <td class="w-[25%]">Subtotal</td>
        </thead>
        <tr v-for="el in getList" :key="el.id" class="shadow text-center">
          <td class="flex items-center px-3 py-3">
            <img :src="el.thumbnail" class="w-[50px] h-[39px]" alt="" /> {{ el.title }}
          </td>
          <td>{{ el.price }}$</td>
          <td>
            <input
              type="number"
              :id="el.id"
              @input="updateTotal(el)"
              value="1"
              min="0"
              placeholder="1"
              class="w-[50px] text-center border"
            />
          </td>
          <td>{{ el.price }}$</td>
        </tr>
      </table>
      <div class="flex justify-between mb-[80px]">
        <router-link to="/"><button class="px-6 py-3 border">Return to Shop</button></router-link>
        <button class="px-6 py-3 border">Update Cart</button>
      </div>

      <div class="flex justify-between mb-[140px]">
        <div>
          <input
            type="text"
            class="h-[56px] w-[300px] border rounded-md pl-4"
            placeholder="Coupon code"
          />
          <button class="px-6 py-4 rounded-md ml-[20px] bg-[#DB4444]">Apply coupon</button>
        </div>
        <div
          class="w-[470px] h-[324px] border-2 border-black rounded-md px-[24px] py-[32px] flex flex-col gap-3"
        >
          <h2 class="text-[20px] font-[500]">Cart Total</h2>
          <p class="flex justify-between"><span>Subtotal</span> <span>$1750</span></p>
          <hr />
          <p class="flex justify-between"><span>Shipping</span> <span>Free</span></p>
          <hr />
          <p class="flex justify-between"><span>Total</span> <span>$1750</span></p>
          <router-link to="/checkout" class="mx-auto"
            ><button class="px-5 py-3 rounded-md ml-[20px] my-[20px] text-white bg-[#DB4444]">
              Process to checkout
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { ref } from 'vue'
const { getList, setList } = useCartStore()
</script>

<style lang="scss" scoped></style>
