<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import Popup from "../popup.vue";
import { usePopupStore } from "~/store/popup";
const popupStore = usePopupStore();

const popupHandler = () => {
  if (popupStore.isOpen) {
    popupStore.close();
  } else {
    popupStore.open("header");
  }
};
</script>

<template>
  <Popup name="header" class="fullHeight flex flex-col tablet-big:hidden">
    <ul class="flex flex-col text-5xl">
      <li
        class="relative border-t-2 border-dashed border-black py-4 px-3 last:border-b-2 last:border-dashed"
      >
        <NuxtLink
          @click="popupHandler"
          to="/catalog/female"
          class="block relative pl-3 pr-10 after:content-[''] after:absolute after:right-6 after:top-1/2 after:transform after:-translate-y-1/2 after:bg-[url('https://api.iconify.design/material-symbols:arrow-forward-ios-rounded.svg')] after:bg-center after:bg-contain after:bg-no-repeat after:w-5 after:h-5"
        >
          Женское
        </NuxtLink>
      </li>
      <li
        class="relative border-t-2 border-dashed border-black py-4 px-3 last:border-b-2 last:border-dashed"
      >
        <NuxtLink
          @click="popupHandler"
          to="/catalog/male"
          class="block relative pl-3 pr-10 after:content-[''] after:absolute after:right-6 after:top-1/2 after:transform after:-translate-y-1/2 after:bg-[url('https://api.iconify.design/material-symbols:arrow-forward-ios-rounded.svg')] after:bg-center after:bg-contain after:bg-no-repeat after:w-5 after:h-5"
        >
          Мужское
        </NuxtLink>
      </li>
      <li
        class="relative border-t-2 border-dashed border-black py-4 px-3 last:border-b-2 last:border-dashed"
      >
        <NuxtLink
          @click="popupHandler"
          to="/product/male/xui"
          class="block relative pl-3 pr-10 after:content-[''] after:absolute after:right-6 after:top-1/2 after:transform after:-translate-y-1/2 after:bg-[url('https://api.iconify.design/material-symbols:arrow-forward-ios-rounded.svg')] after:bg-center after:bg-contain after:bg-no-repeat after:w-5 after:h-5"
        >
          Новинки
        </NuxtLink>
      </li>
    </ul>
    <div class="basePadding mt-auto">
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
      <Button>
        <NuxtImg src="/icons/bill.svg" alt="Оформить покупку" width="22" height="22" />
        Оформить
      </Button>
    </div>
  </Popup>
</template>
