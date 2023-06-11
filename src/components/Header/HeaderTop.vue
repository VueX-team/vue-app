<template>
  <div>
    <div class="container mx-auto header-sale">
      <p class="header-sale_p">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </p>
      <a href="" class="header-sale_a">Shop Now</a>
      <select class="header-sale_select">
        <option value="English">English</option>
        <option value="Russian">Russian</option>
      </select>
    </div>
  </div>
</template>

<script setup></script>

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
  right: 136px;
  color: #fafafa;
}
.setting {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(75px);

  border-radius: 4px;
}
</style>
