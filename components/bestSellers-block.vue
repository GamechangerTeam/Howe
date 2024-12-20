<script setup lang="ts">
import Swiper from "~/components/swiper/Swiper.vue";
import Button from "~/components/ui/button/Button.vue";
import type { ProductCard } from "~/types/productCard";
import { ArrowRight } from "lucide-vue-next";
const props = defineProps<{
  slides: ProductCard[];
  class: string;
  id: string;
  sex: "male" | "female";
}>();
</script>

<template>
  <div
    class="best-sellers blockTopMargin pc:basePadding pc:mx-auto pc:max-w-pc relative"
    :class="props.class"
  >
    <h2 class="basePadding-x max-w-pc mx-auto mb-5 tablet:mb-0 tablet:mx-0">
      <span class="colored-text">{{ props.sex === "male" ? "Мужские" : "Женские" }}</span>
      бестселлеры
    </h2>
    <div class="basePadding-x max-w-mobileBig mx-auto mt-5 hidden tablet:block">
      <Button asChild class="group" variant="whiteWithBorder">
        <NuxtLink :to="props.sex === 'male' ? '/catalog/male' : '/catalog/female'">
          >Смотреть
          <span class="colored-text">{{ props.sex === "male" ? "Мужской" : "Женский" }}</span>
          каталог
          <ArrowRight :stroke-width="1.5" :size="20" class="group-hover:-rotate-45 colored-text" />
        </NuxtLink>
      </Button>
    </div>
    <Swiper
      :slides="props.slides"
      class="max-w-pc mx-auto basePadding-x"
      :className="'best-sellers__swiper'"
      :id="props.id"
    >
      <template #default="{ slide }">
        <NuxtImg :src="slide.img" class="w-full h-full object-cover rounded-sm" width="500" />
        <div
          class="absolute grid grid-cols-2 gap-3 z-1 bg-primary-white w-[calc(100%-8px)] p-5 left-1 bottom-1 rounded-sm"
        >
          <h3>{{ slide.title }}</h3>
          <p class="text-2xl text-right">{{ slide.price }}</p>
          <div class="flex gap-1" style="grid-area: 2/1">
            <span
              v-for="(color, index) in slide.color"
              :key="index"
              class="rounded-full border border-primary-black-100 h-8 aspect-square"
              :style="{ backgroundColor: color }"
            ></span>
          </div>
        </div>
      </template>
    </Swiper>
    <div class="basePadding-x max-w-mobileBig mx-auto mt-5 tablet:hidden">
      <Button asChild class="group w-full" variant="whiteWithBorder">
        <NuxtLink :to="props.sex === 'male' ? '/catalog/male' : '/catalog/female'"
          >Смотреть
          <span class="colored-text">{{ props.sex === "male" ? "Мужской" : "Женский" }}</span>
          каталог
          <ArrowRight :stroke-width="1.5" :size="20" class="group-hover:-rotate-45 colored-text" />
        </NuxtLink>
      </Button>
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/_components.scss" as *;

.best-sellers {
  &--man {
    .colored-text {
      color: $primary-blue;
    }
  }

  &--woman {
    .colored-text {
      color: $primary-red;
    }
  }

  @include tablet {
    display: grid;
    grid-template: auto / 1fr auto;
    align-items: center;
    gap: 40px;
  }

  &__swiper {
    @include tablet {
      grid-column-start: 2 span;
    }
  }

  .swiper-slide {
    max-height: 70vh;
    @include break(430px) {
      max-height: unset;
    }
  }

  .container {
    @include break-max(430px) {
      padding: 0;
    }
  }
}
</style>
