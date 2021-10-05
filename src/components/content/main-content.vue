<template>
  <div class="main-content__container">
    <div class="main-content__welcome">
      <main-animation />
      <div class="main-content__welcome-links">
        <a href="#">Documentation</a>
        <a href="#">Get started</a>
        <a href="#">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
import MainAnimation from "./animation/main-animation.vue";
export default {
  name: "main-content",
  components: {MainAnimation}
}
</script>

<style lang="scss" scoped>
.main-content {
  &__container {
    height: 100vh;
    width: 100%;
  }
  &__container, &__welcome   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__welcome {
    &-links > a {
      margin: 0 10px;
      padding: 10px 20px;
      border-radius: 1em;
      color: white;
      background: #FF8383;
    }
  }
}
</style>