<template>
  <section>
    <Container>
      <div class="flex gap-10">
        <div class="w-[20%] py-5 border-r border-slate-200">
          <Accordion />
        </div>
        <div class="w-[80%]">
          <Carousel />
        </div>
      </div>
    </Container>
  </section>
  <section>
    <Container>
      <div class="my-10">
        <div class="flex items-center gap-5 pt-10">
          <div class="w-5 h-10 rounded bg-[#DB4444]"></div>

          <h6 class="font-semibold text-[16px] leading-[20px] text-[#DB4444]">
            <span>Today's</span>
          </h6>
        </div>

        <div class="flex items-center justify-between pt-5 pb-10">
          <div class="flex gap-10 items-center">
            <div>
              <h3 class="font-['Inter'] font-semibold text-[36px] leading-[48px]">
                <span>Most Sales</span>
              </h3>
            </div>

            <div class="flex gap-5 text-center">
              <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
                <div>
                  <h6 class="font-semibold text-[16px] leading-[20px]">23</h6>
                  <p class="text-[11px] leading-[18px]">Hours</p>
                </div>
              </div>

              <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
                <div>
                  <h6 class="font-semibold text-[16px] leading-[20px]">05</h6>
                  <p class="text-[11px] leading-[18px]">Days</p>
                </div>
              </div>

              <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
                <div>
                  <h6 class="font-semibold text-[16px] leading-[20px]">59</h6>
                  <p class="text-[11px] leading-[18px]">Minutes</p>
                </div>
              </div>

              <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
                <div>
                  <h6 class="font-semibold text-[16px] leading-[20px]">35</h6>
                  <p class="text-[11px] leading-[18px]">Seconds</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]">
              <img src="../assets/icons/arrow-left.svg" alt="p" />
            </div>

            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]">
              <img src="../assets/icons/arrow-right.svg" alt="p" />
            </div>
          </div>
        </div>

        <div class="flex justify-between my-10">
          <div v-for="(el, ind) in getList.slice(5, 9)" :key="ind">
            <div
              :id="el.id"
              class="group duration-800 w-[300px] h-[300px] flex items-center justify-center p-14 rounded bg-[#F5F5F5] relative"
            >
              <div class="absolute top-3 left-3 bg-[#DB4444] rounded py-1 px-3">
                <h6 class="text-[12px] leading-[18px] text-[#FAFAFA]">
                  <span>-{{ Math.round(el.discountPercentage) }}% </span>
                </h6>
              </div>

              <div class="absolute top-3 right-3 flex flex-col gap-3">
                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/like.svg" alt="p" />
                </div>

                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/visible.svg" alt="p" />
                </div>
              </div>

              <div
                class="group-hover:flex hidden absolute bottom-0 w-full bg-[#000000] items-center justify-center py-3 rounded-b"
              >
                <h6 class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
                  <span>Add To Cart </span>
                </h6>
              </div>

              <img class="h-full object-cover rounded-lg" :src="el.thumbnail" alt="image" />
            </div>

            <div class="w-[300px]">
              <h6 class="font-medium text-[16px] leading-[24px] py-3">
                <span>{{ el.title }}</span>
              </h6>

              <div class="flex gap-3 mb-2">
                <h6 class="font-medium text-[16px] leading-[24px] text-[#DB4444]">
                  <span>${{ Math.floor(el.price * (100 - el.discountPercentage)) / 100 }}</span>
                </h6>

                <h6 class="font-medium text-[16px] leading-[24px] line-through opacity-50">
                  <span>${{ el.price }}</span>
                </h6>
              </div>

              <div class="flex gap-3">
                <div class="flex">
                  <img
                    v-for="(r, ind) in Math.floor(el.rating)"
                    src="../assets/icons/star-fill.svg"
                  />
                  <img
                    v-for="(r, ind) in 5 - Math.floor(el.rating)"
                    src="../assets/icons/star.svg"
                  />
                </div>

                <h6 class="font-semibold text-[16px] leading-[21px] opacity-50">
                  <span>({{ el.stock }})</span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div v-if="is_show_all" class="flex justify-between mb-10 mt-[100px]">
          <div v-for="(el, ind) in getList.slice(12, 16)" :key="ind">
            <div
              :id="el.id"
              class="group duration-800 w-[300px] h-[300px] flex items-center justify-center p-14 rounded bg-[#F5F5F5] relative"
            >
              <div class="absolute top-3 right-3 flex flex-col gap-3">
                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/like.svg" alt="p" />
                </div>

                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/visible.svg" alt="p" />
                </div>
              </div>

              <div
                class="group-hover:flex hidden absolute bottom-0 w-full bg-[#000000] items-center justify-center py-3 rounded-b"
              >
                <h6 class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
                  <span>Add To Cart </span>
                </h6>
              </div>

              <img class="h-full object-cover rounded-lg" :src="el.thumbnail" alt="image" />
            </div>

            <div class="w-[300px]">
              <h6 class="font-medium text-[16px] leading-[24px] py-3">
                <span>{{ el.title }}</span>
              </h6>

              <div class="flex gap-3 mb-2">
                <h6 class="font-medium text-[16px] leading-[24px] text-[#DB4444]">
                  <span>${{ Math.floor(el.price * (100 - el.discountPercentage)) / 100 }}</span>
                </h6>

                <h6 class="font-medium text-[16px] leading-[24px] line-through opacity-50">
                  <span>${{ el.price }}</span>
                </h6>
              </div>

              <div class="flex gap-3">
                <div class="flex">
                  <img
                    v-for="(r, ind) in Math.floor(el.rating)"
                    src="../assets/icons/star-fill.svg"
                  />
                  <img
                    v-for="(r, ind) in 5 - Math.floor(el.rating)"
                    src="../assets/icons/star.svg"
                  />
                </div>

                <h6 class="font-semibold text-[16px] leading-[21px] opacity-50">
                  <span>({{ el.stock }})</span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <button @click="is_show_all = !is_show_all" class="bg-[#DB4444] rounded py-4 px-12">
            <span class="font-medium text-[16px] leading-[24px] text-[#FAFAFA]"
              >View {{ is_show_all ? 'Less' : 'All' }} Products</span
            >
          </button>
        </div>
      </div>

      <div class="my-10">
        <div class="flex items-center gap-5 pt-10">
          <div class="w-5 h-10 rounded bg-[#DB4444]"></div>

          <h6 class="font-semibold text-[16px] leading-[20px] text-[#DB4444]">
            <span>Categories</span>
          </h6>
        </div>

        <div class="flex items-center justify-between pt-5 pb-10">
          <div>
            <h3 class="font-['Inter'] font-semibold text-[36px] leading-[48px]">
              <span>Browse By Category</span>
            </h3>
          </div>

          <div class="flex gap-3">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]">
              <img src="../assets/icons/arrow-left.svg" alt="p" />
            </div>

            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]">
              <img src="../assets/icons/arrow-right.svg" alt="p" />
            </div>
          </div>
        </div>

        <div class="flex justify-between my-10">
          <div v-for="(el, ind) in category" :key="ind">
            <div class="group">
              <div
                class="border-2 group-hover:bg-[#DB4444] group-hover:border-[#DB4444] p-3 border-[#0000004D] rounded w-[200px] h-[180px] flex flex-col items-center justify-center gap-5"
              >
                <Icons class="group-hover:hidden block" :name="el.icon" color="black" />
                <Icons class="group-hover:block hidden" :name="el.icon" color="white" />

                <h6 class="text-[16px] leading-24px group-hover:text-white">
                  <span>{{ el.name }}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-10">
        <div class="flex items-center gap-5 pt-10">
          <div class="w-5 h-10 rounded bg-[#DB4444]"></div>

          <h6 class="font-semibold text-[16px] leading-[20px] text-[#DB4444]">
            <span>This Month</span>
          </h6>
        </div>

        <div class="flex items-center justify-between pt-5 pb-10">
          <div>
            <h3 class="font-['Inter'] font-semibold text-[36px] leading-[48px]">
              <span>Best Selling Products</span>
            </h3>
          </div>

          <div>
            <button @click="is_show_all = !is_show_all" class="bg-[#DB4444] rounded py-4 px-12">
              <span class="font-medium text-[16px] leading-[24px] text-[#FAFAFA]"
                >View {{ is_show_all ? 'Less' : 'All' }}</span
              >
            </button>
          </div>
        </div>

        <div class="flex justify-between my-10">
          <div v-for="(el, ind) in getList.slice(5, 9)" :key="ind">
            <div
              :id="el.id"
              class="group duration-800 w-[300px] h-[300px] flex items-center justify-center p-14 rounded bg-[#F5F5F5] relative"
            >
              <div class="absolute top-3 right-3 flex flex-col gap-3">
                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/like.svg" alt="p" />
                </div>

                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/visible.svg" alt="p" />
                </div>
              </div>

              <div
                class="group-hover:flex hidden absolute bottom-0 w-full bg-[#000000] items-center justify-center py-3 rounded-b"
              >
                <h6 class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
                  <span>Add To Cart </span>
                </h6>
              </div>

              <img class="h-full object-cover rounded-lg" :src="el.thumbnail" alt="image" />
            </div>

            <div class="w-[300px]">
              <h6 class="font-medium text-[16px] leading-[24px] py-3">
                <span>{{ el.title }}</span>
              </h6>

              <div class="flex gap-3 mb-2">
                <h6 class="font-medium text-[16px] leading-[24px] text-[#DB4444]">
                  <span>${{ Math.floor(el.price * (100 - el.discountPercentage)) / 100 }}</span>
                </h6>

                <h6 class="font-medium text-[16px] leading-[24px] line-through opacity-50">
                  <span>${{ el.price }}</span>
                </h6>
              </div>

              <div class="flex gap-3">
                <div class="flex">
                  <img
                    v-for="(r, ind) in Math.floor(el.rating)"
                    src="../assets/icons/star-fill.svg"
                  />
                  <img
                    v-for="(r, ind) in 5 - Math.floor(el.rating)"
                    src="../assets/icons/star.svg"
                  />
                </div>

                <h6 class="font-semibold text-[16px] leading-[21px] opacity-50">
                  <span>({{ el.stock }})</span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div v-if="is_show_all" class="flex justify-between mb-10 mt-[100px]">
          <div v-for="(el, ind) in getList.slice(12, 16)" :key="ind">
            <div
              :id="el.id"
              class="group duration-800 w-[300px] h-[300px] flex items-center justify-center p-14 rounded bg-[#F5F5F5] relative"
            >
              <div class="absolute top-3 right-3 flex flex-col gap-3">
                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/like.svg" alt="p" />
                </div>

                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/visible.svg" alt="p" />
                </div>
              </div>

              <div
                class="group-hover:flex hidden absolute bottom-0 w-full bg-[#000000] items-center justify-center py-3 rounded-b"
              >
                <h6 class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
                  <span>Add To Cart </span>
                </h6>
              </div>

              <img class="h-full object-cover rounded-lg" :src="el.thumbnail" alt="image" />
            </div>

            <div class="w-[300px]">
              <h6 class="font-medium text-[16px] leading-[24px] py-3">
                <span>{{ el.title }}</span>
              </h6>

              <div class="flex gap-3 mb-2">
                <h6 class="font-medium text-[16px] leading-[24px] text-[#DB4444]">
                  <span>${{ Math.floor(el.price * (100 - el.discountPercentage)) / 100 }}</span>
                </h6>

                <h6 class="font-medium text-[16px] leading-[24px] line-through opacity-50">
                  <span>${{ el.price }}</span>
                </h6>
              </div>

              <div class="flex gap-3">
                <div class="flex">
                  <img
                    v-for="(r, ind) in Math.floor(el.rating)"
                    src="../assets/icons/star-fill.svg"
                  />
                  <img
                    v-for="(r, ind) in 5 - Math.floor(el.rating)"
                    src="../assets/icons/star.svg"
                  />
                </div>

                <h6 class="font-semibold text-[16px] leading-[21px] opacity-50">
                  <span>({{ el.stock }})</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-black py-20 px-14 flex justify-between mt-32">
        <div class="w-[50%]">
          <h6 class="font-semibold text-[16px] leading-[20px] text-[#00FF66]">
            <span> Categories </span>
          </h6>

          <h2 class="font-['Inter'] font-semibold text-[48px] leading-[60px] text-[#FAFAFA] my-14">
            <span> Enhance Your Music Experience </span>
          </h2>

          <div class="flex gap-5 text-center">
            <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
              <div>
                <h6 class="font-semibold text-[16px] leading-[20px]">23</h6>
                <p class="text-[11px] leading-[18px]">Hours</p>
              </div>
            </div>

            <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
              <div>
                <h6 class="font-semibold text-[16px] leading-[20px]">05</h6>
                <p class="text-[11px] leading-[18px]">Days</p>
              </div>
            </div>

            <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
              <div>
                <h6 class="font-semibold text-[16px] leading-[20px]">59</h6>
                <p class="text-[11px] leading-[18px]">Minutes</p>
              </div>
            </div>

            <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
              <div>
                <h6 class="font-semibold text-[16px] leading-[20px]">35</h6>
                <p class="text-[11px] leading-[18px]">Seconds</p>
              </div>
            </div>
          </div>

          <button class="rounded bg-[#00FF66] py-4 px-14 mt-10">
            <span class="font-medium text-[16px] leading-[24px] text-[#FAFAFA]">Buy Now!</span>
          </button>
        </div>

        <div class="w-[50%]">
          <div class="relative flex items-center justify-center h-[400px]">
            <div
              class="absolute w-[600px] h-[600px] bg-white opacity-30 rounded-full blur-[100px]"
            ></div>
            <img
              class="w-full h-full object-cover absolute"
              src="../assets/images/enhance.png"
              alt="enhance"
            />
          </div>
        </div>
      </div>

      <div class="my-10">
        <div class="flex items-center gap-5 pt-10">
          <div class="w-5 h-10 rounded bg-[#DB4444]"></div>

          <h6 class="font-semibold text-[16px] leading-[20px] text-[#DB4444]">
            <span>Our Products</span>
          </h6>
        </div>

        <div class="flex items-center justify-between pt-5 pb-10">
          <div>
            <h3 class="font-['Inter'] font-semibold text-[36px] leading-[48px]">
              <span>Explore Our Products</span>
            </h3>
          </div>

          <div class="flex gap-3">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]">
              <img src="../assets/icons/arrow-left.svg" alt="p" />
            </div>

            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5]">
              <img src="../assets/icons/arrow-right.svg" alt="p" />
            </div>
          </div>
        </div>

        <div class="flex justify-between my-10">
          <div v-for="(el, ind) in getList.slice(5, 9)" :key="ind">
            <div
              :id="el.id"
              class="group duration-800 w-[300px] h-[300px] flex items-center justify-center p-14 rounded bg-[#F5F5F5] relative"
            >
              <div class="absolute top-3 right-3 flex flex-col gap-3">
                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/like.svg" alt="p" />
                </div>

                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/visible.svg" alt="p" />
                </div>
              </div>

              <div
                class="group-hover:flex hidden absolute bottom-0 w-full bg-[#000000] items-center justify-center py-3 rounded-b"
              >
                <h6 class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
                  <span>Add To Cart </span>
                </h6>
              </div>

              <img class="h-full object-cover rounded-lg" :src="el.thumbnail" alt="image" />
            </div>

            <div class="w-[300px]">
              <h6 class="font-medium text-[16px] leading-[24px] py-3">
                <span>{{ el.title }}</span>
              </h6>

              <div class="flex gap-3">
                <h6 class="font-medium text-[16px] leading-[24px] text-[#DB4444]">
                  <span>${{ el.price }}</span>
                </h6>

                <div class="flex">
                  <img
                    v-for="(r, ind) in Math.floor(el.rating)"
                    src="../assets/icons/star-fill.svg"
                  />
                  <img
                    v-for="(r, ind) in 5 - Math.floor(el.rating)"
                    src="../assets/icons/star.svg"
                  />
                </div>

                <h6 class="font-semibold text-[16px] leading-[21px] opacity-50">
                  <span>({{ el.stock }})</span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div v-if="is_show_all" class="flex justify-between mb-10 mt-[100px]">
          <div v-for="(el, ind) in getList.slice(12, 16)" :key="ind">
            <div
              :id="el.id"
              class="group duration-800 w-[300px] h-[300px] flex items-center justify-center p-14 rounded bg-[#F5F5F5] relative"
            >
              <div class="absolute top-3 right-3 flex flex-col gap-3">
                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/like.svg" alt="p" />
                </div>

                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]">
                  <img src="../assets/icons/visible.svg" alt="p" />
                </div>
              </div>

              <div
                class="group-hover:flex hidden absolute bottom-0 w-full bg-[#000000] items-center justify-center py-3 rounded-b"
              >
                <h6 class="font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
                  <span>Add To Cart </span>
                </h6>
              </div>

              <img class="h-full object-cover rounded-lg" :src="el.thumbnail" alt="image" />
            </div>

            <div class="w-[300px]">
              <h6 class="font-medium text-[16px] leading-[24px] py-3">
                <span>{{ el.title }}</span>
              </h6>

              <div class="flex gap-3">
                <h6 class="font-medium text-[16px] leading-[24px] text-[#DB4444]">
                  <span>${{ el.price }}</span>
                </h6>

                <div class="flex">
                  <img
                    v-for="(r, ind) in Math.floor(el.rating)"
                    src="../assets/icons/star-fill.svg"
                  />
                  <img
                    v-for="(r, ind) in 5 - Math.floor(el.rating)"
                    src="../assets/icons/star.svg"
                  />
                </div>

                <h6 class="font-semibold text-[16px] leading-[21px] opacity-50">
                  <span>({{ el.stock }})</span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <button @click="is_show_all = !is_show_all" class="bg-[#DB4444] rounded py-4 px-12">
            <span class="font-medium text-[16px] leading-[24px] text-[#FAFAFA]"
              >View {{ is_show_all ? 'Less' : 'All' }} Products</span
            >
          </button>
        </div>
      </div>
    </Container>
  </section>

  <Footer />
</template>

<script setup>
import Accordion from '@/components/Accordion.vue'
import Carousel from '@/components/Carousel.vue'
import Container from '../components/Container.vue'
import Header from '../components/Header/Header.vue'
import Icons from '../components/Icons.vue'
import { useProductStore } from '../stores/product'
import { ref } from 'vue'

const { getList, setList } = useProductStore()

const is_show_all = ref(false)

const category = ref([
  {
    id: 1,
    name: 'Phones',
    icon: 'phones'
  },
  {
    id: 2,
    name: 'Computers',
    icon: 'computers'
  },
  {
    id: 3,
    name: 'SmartWatch',
    icon: 'smartwatch'
  },
  {
    id: 4,
    name: 'Camera',
    icon: 'camera'
  },
  {
    id: 5,
    name: 'HeadPhones',
    icon: 'headphones'
  },
  {
    id: 6,
    name: 'Gaming',
    icon: 'gaming'
  }
])
</script>
