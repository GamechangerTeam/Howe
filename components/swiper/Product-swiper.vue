<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const props = defineProps<{
  slides: string[];
}>();

const swiperReady = ref(false);

import { useElementSize } from "@vueuse/core";
const main = ref<HTMLElement | null>(null);
const second = ref<HTMLElement | null>(null);
const mainSlide = useElementSize(main);
const secondSlide = useElementSize(second);

const cardsInfo = reactive({
  main: { width: 0, height: 0 },
  second: { width: 0, height: 0 },
});
const ready = ref(false);
onMounted(() => {});

onMounted(() => {
  const secondSwiper = new Swiper("#second-swiper", {
    slidesPerView: 3,
    spaceBetween: 13,
    direction: "horizontal",
    effect: "slide",
    speed: 600,
    watchSlidesProgress: true,
    breakpoints: {
      601: {
        direction: "horizontal",
        slidesPerView: 2,
      },
      769: {
        direction: "vertical",
        slidesPerView: 4,
      },
      1025: {
        direction: "vertical",
        slidesPerView: 3,
      },
    },
  });

  const mainSwiper = new Swiper("#main-swiper", {
    slidesPerView: 1,
    spaceBetween: 13,
    effect: "slide",
    speed: 700,

    thumbs: {
      swiper: secondSwiper,
    },
  });

  setTimeout(() => {
    cardsInfo.main.width = mainSlide.width.value + 50 || 0;
    cardsInfo.main.height = mainSlide.height.value + 50 || 0;
    cardsInfo.second.width = secondSlide.width.value || 0;
    cardsInfo.second.height = secondSlide.height.value || 0;
    console.log(secondSlide);

    ready.value = true;
    swiperReady.value = true;
  }, 10);
});
</script>

<template>
  <div class="product-swiper-wrapper relative">
    <div
      v-if="!swiperReady"
      class="container h-full absolute flex flex-col gap-3 tablet:flex tablet:flex-row-reverse tablet:p-0"
    >
      <Skeleton class="w-full h-full bg-primary-black-100 laptop:max-w-[600px] laptop:mx-auto" />
      <div
        class="grid grid-cols-3 gap-2 h-[130px] pc:w-[170px] laptop:w-[150px] tablet-min:grid-cols-2 tablet:flex tablet:flex-col tablet:w-[100px] tablet:h-full mobile-min:h-[150px] mobile-mid:h-[190px] mobile-big:h-[225px]"
      >
        <Skeleton class="w-full h-full bg-primary-black-100" />
        <Skeleton class="w-full h-full bg-primary-black-100" />
        <Skeleton class="w-full h-full bg-primary-black-100 tablet-min:hidden tablet:block" />
        <Skeleton
          class="w-full h-full bg-primary-black-100 hidden tablet-min:hidden tablet:block laptop:hidden"
        />
      </div>
    </div>
    <div
      class="swiper-container"
      :style="{ opacity: `${swiperReady ? 1 : 0}` }"
      :class="{ absolute: !swiperReady }"
      id="main-swiper"
    >
      <div class="swiper-wrapper">
        <div ref="main" class="swiper-slide" v-for="(slide, index) in props.slides" :key="index">
          <NuxtImg
            v-if="ready"
            :src="slide"
            :width="cardsInfo.main.width"
            :height="cardsInfo.main.width"
            :alt="`slide-${index}`"
            class="product-swiper-slide"
            placeholder
            loading="lazy"
            @load="() => {console.log('asdsad')}"
          />
          <Skeleton v-else class="w-full h-full bg-primary-black-100" />
        </div>
      </div>
    </div>
    <div
      class="swiper-container"
      :style="{ opacity: `${swiperReady ? 1 : 0}` }"
      :class="{ absolute: !swiperReady }"
      id="second-swiper"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" ref="second" v-for="(slide, index) in props.slides" :key="index">
          <NuxtImg
            v-if="ready"
            :src="slide"
            :width="cardsInfo.second.width"
            :height="cardsInfo.second.width"
            :alt="`slide-${index}`"
            loading="lazy"
            class="product-swiper-slide"
            placeholder
          />
          <Skeleton v-else class="w-full h-full bg-primary-black-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/components" as *;
.product-swiper-wrapper {
  display: grid;
  grid-template-rows: 80% 20%;
  gap: 12px;
  width: calc(100% + 24px);
  transform: translateX(-12px);
  margin-top: 12px;
  min-height: 600px;

  @include mobile-min {
    min-height: 650px;
  }
  @include mobile-mid {
    min-height: 700px;
  }
  @include mobile {
    min-height: 830px;
  }

  @include tablet-min {
    min-height: 500px;
    max-height: 500px;
    margin-top: 0;
    grid-template-rows: 70% 30%;
  }
  @include tablet {
    display: flex;
    flex-direction: row-reverse;
    max-height: 530px;
    transform: unset;
    width: 100%;
    min-height: unset;
    height: auto;
  }
  @include laptop {
    max-height: 700px;
  }

  .swiper-container {
    border-radius: 8px;
    padding: 0 12px;
    overflow: hidden;
    .swiper-wrapper {
      transition-timing-function: ease;
    }

    .swiper-slide {
      border-radius: 8px;
      overflow: hidden;
      height: 100%;
      img {
        height: 100%;
        object-fit: cover;
      }
    }

    @include tablet {
      max-height: unset;
      padding: 0;
    }
  }
  #main-swiper {
    @include mobile {
      max-width: 430px;
      margin: 0 auto;
    }
    @include laptop {
      max-width: 600px;
    }
  }

  #second-swiper {
    @include mobile {
      max-width: 500px;
      margin: 0 auto;
    }
    @include tablet {
      height: auto;
      max-width: 100px;
      margin: 0;
      .swiper-slide img {
        height: 100%;
      }
      .swiper-wrapper {
        flex-direction: column;
      }
    }
    @include laptop {
      max-width: 150px;
    }
    @include pc {
      max-width: 170px;
    }
  }
}

.product-swiper-slide {
  width: 100%;
  height: auto;
}
</style>
