<script setup>
import Header from '~/components/layouts/Header.vue';
</script>

<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <footer class="text-center p-4">© 2024 My Nuxt3 App</footer>
  </div>
</template>
