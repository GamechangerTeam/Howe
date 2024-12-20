<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import Popup from "../popup.vue";
import { usePopupStore } from "~/store/popup";
import { X } from "lucide-vue-next";

const props = defineProps<{
  color: string;
  clotheStyles: string[];
  colors: string[];
  sizes: string[];
}>();

const popupStore = usePopupStore();

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
</script>

<template>
  <Popup name="filter" class="h-lvh  tablet-big:hidden">
    <Button
      variant="iconCircle"
      size="icon"
      @click="popupStore.close"
      class="absolute top-2 right-2"
    >
      <X />
    </Button>
      <p class="basePadding text-4xl mt-4 mb-3" :class="color">Фильтр</p>
      <Accordion type="multiple" class="w-full " collapsible>
        <AccordionItem value="размер">
          <AccordionTrigger>Размер</AccordionTrigger>
          <AccordionContent class="pt-5 flex flex-col gap-2">
            <div v-for="size in props.sizes" :key="size" class="flex items-center gap-2">
              <Checkbox :id="size" />
              <label :for="size" class="text-sm"> {{ size }} </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="стиль">
          <AccordionTrigger>Стиль</AccordionTrigger>
          <AccordionContent class="pt-5 flex flex-col gap-2">
            <div v-for="style in props.clotheStyles" :key="style" class="flex items-center gap-2">
              <Checkbox :id="style" />
              <label :for="style" class="text-sm"> {{ style }} </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="цвет">
          <AccordionTrigger>Цвет</AccordionTrigger>
          <AccordionContent class="pt-5 flex flex-col gap-2">
            <div v-for="color in props.colors" :key="color" class="flex items-center gap-2">
              <Checkbox :id="color" />
              <label :for="color" class="text-sm"> {{ color }} </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  </Popup>
</template>