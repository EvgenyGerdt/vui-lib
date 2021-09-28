<template>
  <div>
    <main-layout @hide-modal="revokeFlags" :isShowLogin="isShowLoginModal" :isShowRegister="isShowRegisterModal">
      <Header @open-login="showLogin" @open-register="showRegister" :isAuthenticated="isAuthenticated" />
    </main-layout>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, ref} from "vue";
import Header from "../components/Header.vue";

import mainLayout from '../layouts/main-layout.vue';

export default defineComponent({
  name: "MainPage",

  components: {
    Header,
    mainLayout,
  },

  setup() {
    const isAuthenticated = computed(() => false);

    const isShowRegisterModal = ref(false);
    const isShowLoginModal = ref(false);

    const showLogin = () => {
      isShowRegisterModal.value = false;
      isShowLoginModal.value = true;
    };

    const showRegister = () => {
      isShowLoginModal.value = false;
      isShowRegisterModal.value = true;
    };

    const revokeFlags = () => {
      isShowLoginModal.value = false;
      isShowRegisterModal.value = false;
    };

    return {
      isAuthenticated,
      isShowRegisterModal,
      isShowLoginModal,

      showLogin,
      showRegister,
      revokeFlags,
    }
  },
})
</script>

<style scoped>

</style>