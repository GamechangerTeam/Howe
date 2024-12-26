<script setup lang="ts">
import { onMounted } from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import type { ProductCard } from "~/types/productCard";
import type { CardTypes } from "~/types/card";

const props = defineProps<{
  className?: string;
}>();

onMounted(() => {
  new Swiper(`#new-items-swiper`, {
    slidesPerView: 1,
    spaceBetween: 12,
    effect: "slide",
    speed: 600,
    breakpoints: {
      769: {
        spaceBetween: 0,
        slidesPerView: 2,
      },
    },

    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
  });
});
</script>

<template>
  <div id="new-items-swiper" class="swiper-container" :class="props.className">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/_components.scss" as *;

.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
    color: black;
    transition: opacity 0.6s ease;
  }

  .swiper-button-next {
    right: 20px;
  }

  .swiper-button-prev {
    left: 20px;
  }

  @include pc {
    .swiper-button-next {
      right: 5px;
    }

    .swiper-button-prev {
      left: 5px;
    }
  }

  .swiper-button-disabled {
    opacity: 0 !important;
  }
}
</style>
