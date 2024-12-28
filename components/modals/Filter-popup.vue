<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import Popup from "../popup.vue";
import { usePopupStore } from "~/store/popup";
import { X } from "lucide-vue-next";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ref, reactive } from "vue";
import { useActiveFilters } from "~/store/active-filters";

const props = defineProps<{
  clotheStyles: string[];
  colors: string[];
  sizes: string[];
  sort: string[];
  sex: string[];
}>();

const popupStore = usePopupStore();

const activeFilters = useActiveFilters();

</script>

<template>
  <Popup name="filter" class="h-lvh tablet:hidden">
    <Button
      variant="iconCircle"
      size="icon"
      @click="popupStore.close"
      class="absolute top-3 right-3"
    >
      <X />
    </Button>
    <p class="basePadding text-4xl mt-4 mb-3 text-page-color">Фильтр</p>

    <Accordion type="multiple" class="w-full h-[calc(100lvh-92px)] overflow-y-auto" collapsible>

      <!-- Размер -->
      <AccordionItem value="размер">
        <AccordionTrigger>Размер</AccordionTrigger>
        <AccordionContent class="pt-5 flex flex-col gap-2">
          <div v-for="size in props.sizes" :key="size" class="flex items-center gap-2">
            <Checkbox
              :checked="activeFilters.selectedSizes.includes(size)"
              @update:checked="(e) => activeFilters.sizesHandler(e, size )"
              :id="size"
            />
            <label :for="size" class="text-sm">{{ size }}</label>
          </div>
        </AccordionContent>
      </AccordionItem>

      <!-- Фасон -->
      <AccordionItem value="стиль">
        <AccordionTrigger>Фасон</AccordionTrigger>
        <AccordionContent class="pt-5 flex flex-col gap-2">
          <ul v-for="style in props.clotheStyles" :key="style" class="flex items-center gap-2">
            <Checkbox
              :checked="activeFilters.selectedStyles.includes(style)"
              @update:checked="(e) => activeFilters.stylesHandler(e, style )"
              :id="style"
            />
            <label :for="style" class="text-sm">{{ style }}</label>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <!-- Цвет -->
      <AccordionItem value="цвет">
        <AccordionTrigger>Цвет</AccordionTrigger>
        <AccordionContent class="pt-5 flex gap-2 flex-wrap">
          <div v-for="color in props.colors" :key="color" class="flex items-center gap-2">
            <Checkbox
              :checked="activeFilters.selectedColors.includes(color)"
              @update:checked="(e) => activeFilters.colorsHandler(e, color )"
              :color="color"
              :id="color"
              :isColor="true"
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      <!-- Сортировка -->
      <AccordionItem value="Сортировка">
        <AccordionTrigger>Сортировка</AccordionTrigger>
        <AccordionContent class="pt-5 flex flex-col gap-2">
          <RadioGroup v-model="activeFilters.selectedSort">
            <div class="flex items-center gap-2" v-for="(item, index) in sort" :key="index">
              <RadioGroupItem :id="item" :value="item" />
              <label :for="item">{{ item }}</label>
            </div>
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Popup>
</template>
