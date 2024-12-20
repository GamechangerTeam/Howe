<script setup lang="ts">
import { onMounted } from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import type { ProductCard } from "~/types/productCard";

const props = defineProps<{
  slides: ProductCard[];
  className: string;
  id: string;
}>();

onMounted(() => {
  new Swiper(`#${props.id}`, {
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    effect: "slide",
    speed: 600,
    breakpoints: {
      960: {
        slidesPerView: 3.2,
        centeredSlides: false,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.2,
        centeredSlides: false,
        spaceBetween: 20,
      },
      430: {
        slidesPerView: 1.5,
        centeredSlides: false,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
      },
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: `.${props.className}-button-next`,
      prevEl: `.${props.className}-button-prev`,
    },
  });
});
</script>

<template>
  <div :class="props.className" :id="props.id" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <slot :slide="slide"></slot>
      </div>
    </div>
    <!-- <div class="swiper-pagination"></div> -->
    <div :class="`${props.className}-button-next swiper-button-next`"></div>
    <div :class="`${props.className}-button-prev swiper-button-prev`"></div>
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
    opacity: 0;
  }
}
</style>
