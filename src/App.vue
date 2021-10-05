<template>
  <router-view></router-view>
</template>

<script>
import MainPage from "./views/MainPage.vue";
export default {
  components: {MainPage}
}
</script>

<style>
@font-face {
  font-family: 'BirthStone';
  src: url("/assets/fonts/BirthstoneBounce-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>