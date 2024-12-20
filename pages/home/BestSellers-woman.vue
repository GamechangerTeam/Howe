<script setup lang="ts">
import BestSellersBlock from "~/components/bestSellers-block.vue";
import type { ProductCard } from "~/types/productCard.d.ts";

const slides: ProductCard[] = [
  {
    title: "Блузка BLK",
    price: "22,000 ₸",
    color: ["#000", "#4e3030", "#fff"],
    img: "/images/products/women/top/BLK/blk-1.jpg",
  },
  {
    title: "Блузка BLK",
    price: "22,000 ₸",
    color: ["#000", "#4e3030", "#fff"],
    img: "/images/products/women/top/BLK/blk-2.jpg",
  },
  {
    title: "Блузка BLK",
    price: "22,000 ₸",
    color: ["#000", "#4e3030", "#fff"],
    img: "/images/products/women/top/BLK/blk-3.jpg",
  },
  {
    title: "Блузка BLK",
    price: "22,000 ₸",
    color: ["#000", "#4e3030", "#fff"],
    img: "/images/products/women/top/BLK/blk-4.jpg",
  },
];

</script>

<template>
  <BestSellersBlock :slides="slides" class="best-sellers--woman" id="best-sellers--woman" sex="female" />
</template>
