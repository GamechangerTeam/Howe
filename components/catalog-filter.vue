<script setup lang="ts">
import { useActiveFilters } from "~/store/active-filters";
const props = defineProps<{
  clotheStyles: string[];
  colors: string[];
  sizes: string[];
  sort: string[];
  sex: string[];
}>();
const activeFilters = useActiveFilters();
const tabs = [
  {
    name: "sizes",
    typeSingle: false,
    title: "Размер",
    options: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    isColor: false,
    left: "0px",
  },
  {
    name: "style",
    typeSingle: false,
    title: "Фасон",
    options: ["Спортивный", "Классический", "Повседневный"],
    isColor: false,
    left: "120px",
  },
  {
    name: "color",
    title: "Цвет",
    options: ["#000", "#f5f5f5", "#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"],
    typeSingle: false,
    isColor: true,
    left: "230px",
  },
  {
    name: "sort",
    title: "По возрастанию цены",
    options: ["От меньшего к большему", "От большего к меньшему"],
    typeSingle: true,
    isColor: false,
    left: "330px",
  },
];
</script>

<template>
  <aside class="gap-4 items-center hidden tablet:flex">
    <div class="flex gap-4 w-full">
      <NavigationMenu class="w-full max-w-full justify-normal">
        <NavigationMenuList class="gap-4 ml-auto w-full">
          <!-- Размер -->
          <NavigationMenuItem>
            <NavigationMenuTrigger class="border border-primary-black-100" left="0px">
              Размер
            </NavigationMenuTrigger>

            <NavigationMenuContent class="border-primary-black-100">
              <ul class="p-4 flex flex-col gap-3">
                <li
                  v-for="size in props.sizes"
                  :key="size"
                  class="flex gap-2 items-center text-nowrap"
                >
                  <Checkbox
                    :id="size"
                    :checked="activeFilters.selectedSizes.includes(size)"
                    @update:checked="(e) => activeFilters.sizesHandler(e, size)"
                  />
                  <label :for="size">
                    {{ size }}
                  </label>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <!-- Фасон -->
          <NavigationMenuItem>
            <NavigationMenuTrigger class="border border-primary-black-100" left="130px">
              Фасон
            </NavigationMenuTrigger>

            <NavigationMenuContent class="border-primary-black-100">
              <ul class="p-4 flex flex-col gap-3">
                <li
                  v-for="style in props.clotheStyles"
                  :key="style"
                  class="flex gap-2 items-center text-nowrap"
                >
                  <Checkbox
                    :id="style"
                    :checked="activeFilters.selectedStyles.includes(style)"
                    @update:checked="(e) => activeFilters.stylesHandler(e, style)"
                  />
                  <label :for="style">
                    {{ style }}
                  </label>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <!-- Цвет -->
          <NavigationMenuItem>
            <NavigationMenuTrigger class="border border-primary-black-100" left="245px">
              Цвета
            </NavigationMenuTrigger>

            <NavigationMenuContent class="border-primary-black-100">
              <ul class="colors-tab p-4 flex flex-col gap-3">
                <li v-for="color in props.colors" :key="color">
                  <Checkbox
                    :id="color"
                    :color="color"
                    :isColor="true"
                    :checked="activeFilters.selectedStyles.includes(color)"
                    @update:checked="(e) => activeFilters.stylesHandler(e, color)"
                  />
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div class="ml-auto flex items-center gap-2">
        <span class="text-page-color text-sm">Сортировка:</span>
        <Select defaultValue="maxmin">
          <SelectTrigger class="w-fit !border-primary-black-100 !rounded-[8px] px-4 py-3 ml-auto">
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent class="!border-primary-black-100">
            <SelectGroup>
              <SelectItem value="maxmin">По возрастанию цены</SelectItem>
              <SelectItem value="minmax">По уменьшению цены</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
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
