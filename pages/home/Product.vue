<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section id="news" class="container product min-h-[500px] fullHeight items-start">
    <SwiperNewItemsSwiper>
      <div class="swiper-slide">
        <article class="flex flex-col h-full justify-between relative">
          <div class="flex flex-col gap-3 basePadding">
            <span class="bg-primary-white text-sm rounded-[100px] py-3 px-5 w-fit"> New </span>
            <h3 class="text-4xl text-primary-white">Брюки Карго</h3>
          </div>
          <NuxtImg class="absolute z-[-2] object-cover w-full h-full" src="/images/kargo.png" />
          <div class="basePadding group">
            <Button variant="white">
              <nuxt-link to="/">Заказать</nuxt-link>
              <ArrowRight
                :stroke-width="1.5"
                :size="20"
                class="group-hover:-rotate-45"
                color="black"
              />
            </Button>
          </div>
        </article>
      </div>
      <div class="swiper-slide">
        <article class="flex-col h-full justify-between relative flex">
          <div class="flex flex-col gap-3 basePadding">
            <span class="bg-primary-red text-primary-white text-sm rounded-[100px] py-3 px-5 w-fit">
              New
            </span>
            <h3 class="text-4xl text-primary-white">Брюки Карго</h3>
          </div>
          <NuxtImg class="absolute z-[-2] object-cover w-full h-full" src="/images/kargo.png" />
          <div class="basePadding group">
            <Button variant="white">
              <nuxt-link to="/">Заказать</nuxt-link>
              <ArrowRight
                :stroke-width="1.5"
                :size="20"
                class="group-hover:-rotate-45"
                color="black"
              />
            </Button>
          </div>
        </article>
      </div>
    </SwiperNewItemsSwiper>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;
}
</style>
