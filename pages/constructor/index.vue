<script lang="ts" setup>
const itemsList = [
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
  {
    name: "Поло",
    secondName: "(Крутое)",
    price: "22.000₸",
    oldPrice: "25.000₸",
    colors: ["#000", "#4e3030", "#fff"],
    img: "/images/products/man/top/robe-WH/robe-wh-asian-1.jpg",
  },
];
</script>

<template>
  <div class="container">
    <h1 class="text-4xl text-left mt-8 mobile-mid:text-center tablet:text-5xl">
      Выберите подходящую одежду
    </h1>
    <Command class="rounded-lg border shadow-md max-w-[310px] my-8">
      <CommandInput placeholder="Найти" />
      <CommandList>
        <CommandEmpty>Совпадений не найдено</CommandEmpty>
        <CommandItem value="xui1">
          <span>xui1</span>
        </CommandItem>
        <CommandItem value="xui2">
          <span>xui2</span>
        </CommandItem>
        <CommandItem value="xui2">
          <span>xui2</span>
        </CommandItem>
        <CommandItem value="xui2">
          <span>xui2</span>
        </CommandItem>
        <CommandItem value="xui2">
          <span>xui2</span>
        </CommandItem>
        <CommandItem value="xui2">
          <span>xui2</span>
        </CommandItem>
      </CommandList>
    </Command>
    <ul
      class="grid gap-2 mt-6 mobile-min:grid-cols-2 mobile-big:grid-cols-3 tablet:grid-cols-4 tablet:gap-3 tablet-big:gap-5"
    >
      <li v-for="(item, index) in itemsList" :key="index">
        <NuxtLink to="/constructor/lox">
          <Card :data="item" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
