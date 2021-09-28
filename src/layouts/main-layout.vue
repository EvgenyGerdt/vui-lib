<template>
  <modal @hide="hideModal" v-if="isShowModal">
    <login-content title="Sign In" v-if="isShowLogin" />
    <register-content title="Sign up" v-if="isShowRegister" />
  </modal>

  <slot/>
</template>

<script>
import {defineComponent, toRefs, computed} from "vue";

import Modal from "../components/Modal.vue";
import loginContent from "../components/content/login-content.vue";
import registerContent from "../components/content/register-content.vue";

export default defineComponent({
  name: "main-layout",

  components: {
    Modal,
    loginContent,
    registerContent,
  },

  props: {
    isShowLogin: {
      type: Boolean,
      default: false,
    },

    isShowRegister: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, {emit}) {
    const showLogin = toRefs(props).isShowLogin;
    const showRegister = toRefs(props).isShowRegister;

    const isShowModal = computed(() => showLogin.value || showRegister.value);

    const hideModal = () => {
      emit('hide-modal');
    };

    return {
      showLogin,
      showRegister,
      isShowModal,

      hideModal
    }
  }
})
</script>

<style scoped>

</style>