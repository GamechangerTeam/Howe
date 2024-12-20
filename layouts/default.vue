<script setup>
import Header from '~/components/layouts/Header.vue';
import Footer from '~/components/layouts/Footer.vue';
</script>

<template>
  <div id="app">
    <Header />
    <main class="pt-[50px] mobile:pt-[60px] tablet:pt-[76px]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
