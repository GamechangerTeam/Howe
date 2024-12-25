<script setup lang="ts">
import Header from "~/components/layouts/Header.vue";
import Footer from "~/components/layouts/Footer.vue";
import CartPopup from "~/components/modals/Cart-popup.vue";

const route = useRoute()
</script>

<template>
  <div id="app">
    <Header />
    <main class="pt-[50px] mobile:pt-[60px] tablet:pt-[76px]">
      <slot />
      <CartPopup />
    </main>
    <Footer v-if="!route.meta.hideFooter" />
  </div>
</template>
