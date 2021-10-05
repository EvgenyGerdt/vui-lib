<template>
  <div class="main-animation__container">
    <div class="circle"/>
    <p>Cool UI for cool website</p>
  </div>
</template>

<script>
export default {
  name: "main-animation"
}
</script>

<style lang="scss" scoped>
  .main-animation__container {
    position: relative;
    width: 100%;
    height: 100%;

    > p {
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 20%;
      font-size: 50px;
      font-weight: lighter;
    }
  }
  .circle {
    width: 200px;
    height: 200px;
    background: #9C2797;
    background: -webkit-linear-gradient(top, #9C2797, #FFA0A0);
    background: -moz-linear-gradient(top, #9C2797, #FFA0A0);
    background: linear-gradient(to bottom, #9C2797, #FFA0A0);
    border-radius: 50%;
    animation: bounce 1.5s ease-in-out infinite;
  }


  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>