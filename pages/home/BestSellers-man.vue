<script setup lang="ts">
import BestSellersBlock from "~/components/bestSellers-block.vue";
import type { ProductCard } from "~/types/productCard.d.ts";

const slides: ProductCard[] = [
  {
    title: "Халат WH",
    price: "22,000 ₸",
    color: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    title: "Халат WH",
    price: "22,000 ₸",
    color: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-2.jpg",
  },
  {
    title: "Халат WH",
    price: "22,000 ₸",
    color: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-3.jpg",
  },
  {
    title: "Халат WH",
    price: "22,000 ₸",
    color: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-4.jpg",
  },
];
</script>

<template>
  <BestSellersBlock :slides="slides" class="best-sellers--man" id="best-sellers--man" sex="male" />
</template>
