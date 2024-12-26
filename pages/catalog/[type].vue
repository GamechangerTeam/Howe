<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { Filter } from "lucide-vue-next";
import { usePopupStore } from "~/store/popup";
const route = useRoute();
const type = route.params.type as string;

onMounted(() => {
  if (type === "male") {
    document.documentElement.style.setProperty("--page-color", "#1e37c4");
    document.documentElement.style.setProperty(
      "--page-color-bg",
      "radial-gradient(100.51% 124.04% at 50% 4.99%, #1e37c4 0%, #6f85ff 100%)"
    );
  } else {
    document.documentElement.style.setProperty("--page-color", "#c41e40");
    document.documentElement.style.setProperty(
      "--page-color-bg",
      "radial-gradient(100.51% 124.04% at 50% 4.99%, #c41e40 0%, #ee6580 100%)"
    );
  }
});

const popupStore = usePopupStore();

const sex = ["Мужской", "Женский"];
const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const clotheStyles = ["Спортивный", "Классический", "Повседневный"];
const colors = ["#000", "#f5f5f5", "#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"];
const sort = ["По возрастанию", "По убыванию"];

const itemsList = [
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Хуюзка",
    secondName: "(Ебаная)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
];
</script>

<template>
  <div class="container mt-9 mb-6">
    <div
      class="flex justify-between mb-6 items-center tablet:justify-center tablet:mb-10 tablet-big:mb-12"
    >
      <h1 class="text-page-color text-4xl text-center tablet:text-5xl tablet-big:text-6xl">
        {{ type === "male" ? "Мужское" : "Женское" }}
        <span class="text-base text-black align-top inline-block -translate-y-2 -translate-x-2"
          >(24)</span
        >
      </h1>
      <button
        class="flex gap-2 items-center text-sm p-2 tablet:hidden"
        @click="popupStore.open('filter')"
      >
        <Filter class="text-page-color" :stroke-width="1.5" />
        Фильтры
      </button>
    </div>
    <CatalogFilter />

    <ModalsFilterPopup
      :sizes="sizes"
      :clotheStyles="clotheStyles"
      :colors="colors"
      :sex="sex"
      :sort="sort"
    />

    <ul
      class="grid gap-2 mt-6 mobile-min:grid-cols-2 mobile-big:grid-cols-3 tablet:grid-cols-4 tablet:gap-3 tablet-big:gap-5"
    >
      <li v-for="(item, index) in itemsList" :key="index">
        <NuxtLink :to="`/product/${type}/${item.name}`">
          <Card :data="item" />
        </NuxtLink>
      </li>
    </ul>

    <Pagination />
  </div>
</template>

<style lang="scss" scoped>
.loxdd {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
