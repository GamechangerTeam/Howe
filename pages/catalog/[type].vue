<script setup lang="ts">
import { useRoute } from "vue-router";
import { AlignEndVertical, Filter } from "lucide-vue-next";
import { usePopupStore } from "~/store/popup";

const route = useRoute();
const type = route.params.type as string;

const popupStore = usePopupStore();

const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const clotheStyles = ["Спортивный", "Классический", "Повседневный"];
const colors = ["#000", "#fff", "#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"];
</script>

<template>
  <div class="container mt-9 mb-6">
    <div class="flex justify-between items-center">
      <h1
        class="text-4xl text-center"
        :class="type === 'male' ? 'text-primary-blue' : 'text-primary-red'"
      >
        {{ type === "male" ? "Мужское" : "Женское" }}
        <span class="text-base text-black align-top inline-block -translate-y-2 -translate-x-2"
          >(24)</span
        >
      </h1>
      <button class="flex gap-2 items-center text-sm p-2" @click="popupStore.open('filter')">
        <Filter
          :class="type === 'male' ? 'text-primary-blue' : 'text-primary-red'"
          :stroke-width="1.5"
        />
        Фильтры
      </button>
    </div>

    <ModalsFilterPopup
      :color="type === 'male' ? 'text-primary-blue' : 'text-primary-red'"
      :sizes="sizes"
      :clotheStyles="clotheStyles"
      :colors="colors"
    />
  </div>
</template>
