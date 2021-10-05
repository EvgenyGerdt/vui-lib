<template>
  <header class="header-container">
    <div class="header-wrapper">
      <span>Vui</span>
      <div class="header-links">
        <router-link to="/">
          Library
        </router-link>
        <router-link to>
          Docs
        </router-link>
        <router-link to>
          About
        </router-link>
        <router-link to>
          Github
        </router-link>
      </div>
      <div class="header-buttons" v-if="!isAuthenticated">
        <button @click="handleLoginBtn">
          <span>Sign In</span>
        </button>
        <button @click="handleRegisterBtn">
          <span>Sign Up</span>
        </button>
      </div>
      <div class="header-user" v-else>
        <h4>Username</h4>
      </div>
    </div>
  </header>
</template>

<script>
import {defineComponent, onMounted} from "vue";

export default defineComponent({
  name: "MainPage",

  props: {
    isAuthenticated: {
      type: Boolean,
      default: false,
    }
  },

  setup(props, {emit}) {
    const handleLoginBtn = () => {
      emit('open-login');
    };

    const handleRegisterBtn = () => {
      emit('open-register');
    };

    const debounce = (fn) => {
      let frame;

      return (...params) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
          fn(...params);
        })
      }
    };

    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };

    addEventListener('scroll', debounce(storeScroll), {
      passive: true,
    });

    onMounted(() => {
      storeScroll();
    })

    return {
      handleLoginBtn,
      handleRegisterBtn
    }
  },
})
</script>

<style lang="scss">
  html:not([data-scroll='0']) {
    .header-container {
      position: fixed;
      top: 0;
      transition: 500ms ease;
      box-shadow: 0 0 .5em rgba(0, 0, 0, .1);
    }
  }

  .header {
    &-container {
      width: 100%;
      height: 60px;
      position: fixed;
      background: white;
      justify-content: center;
      transition: 500ms ease;
    }

    &-wrapper {
      width: 60%;
      justify-content: space-between;

      > span {
        flex: 1;
        font-weight: 500;
        font-size: 24px;
      }
    }

    &-links {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;

        > a {
          margin: 0 10px 0 10px;
          color: gray;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 2px;

          &:hover {
            color: #FF8383;
          }
        }
    }

    &-container, &-wrapper {
      display: flex;
      align-items: center;
    }

    &-user {
      flex: 1;
    }

    &-buttons {
      flex: 1;

      > button {
        margin: 0 10px 0 10px;
        background: #FF8383;
        padding: 10px 20px;
        box-sizing: border-box;
        border: transparent;
        border-radius: 1em;

        > span {
          font-weight: 600;
          color: white;
        }
      }
    }
  }
</style>