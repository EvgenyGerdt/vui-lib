<template>
  <div class="modal-overlay" @click="hideModal"/>
  <div class="modal-container">
    <slot/>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Modal",

  setup(props, {emit}) {
    const hideModal = (e) => {
      e.stopPropagation();
      emit('hide');
    };

    return {
      hideModal,
    }
  },
})
</script>

<style lang="scss" scoped>
.modal {
  &-overlay {
    height: 100vh;
    width: 100%;
    background: black;
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    animation: fade-overlay 300ms ease forwards;
  }

  &-container {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
  }
}

@keyframes fade-overlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
</style>