<template>
  <div class="flex gap-5 text-center">
    <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
      <div>
        <h6 class="font-semibold text-[16px] leading-[20px]">{{ format(days) }}</h6>
        <p class="text-[11px] leading-[18px]">Days</p>
      </div>
    </div>

    <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
      <div>
        <h6 class="font-semibold text-[16px] leading-[20px]">{{ format(hours) }}</h6>
        <p class="text-[11px] leading-[18px]">Hours</p>
      </div>
    </div>

    <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
      <div>
        <h6 class="font-semibold text-[16px] leading-[20px]">{{ format(minutes) }}</h6>
        <p class="text-[11px] leading-[18px]">Minutes</p>
      </div>
    </div>

    <div class="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
      <div>
        <h6 class="font-semibold text-[16px] leading-[20px]">{{ format(seconds) }}</h6>
        <p class="text-[11px] leading-[18px]">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { ref, onMounted } from 'vue'

const countdownDate = ref('2023-06-15 23:59:59')
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
