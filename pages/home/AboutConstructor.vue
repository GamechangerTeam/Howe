<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'
import { ref } from 'vue'


const { width, height } = useWindowSize()

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry], observerElement) => {
    if (width.value < 960) {
      setTimeout(() => {
        targetIsVisible.value = entry?.isIntersecting || false

      }, 400)

    }
  },
)
</script>


<template>
  <div class="about-constructor container blockTopMargin" >
    <h2  class="mb-8 target:mb-10 laptop:mb-12">
      Персонализация медицинской одежды: нанесение логотипа вашего бренд
    </h2>
    <div
      class="about-constructor__wrapper fullHeight  hover:rounded-[300px] overflow-hidden "
      :class="targetIsVisible ? 'rounded-[300px]' : 'rounded-lg'"
      ref="target"
    >
      <NuxtImg
        src="/images/about-constructor.jpg"
        class="w-full h-full object-cover group-hover:rounded-full"
        alt="Персонализация медицинской одежды: нанесение логотипа вашего бренд"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/_components.scss" as *;

.about-constructor {
  &__wrapper {
    transition: .5s ease-in-out;
  }
}
</style>
