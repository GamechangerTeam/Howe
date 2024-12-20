<script setup lang="ts">
import AboutConstructor from "./home/AboutConstructor.vue";
import BestSellersMan from "./home/BestSellers-man.vue";
import BestSellersWomen from "./home/BestSellers-woman.vue";
import Hero from "./home/Hero.vue";
import Product from "./home/Product.vue";
</script>

<template>
  <div>
    <Hero />
    <Product />
    <BestSellersWomen />
    <AboutConstructor/>
    <BestSellersMan />
  </div>
</template>
