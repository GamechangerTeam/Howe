<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<template>
  <header class="header h-[50px] flex">
    <div class="container flex items-center justify-between text-xs mobile:text-base mobile-big:text-xl">
      <ul class="hidden tablet-big:flex gap-8 items-center  ">
        <li>
          <NuxtLink to="/">Женское</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Мужское</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Новинки и акции</NuxtLink>
        </li>
      </ul>
      <button class="flex gap-2 items-center tablet-big:hidden" @click="isOpen = !isOpen">
        <span class="header__close-btn" :class="{ active: isOpen }" />
        {{ isOpen ? 'Закрыть' : 'Открыть' }}
      </button>
      <NuxtLink to="/" class="text-xl absolute left-1/2 translate-x-[-40%]">
        Howe
        <span class="text-xs text-primary-black-100 align-top">(Medical)</span>
      </NuxtLink>
      <span> Корзина (0) </span>
    </div>

    <div class="header__popup bg-primary-white" :class="{ open: isOpen }">
      <ul class="flex-col text-5xl gap-8 items-center">
        <li>
          <NuxtLink to="/">Женское</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Мужское</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Новинки</NuxtLink>
        </li>
      </ul>
      <div class=" ">
        <div class="container">
          <div class="flex gap-2 justify-center items-center mb-3">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/telegram.svg" alt="telegram" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="twitter" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/youtube.svg" alt="youtube" />
            </a>
          </div>
          <button
            class="bg-primary-blue-gradient w-full flex gap-3 justify-center items-center rounded-xl h-[60px] text-primary-white text-xl"
          >
            <img src="/icons/bill.svg" alt="" />
            Оформить
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use '~/assets/css/_components.scss' as *;
.header {
  &__close-btn {
    position: relative;
    display: block;
    width: 15px;
    height: 15px;
    @include mobile {
      height: 20px;
      width: 20px;
      &::before,
      &::after {
        height: 2px;
      }
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 30%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 1px;
      border-radius: 10px;
      background-color: black;
      transition: 0.5s ease;
    }
    &::before {
      top: 72%;
    }
    &.active {
      &::before,
      &::after {
        top: 50% !important;
        rotate: 45deg;
      }
      &::before {
        rotate: -45deg;
      }
    }
  }

  &__popup {
    width: 100%;
    height: calc(100vh - 50px);
    position: fixed;
    bottom: -100vh;
    left: 0;
    transition: bottom 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    li {
      a {
        display: block;
        position: relative;
        border-top: 2px dashed black;
        padding: 16px 12px;

        &::after {
          content: '';
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          background: url('https://api.iconify.design/material-symbols:arrow-forward-ios-rounded.svg')
            center / contain no-repeat;
          width: 20px;
          height: 20px;
        }
      }
      &:last-child {
        border-style: dashed;
        border-bottom: 2px dashed black;
      }
    }

    &.open {
      bottom: 0;
    }

    @include tablet-big {
      display: none;
    }
  }
}
</style>
