<template>
  <div class="flex items-end gap-4 text-center">
    <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
      <div>
        <p class="font-medium text-[12px] leading-[18px]">Days</p>
        <h6 class="font-bold text-[32px] leading-[30px] font-['Inter']">{{ format(days) }}</h6>
      </div>
    </div>

    <span class="mb-3 font-bold text-[32px] leading-[30px] font-['Inter']">:</span>

    <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
      <div>
        <p class="font-medium text-[12px] leading-[18px]">Hours</p>
        <h6 class="font-bold text-[32px] leading-[30px] font-['Inter']">{{ format(hours) }}</h6>
      </div>
    </div>

    <span class="mb-3 font-bold text-[32px] leading-[30px] font-['Inter']">:</span>

    <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
      <div>
        <p class="font-medium text-[12px] leading-[18px]">Minutes</p>
        <h6 class="font-bold text-[32px] leading-[30px] font-['Inter']">{{ format(minutes) }}</h6>
      </div>
    </div>

    <span class="mb-3 font-bold text-[32px] leading-[30px] font-['Inter']">:</span>

    <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
      <div>
        <p class="font-medium text-[12px] leading-[18px]">Seconds</p>
        <h6 class="font-bold text-[32px] leading-[30px] font-['Inter']">{{ format(seconds) }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { ref, onMounted } from 'vue'

const countdownDate = ref('2023-08-16 23:59:59')
const countdownInterval = ref(null)
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

onMounted(() => {
  startCountdown()
})

const format = (time) => {
  return time < 10 ? `0${time}` : `${time}`
}

const startCountdown = () => {
  updateCountdown()

  countdownInterval.value = setInterval(() => {
    updateCountdown()
  }, 1000)
}

const stopCountdown = () => {
  clearInterval(countdownInterval.value)
}

const updateCountdown = () => {
  const now = moment()
  const targetDate = moment(countdownDate.value)

  const duration = moment.duration(targetDate.diff(now))

  days.value = duration.days()
  hours.value = duration.hours()
  minutes.value = duration.minutes()
  seconds.value = duration.seconds()
}
</script>

<style lang="scss" scoped></style>
