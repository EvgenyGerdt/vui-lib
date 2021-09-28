<template>
  <div class="input-container">
    <input :type="type" />
    <span class="placeholder">{{ placeholder }}</span>
  </div>
</template>

<script>
import {defineComponent, computed, onMounted} from "vue";

export default defineComponent({
  name: "v-input",

  props: {
    placeholder: {
      type: String,
      default: ''
    },

    secure: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: 'dodgerblue',
    }
  },

  setup(props) {
    const type = computed(() => props.secure ? 'password' : 'text');

    onMounted(() => {

    })

    return {
      type,
    }
  }
})
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  display: flex;
  > input {
    padding: 10px 5px;

    &:focus ~ .placeholder, &:not(:focus):valid ~ .placeholder {
      top: -10%;
    }
  }
  > span {
    position: absolute;
    top: 50%;
    left: 5%;

    transition: 0.2s ease all;
    pointer-events: none;

    cursor: text;
    background: white;

    user-select: none;

    transform: translateY(-50%);
  }
}
</style>