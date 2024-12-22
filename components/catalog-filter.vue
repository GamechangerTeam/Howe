<script setup lang="ts">
import Checkbox from "./ui/checkbox/Checkbox.vue";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import RadioGroup from "./ui/radio-group/RadioGroup.vue";
import RadioGroupItem from "./ui/radio-group/RadioGroupItem.vue";

const tabs = [
  { name: "sex", typeSingle: true, isColor: false, title: "Пол", options: ["Мужской", "Женский"] },
  {
    name: "sizes",
    typeSingle: false,
    title: "Размер",
    options: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    isColor: false,
  },
  {
    name: "style",
    typeSingle: false,
    title: "Фасон",
    options: ["Спортивный", "Классический", "Повседневный"],
    isColor: false,
  },
  {
    name: "color",
    title: "Цвет",
    options: ["#000", "#f5f5f5", "#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"],
    typeSingle: false,
    isColor: true,
  },
  {
    name: "sort",
    title: "По возрастанию цены",
    options: ["От меньшего к большему", "От большего к меньшему"],
    typeSingle: true,
    isColor: false,
  },
];
</script>

<template>
  <aside class="gap-4 items-center hidden tablet:flex">
    <div class="w-full">
      <NavigationMenu class="w-full max-w-full justify-normal">
        <NavigationMenuList class="gap-4 ml-auto w-full">
          <NavigationMenuItem
            v-for="(tab, index) in tabs"
            :key="index"
            :class="index === tabs.length - 1 ? 'ml-auto' : ''"
          >
            <NavigationMenuTrigger class="border border-primary-black-100" :index="index">
              {{ tab.title }}
            </NavigationMenuTrigger>
            <NavigationMenuContent class="border-primary-black-100">
              <ul
                v-if="!tab.typeSingle"
                class="p-4 flex flex-col gap-3"
                :class="tab.isColor ? 'colors-tab' : ''"
              >
                <li
                  v-for="(option, index) in tab.options"
                  :key="index"
                  class=""
                  :class="tab.isColor ? '' : 'flex gap-2 items-center text-nowrap'"
                >
                  <Checkbox :id="option" :color="option" :isColor="tab.isColor" />
                  <label v-if="!tab.isColor" :for="option" @click="console.log(option)">
                    {{ option }}
                  </label>
                </li>
              </ul>
              <ul class="p-4 flex flex-col gap-3" v-else>
                <RadioGroup asChild>
                  <li
                    v-for="(option, index) in tab.options"
                    :key="index"
                    class="!flex gap-2 items-center text-nowrap"
                  >
                    <RadioGroupItem :id="option" :value="option" />
                    <label :for="option">
                      {{ option }}
                    </label>
                  </li>
                </RadioGroup>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  li {
    cursor: pointer;
    label {
      width: 100%;
      cursor: pointer;
    }
    * {
      cursor: pointer;
    }
  }
  .colors-tab {
    display: grid !important;
    grid-template-columns: 20px 20px;
  }
}
</style>
