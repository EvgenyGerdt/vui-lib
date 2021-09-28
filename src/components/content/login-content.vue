<template>
  <div class="login-layout">
    <div class="login-wrapper">
      <h1>Sign in</h1>
      <div class="login-inputs">
        <v-input placeholder="Email" />

        <v-input placeholder="Password" secure />
      </div>
      <router-link to>Forgot password?</router-link>
      <button>Sign in</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

import vInput from "../ui/v-input.vue";

export default defineComponent({
  name: "login-content",

  components: {
    vInput,
  },

  setup() {

  }
})
</script>

<style lang="scss" scoped>
.login {
  &-layout {
    padding: 15px;
    box-sizing: border-box;
  }
  &-wrapper, &-inputs, &-inputs > label {
    display: flex;
    flex-direction: column;
  }
  &-inputs {
    justify-content: flex-start;
  }
}
</style>