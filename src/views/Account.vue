<template>
    <Header/>
    <section>
        <div class="container mx-auto px-[135px]">
            <div class="flex text-[14px] justify-between my-[80px]">
                <p class=""><span class="opacity-50">Home</span> / My Account</p>
                <p>Welcome! <span class="text-red-500">Md Rimel</span></p>
            </div>
            <div class="flex justify-between mb-[140px]">
                <div class="flex flex-col gap-[18px] font-[500]">
                    <h1 class="">Manage My Account</h1>
                    <div class="flex flex-col gap-[16px]">
                        <p class="ml-[25px] text-[#DB4444]">My Profile</p>
                        <p class="ml-[25px] opacity-50">Address Book</p>
                        <p class="ml-[25px] opacity-50">My Payment Options</p>
                    </div>
                    <h1 class="">My Orders</h1>
                    <div class="flex flex-col gap-[16px]">
                        <p class="ml-[25px] opacity-50">My Returns</p>
                        <p class="ml-[25px] opacity-50">My Cancellations</p>
                    </div>
                    <h1 class="">My Wishlist</h1>
                
                    
                </div>
                <div>
                    <div class="w-[870px] h-[630px] modal px-[80px] py-[40px]">
                        <form>
                            <h2 class="text-[#DB4444] text-[20px] font-[500]">Edit Your Profile</h2>
                            <div class="grid grid-cols-2 gap-x-[50px] gap-y-[24px]">
                                <div class="flex flex-col">
                                    <label for="first_name">First Name</label>
                                    <input type="text" name="first_name" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" placeholder="Md"> 
                                </div>
                                <div class="flex flex-col">
                                    <label for="last_name">Last Name</label>
                                    <input type="text" name="last_name" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" placeholder="Rimel"> 
                                </div>
                                <div class="flex flex-col">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" placeholder="rime@mail.com"> 
                                </div>
                                <div class="flex flex-col">
                                    <label for="address">Address</label>
                                    <input type="text" name="address" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" placeholder="Kingston, 5236, US"> 
                                </div>

                                <div class="flex flex-col col-span-2">
                                    <label for="current_passsword">Password Changes</label>
                                    <input type="password" name="current_passsword" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" placeholder="Current Password"> 
                                </div>
                                <div class="flex flex-col col-span-2">
                                    <input type="password" name="new_password" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" placeholder="New Password"> 
                                </div>
                                <div class="flex flex-col col-span-2">
                                    <input type="password" name="confirm_password" value="" class="bg-[#F5F5F5] px-3 py-2 rounded-md" placeholder="Confirm New Password"> 
                                </div>
                                <div class="flex justify-end items-center col-span-2">
                                    <button type="button" class="px-6 py-2">Cancel</button>
                                    <button type="submit" class="bg-[#DB4444] px-6 py-2 text-white rounded-md">Save Changes</button>
                                </div>
                                
                            
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <Footer/>
</template>

<script setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import Container from '../components/Container.vue'

</script>

<style scoped>
.modal{
    background: #FFFFFF;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
</style>