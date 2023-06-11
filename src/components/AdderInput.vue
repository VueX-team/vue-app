<template>
  <div>
    <div class="border border-black rounded-md flex items-center w-[142px]">
      <button
        type="button"
        onclick="this.parentNode.querySelector('[type=number]').stepDown();"
        class="border-r border-black p-1 px-2 text-3xl rounded-l-lg active:bg-gray-300"
      >
        -
      </button>

      <input
        type="number"
        name="number"
        min="0"
        max="100"
        value="0"
        class="text-2xl w-[70px] outline-none"
      />

      <button
        type="button"
        onclick="this.parentNode.querySelector('[type=number]').stepUp();"
        class="bg-[#DB4444] text-white rounded-r-md p-1 px-2 text-3xl active:bg-red-400"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
input {
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
