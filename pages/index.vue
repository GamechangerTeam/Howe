<script setup lang="ts">
import type { CardTypes } from "~/types/card";
import AboutConstructor from "./home/AboutConstructor.vue";
import Hero from "./home/Hero.vue";
import Product from "./home/Product.vue";
import BestSellersBlock from "./home/BestSellers-block.vue";

const man: CardTypes[] = [
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

const female: CardTypes[] = [
  {
    name: "Блузка BLK",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/women/top/BLK/blk-1.jpg",
  },
  {
    name: "Блузка BLK",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/women/top/BLK/blk-2.jpg",
  },
  {
    name: "Блузка BLK",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/women/top/BLK/blk-3.jpg",
  },
  {
    name: "Блузка BLK",
    price: "22,000 ₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/women/top/BLK/blk-4.jpg",
  },
];
</script>

<template>
  <div>
    <Hero />
    <Product />
    <BestSellersBlock
      :cardInfo="female"
      sex="female"
      id="best-sellers--female"
      class="best-sellers--female"
    />
    <AboutConstructor />
    <BestSellersBlock :cardInfo="man" sex="male" id="best-sellers--male" class="best-sellers--male" />
  </div>
</template>
