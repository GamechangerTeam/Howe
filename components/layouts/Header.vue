<script setup lang="ts">
import { ref, watch } from "vue";
import { usePopupStore } from "~/store/popup";
const popupStore = usePopupStore();
const isHeaderOpen = ref<boolean>(popupStore.isOpen && popupStore.name === "header");

const popupHandler = () => {
  if (popupStore.isOpen) {
    popupStore.close();
    isHeaderOpen.value = false;
  } else {
    popupStore.open("header");
    isHeaderOpen.value = true;
  }
};

watch(
  () => popupStore.isOpen,
  () => {
    if (!popupStore.isOpen) {
      isHeaderOpen.value = false;
    }
  }
);
</script>

<template>
  <header
    class="fixed z-50 w-lvw bg-primary-white header h-[50px] mobile:h-[60px] tablet:h-[76px] flex"
  >
    <div
      class="container flex items-center justify-between text-xs mobile:text-base mobile-big:text-xl"
    >
      <ul class="pc-nav hidden tablet-big:flex gap-8 items-center">
        <li>
          <NuxtLink to="/catalog/female">Женское</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/catalog/male">Мужское</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/product/male/xyi">Новинки и акции</NuxtLink>
        </li>
      </ul>

      <button class="flex gap-2 items-center tablet-big:hidden" @click="popupHandler">
        <span class="header__close-btn" :class="{ active: isHeaderOpen }" />
        {{ isHeaderOpen ? "Закрыть" : "Меню" }}
      </button>
      <NuxtLink to="/" class="text-xl absolute left-1/2 translate-x-[-40%]">
        Howe
        <span class="text-xs text-primary-black-300 align-top">(Medical)</span>
      </NuxtLink>
      <button @click="popupStore.open('cart')">Корзина (0)</button>
    </div>

    <ModalsHeaderPopup />
  </header>
</template>

<style lang="scss">
@use "~/assets/css/_components.scss" as *;
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
      content: "";
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
  .pc-nav a:hover {
    text-decoration: underline;
  }

  &__popup {
    width: 100%;
    height: calc(100lvh - 50px);
    position: fixed;
    bottom: -100lvh;
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
          content: "";
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          background: url("https://api.iconify.design/material-symbols:arrow-forward-ios-rounded.svg")
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

    @include mobile {
      height: calc(100lvh - 60px);
    }

    @include tablet {
      height: calc(100lvh - 76px);
    }

    @include tablet-big {
      display: none;
    }
  }
}
</style>
