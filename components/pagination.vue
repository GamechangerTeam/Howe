<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next";
import { ref, computed } from "vue";

const totalPages = 20; // Общее количество страниц
const currentPage = ref(1); // Текущая страница

const visiblePages = computed(() => {
  console.log();

  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage.value >= totalPages - 3) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push("...");
      for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }
  }
  return pages;
});

const goToPage = (page: number | string) => {
  if (typeof page === "number") {
    currentPage.value = page;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
};
</script>

<template>
  <div class="pagination">
    <button class="pagination__prev" @click="prevPage" :disabled="currentPage === 1">
      <ChevronLeft />
    </button>
    <ul>
      <li v-for="page in visiblePages" :key="page">
        <button
          @click="goToPage(page)"
          :class="{ active: page === currentPage }"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>
      </li>
    </ul>
    <button class="pagination__next" @click="nextPage" :disabled="currentPage === totalPages">
      <ChevronLeft />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/components" as *;

.pagination {
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;

  ul {
    display: flex;
    gap: 4px;

    li {
      align-items: center;
      justify-content: center;
    }
  }

  button {
    width: 28px;
    height: 28px;
    border-radius: 4px;
    font-size: 12px;
    display: grid;
    place-content: center;
    color: $primary-white;
    outline: 1px solid $primary-black-300;
    color: black;
    transition: scale 0.3s ease;
    &:disabled {
      opacity: 0.6;
      cursor: auto;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: none;
          color: black;
          scale: 1;
          opacity: 0.6;
        }
      }
    }

    &.active {
      background: $primary-blue-gradient;
      color: $primary-white;
      outline: none !important;
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: $primary-blue-gradient;
        color: $primary-white;
        scale: 0.95;
        opacity: 0.8;
      }
    }

    @include mobile-mid {
      width: 32px;
      height: 32px;
    }
  }

  &__next,
  &__prev {
    background: $primary-blue-gradient !important;
    color: $primary-white !important;
    border-radius: 4px;
    outline: none !important;
    svg {
      width: 14px;
      @include mobile-mid {
        width: 16px;
      }
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        opacity: 1 !important;
      }
    }
  }
  &__next {
    rotate: 180deg;
  }
}
</style>
