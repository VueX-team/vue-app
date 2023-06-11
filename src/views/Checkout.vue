<template>
    <div class="container mx-auto px-[135px]">
        <div class="flex text-[14px] justify-between my-[80px]">
            <p class=""><span class="opacity-50">Account / My Account / Product / View Cart</span> /Checkout </p>

        </div>

        <h1 class="text-[36px] font-[500]">Billing Details</h1>

        <div class="flex justify-between mb-[140px]">
            <div class="grid grid-cols-1 gap-y-[24px] w-[470px]  text-gray-400">
                <div class="flex flex-col ">
                    <label for="first_name">First Name*</label>
                    <input type="text" name="first_name" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" > 
                </div>
                <div class="flex flex-col">
                    <label for="last_name">Company Name</label>
                    <input type="text" name="last_name" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md"> 
                </div>
                <div class="flex flex-col">
                    <label for="email">Street Address*</label>
                    <input type="text" name="email" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" > 
                </div>
                <div class="flex flex-col">
                    <label for="email">Apartment, floor, etc</label>
                    <input type="text" name="email" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" > 
                </div>
                <div class="flex flex-col">
                    <label for="email">Town, City</label>
                    <input type="text" name="email" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" > 
                </div>
                <div class="flex flex-col">
                    <label for="email">Phone number</label>
                    <input type="text" name="email" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" > 
                </div>
                <div class="flex flex-col">
                    <label for="email">Email Address</label>
                    <input type="text" name="email" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" > 
                </div>
                <div class="flex">
                    <input type="checkbox" name="email" value="" class="bg-[#650b0b] px-3 py-2 rounded-md" > 
                    <p class="text-black">Save this information for faster check-out next time</p>
                </div>
            
            </div>
            <div class="w-[527px]">
                <div v-for="el in getList" :key="el.id" class="flex justify-between items-center">
                        <p class="flex items-center px-3 py-3 "> <img :src="el.thumbnail" class="w-[40px] h-[34px]" alt=""> {{el.title}}</p>
                        <p>${{el.price}}</p>
                </div>
                <div class="py-[32px] flex flex-col gap-3">
                    <p class="flex justify-between"><span>Subtotal</span> <span>$1750</span></p>
                    <hr>
                    <p class="flex justify-between"><span>Shipping</span> <span>Free</span></p>
                    <hr>
                    <p class="flex justify-between"><span>Total</span> <span>$1750</span></p>
                </div>

                <div class="flex flex-col gap-2">
                    <div>
                        <input type="radio" name="bank" value="Bank" class="mr-3"><label for="bank">Bank</label>
                    </div>
                    <div>
                        <input type="radio" name="bank" value="cash" class="mr-3"><label for="bank">Cash on delivery</label>
                    </div>
                </div>
                <div class="w-full flex mt-3">
                    <input type="text" class="h-[56px] w-full border-2 border-black rounded-md pl-4" placeholder="Coupon code">
                    <button class="px-6 py-4 w-[50%] rounded-md ml-[20px] bg-[#DB4444]">Apply coupon</button>
                </div>
                <button class="py-4 rounded-md mt-4 px-6 bg-[#DB4444] text-white">Place order</button>

            </div>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '../stores/cart'
    import { ref } from 'vue'
    const { getList, setList } = useCartStore()
</script>

<style lang="scss" scoped>

</style>