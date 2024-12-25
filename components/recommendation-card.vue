<script setup lang="ts">
import { ShoppingCart, Trash2 } from "lucide-vue-next";
</script>

<template>
  <div class="flex gap-3">
    <div
      class="mobile-min:max-w-32 mobile-min:h-44 w-24 h-36 rounded-[8px] overflow-hidden flex-shrink-0 flex-grow"
    >
      <NuxtImg src="/images/hero.jpg" alt="nice" class="object-cover w-full h-full" />
    </div>
    <div class="flex flex-col flex-grow">
      <h4 class="text-xl mb-2">asdad</h4>
      <h5 class="flex items-center gap-2">
        <span class="text-xs line-through">20.000</span> 22.000
      </h5>
      <p class="text-sm text-primary-black-300">Размер:</p>
      <p class="text-sm text-primary-black-300">Цвет:</p>
      <p class="text-sm text-primary-black-300">Фасон:</p>
      <div class="btns-wrapper mt-3 flex flex-col gap-3 w-full mobile-big:flex-row">
        <Select>
          <SelectTrigger class="flex-1 max-w-[156px] mobile-min:max-w-none">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent class="bg-primary-white">
            <SelectGroup>
              <SelectItem value="apple"> Apple </SelectItem>
              <SelectItem value="banana"> Banana </SelectItem>
              <SelectItem value="blueberry"> Blueberry </SelectItem>
              <SelectItem value="grapes"> Grapes </SelectItem>
              <SelectItem value="pineapple"> Pineapple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button size="sm" class="flex-1 max-w-[156px] mobile-min:max-w-none">
          <ShoppingCart :size="20" />
          Добавить в корзину
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/components" as *;
.btns-wrapper {
  @include break(650px) {
    flex-direction: column;
  }
  @include tablet {
    flex-direction: row;
  }
}
</style>
