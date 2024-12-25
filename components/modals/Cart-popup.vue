<script lang="ts" setup>
import { usePopupStore } from "~/store/popup";
import { X } from "lucide-vue-next";
import { useCartStore } from "~/store/cart-store";

const popupStore = usePopupStore();
const { items } = useCartStore();
</script>

<template>
  <Popup name="cart" variants="cart" class="popup--cart h-lvh tablet:min-w-[500px] tablet:w-1/5">
    <div class="w-full h-full bg-primary-white">
      <div class="basePadding flex items-center justify-between">
        <span class="text-2xl"
          >Корзина <span class="text-base align-top -translate-y-2 inline-block">(1)</span></span
        >
        <Button variant="iconCircle" size="icon" @click="popupStore.close">
          <X />
        </Button>
      </div>
      <div class="line line--first">
        <hr />
      </div>
      <div
        class="basePadding-y pl-3 mobile-big:pl-4 overflow-y-auto overflow-x-hidden h-[calc(100lvh-57px)] mobile-big:h-[calc(100lvh-72px)] tablet:h-[calc(100lvh-81px)] flex flex-col gap-6"
      >
        <ul class="items-list flex flex-col gap-3 pr-3 mobile-big:pr-4">
          <li v-for="(item, index) in [1, 2, 4, 5, 6, 7, 8]" :key="index">
            <CartItem :counter="true" />
          </li>
        </ul>
        <div class="line">
          <hr />
        </div>
        <div class="pr-3 mobile-big:pr-4">
          <h3 class="flex items-end justify-between text-xl mb-4">
            Всего: <span>15,000 KZT</span>
          </h3>
          <Button asChild>
            <NuxtLink to="/order" class="flex gap-3" @click="popupStore.close()">
              <NuxtImg src="/icons/bill.svg" width="20" height="20" alt="Купить товары" />
              Оформить заказ
            </NuxtLink>
          </Button>
        </div>
        <div class="line">
          <hr />
        </div>
        <div>
          <h3 class="flex items-end justify-between text-xl mb-4">Рекомендованные</h3>
          <SwiperRecommendationSwiper id="recommendation-swiper" :slides="items">
            <template #default="{ slide }">
              <RecommendationCard />
            </template>
          </SwiperRecommendationSwiper>
        </div>
      </div>
    </div>
  </Popup>
</template>

<style lang="scss" scoped>
@use "~/assets/css/components" as *;





.items-list {
  @include break(720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @include tablet {
    grid-template-columns: 1fr;
  }
}
.line {
  width: 100%;
  flex-shrink: 0;
  height: 1px;
  hr {
    border: none;
    height: 1px;
    background: linear-gradient(to right, $primary-black-300 50%, transparent 50%);
    background-size: 10px 100%;
    width: calc(100% + 24px);
    transform: translateX(-12px);
    margin: 0;
  }

  &--first {
    hr {
      transform: unset;
    }
  }
}
</style>
