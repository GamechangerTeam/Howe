<script setup lang="ts">
import Swiper from "~/components/swiper/Swiper.vue";
import Button from "~/components/ui/button/Button.vue";
import { ArrowRight } from "lucide-vue-next";
import type { CardTypes } from "~/types/card";

const props = defineProps<{
  cardInfo: CardTypes[];
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
          Смотреть
          <span class="colored-text">{{ props.sex === "male" ? "Мужской" : "Женский" }}</span>
          каталог
          <ArrowRight :stroke-width="1.5" :size="20" class="group-hover:-rotate-45 colored-text" />
        </NuxtLink>
      </Button>
    </div>
    <Swiper
      :slides="props.cardInfo"
      class="max-w-pc mx-auto basePadding-x"
      :className="'best-sellers__swiper'"
      :id="props.id"
    >
      <template #default="{ slide }">
        <Card :data="slide" />
      </template>
    </Swiper>
    <div class="basePadding-x max-w-mobileBig mx-auto mt-5 tablet:hidden">
      <Button asChild class="group w-full" variant="whiteWithBorder">
        <NuxtLink :to="props.sex === 'male' ? '/catalog/male' : '/catalog/female'">
          Смотреть
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
  &--male {
    .colored-text {
      color: $primary-blue;
    }
  }

  &--female {
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
