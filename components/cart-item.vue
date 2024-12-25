<script setup lang="ts">
import { Trash2 } from "lucide-vue-next";
const props = defineProps({
  counter: Boolean,
})
</script>

<template>
  <div class="flex gap-3">
    <div class="w-32 h-44 rounded-[8px] overflow-hidden">
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
      <div v-if="props.counter" class="mt-3 flex items-center justify-between w-full">
        <NumberField class=" " id="count" :default-value="1" :min="1">
          <NumberFieldContent class="max-w-[120px] mobile-min:max-w-[150px]">
            <NumberFieldDecrement class="px-3 py-3 mobile-min:px-4" />
            <NumberFieldInput class="!p-0" />
            <NumberFieldIncrement class="px-3 py-3 mobile-min:px-4" />
          </NumberFieldContent>
        </NumberField>

        <button>
          <Trash2 color="#C41E40" />
        </button>
      </div>
    </div>
  </div>
</template>
