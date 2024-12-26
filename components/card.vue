<script lang="ts" setup>
import type { CardTypes } from "~/types/card";
import { ref } from "vue";
const { data } = defineProps<{ data: CardTypes }>();
import { useElementSize } from "@vueuse/core";
const blockRef = ref<HTMLElement | null>(null);
const cardInfo = useElementSize(blockRef);
const width = ref(0);
const height = ref(0);
const ready = ref(false);
onMounted(() => {
  width.value = cardInfo.width.value;
  height.value = cardInfo.height.value;
  console.log(cardInfo.width.value);
  ready.value = true;
});
</script>

<template>
  <div class="card" ref="blockRef">
    <NuxtImg
      v-if="ready"
      class="card__img"
      :width="width"
      :height="height"
      :src="data.img"
      loading="lazy"
    />
    <Skeleton v-else class="h-full w-full" />
    <div class="card__info">
      <h4 class="card__title">
        {{ data.name }}
        <span v-if="data.secondName" class="card__description">{{ data.secondName }}</span>
      </h4>
      <div class="card__prices-wrapper">
        <span v-if="data.oldPrice" class="card__old-price">{{ data.oldPrice }}</span>
        <span class="card__price">{{ data.price }}</span>
      </div>

      <div class="card__footer">
        <ul class="card__colors">
          <li
            class="card__color"
            v-for="(color, index) in data.colors"
            :key="index"
            :style="{ background: color }"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/_components.scss" as *;

.card {
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 2/3;
  height: 100%;
  width: 100%;

  &__img {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    aspect-ratio: 2/3;
  }

  &__info {
    background: $primary-white;
    width: calc(100% - 8px);
    padding: 12px;
    border-radius: 4px;
    position: absolute;
    bottom: 4px;
    left: 4px;
  }

  &__title {
    font-size: 14px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    @include mobile-big {
      font-size: 16px;
    }
    @include tablet {
      font-size: 20px;
    }
  }

  &__description {
    color: $primary-black-300;
  }

  &__prices-wrapper {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    font-size: 14px;
    margin-bottom: 6px;
    @include mobile-big {
      font-size: 16px;
    }
  }

  &__old-price {
    font-size: 12px;
    text-decoration: line-through;
    @include mobile-big {
      font-size: 14px;
    }
  }

  &__footer {
    overflow: hidden;
    transition: 0.5s ease-in-out;
    ul {
      display: flex;
      gap: 6px;
    }

    @include tablet-big {
      @media (hover: hover) and (pointer: fine) {
        max-height: 0;
      }
    }
  }

  &__color {
    width: 20px;
    height: 20px;
    border: 1px solid $primary-black-300;
    border-radius: 50%;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      .card__footer {
        max-height: 100px;
      }
    }
  }
}
</style>
