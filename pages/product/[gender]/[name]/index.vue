<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import type { CardTypes } from "~/types/card";
definePageMeta({
  middleware: "check-gender",
});

const route = useRoute();
const gender = route.params.gender;

const images = [
  "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  "/images/products/man/top/robe-WH/robe-wh-asian-2.jpg",
  "/images/products/man/top/robe-WH/robe-wh-asian-3.jpg",
  "/images/products/man/top/robe-WH/robe-wh-asian-3.jpg",
  "/images/products/man/top/robe-WH/robe-wh-asian-3.jpg",
  "/images/products/man/top/robe-WH/robe-wh-asian-3.jpg",
];




const activeImg = ref(0);

const onSlideChange = (e: number) => {
  console.log("asdads", e);
  activeImg.value = e;
};

const sex = ["Мужской", "Женский"];
const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const clotheStyles = ["Спортивный", "Классический", "Повседневный"];
const colors = [
  "#000",
  "#f5f5f5",
  "#f00",
  "#f5f5f5",
  "#f00",
  "#f5f5f5",
  "#f00",
  "#f5f5f5",
  "#f00",
  "#f5f5f5",
  "#f00",
  "#0f0",
  "#00f",
  "#ff0",
  "#f0f",
  "#0ff",
];
const sort = ["По возрастанию", "По убыванию"];
import type { ProductCard } from "~/types/productCard";

const slides: CardTypes[] = [
  {
    name: "Халат WH",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Халат WH",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-2.jpg",
  },
  {
    name: "Халат WH",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-3.jpg",
  },
  {
    name: "Халат WH",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-4.jpg",
  },
  {
    name: "Халат WH",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Халат WH",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-2.jpg",
  },
  {
    name: "Халат WH",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-3.jpg",
  },
  {
    name: "Халат WH",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-4.jpg",
  },
];
</script>

<template>
  <div class="container">
    <div class="flex items-center gap-2 text-xs tablet-min:hidden">
      <NuxtLink to="/"> Главная </NuxtLink>
      <ArrowRight :size="14" />
      <NuxtLink :to="`/catalog/${gender}`"> {{ gender === "male" ? "Мужское" : "Женское" }}  </NuxtLink>
      <ArrowRight :size="14" />

      Название
    </div>
    <div class="header flex flex-col gap-6">
      <SwiperProductSwiper :slides="images"> </SwiperProductSwiper>
      <div class="flex flex-col gap-4">
        <div class="hidden items-center gap-2 text-xs tablet-min:flex tablet-min:text-sm">
          <NuxtLink to="/"> Главная </NuxtLink>
          <ArrowRight :size="14" />
          <NuxtLink :to="`/catalog/${gender}`"> {{ gender === "male" ? "Мужское" : "Женское" }} </NuxtLink>

          <ArrowRight :size="14" />

          Название
        </div>
        <h1 class="text-3xl mt-4">
          Хуело <span class="text-primary-black-300">(Еврогейское)</span>
        </h1>
        <div class="flex items-end gap-2">
          <span class="old-price">20.000₸</span>
          <h2 class="text-xl">25.000₸</h2>
        </div>
        <hr class="border-dashed border-1 border-primary-black-300 my-2 laptop:my-4" />
        <div>
          <h3 class="mb-4 text-lg">Цвет</h3>
          <ul class="flex flex-wrap gap-2">
            <li v-for="(color, index) in colors" :key="index">
              <Checkbox
                :id="color"
                :color="color"
                :isColor="true"
                class="tablet-big:h-7 tablet-big:w-7 w-6 h-6"
              />
            </li>
          </ul>
        </div>
        <hr class="border-dashed border-1 border-primary-black-300 my-2 laptop:my-4" />

        <div>
          <h3 class="mb-4 text-lg">Фасон</h3>
          <ToggleGroup type="multiple">
            <ToggleGroupItem v-for="(style, index) in clotheStyles" :key="index" :value="style">
              {{ style }}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <hr class="border-dashed border-1 border-primary-black-300 my-2 laptop:my-4" />
        <div>
          <h3 class="mb-4 text-lg">Размер</h3>
          <ToggleGroup type="multiple">
            <ToggleGroupItem v-for="(size, index) in sizes" :key="index" :value="size">
              {{ size }}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <hr class="border-dashed border-1 border-primary-black-300 my-2 laptop:my-4" />
        <NumberField class="mx-auto" id="age" :default-value="1" :min="1">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <div class="flex flex-col gap-4 justify-center items-center pc:flex-row">
          <Button class="text-md" asChild>
            <NuxtLink to="/order">
              <NuxtImg src="/icons/bill.svg" alt="Купить товар" height="20" width="20" />
              Оформить
            </NuxtLink>
          </Button>
          <Button variant="black" class="text-md">
            <NuxtImg src="/icons/overlay-logo.svg" alt="Купить товар" height="20" width="20" />
            Наложить логотип
          </Button>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-center blockTopMargin mb-8 text-3xl mobile:text-4xl tablet:text-5xl">
        Рекомендованные
      </h2>
      <Swiper
        :slides="slides"
        class="max-w-pc mx-auto basePadding-x"
        :className="'best-sellers__swiper'"
        id="rec-block-swiper"
        :manySlides="true"
      >
        <template #default="{ slide }">
          <Card :data="slide" />
        </template>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/components" as *;
.header {
  @include tablet-min {
    display: grid;
    grid-template-columns: 48% 48%;
    justify-content: space-between;
  }
  @include break(650px) {
  }
  @include tablet {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @include laptop {
    grid-template-columns: 60% 35%;
  }
  @include pc {
    grid-template-columns: 58% 40%;
  }
}

.old-price {
  text-decoration: line-through;
}

#rec-block-swiper {
  width: calc(100% + 24px);
  transform: translateX(-12px);
  @include mobile {
    width: calc(100% + 32px);
    transform: translateX(-16px);
  }
  @include tablet {
    width: calc(100% + 48px);
    transform: translateX(-24px);
  }
}
</style>

<style lang="scss">
#rec-block-swiper {
  .card__title {
    font-size: 14px !important;
  }

  .card__price {
    font-size: 12px !important;
  }

  .card__old-price {
    font-size: 10px !important;
  }
}
</style>
