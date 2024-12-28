<script setup lang="ts">
import { onMounted } from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import type { ProductCard } from "~/types/productCard";
import type { CardTypes } from "~/types/card";

const props = defineProps<{
  slides: {}[];
  className?: string;
  id: string;
  manySlides?: boolean;
}>();

onMounted(() => {
  new Swiper(`#${props.id}`, {
    slidesPerView: 1,
    spaceBetween: 24,
    effect: "slide",
    speed: 660,

    breakpoints: {
      650: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,

      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
  });
});
</script>

<template>
  <div :class="props.className" :id="props.id" class="swiper-container rec-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <slot :slide="slide"></slot>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/_components.scss" as *;

.rec-swiper {
  padding-left: 12px;
  padding-right: 24px;
  padding-bottom: 20px;
  width: calc(100% + 12px) !important;
  transform: translateX(-12px) !important;


  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    @include tablet {
      display: block;
    }
  }

  .swiper-pagination {
    bottom: 20px;
    position: absolute;
    @include tablet {
      bottom: 30px;
    }
    &-bullet {
      width: 30px;
      height: 2px;
      border-radius: 10px;
    }
  }
}
</style>
