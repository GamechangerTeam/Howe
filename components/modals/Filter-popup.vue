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

const props = defineProps<{
  color: string;
  clotheStyles: string[];
  colors: string[];
  sizes: string[];
  sort: string[];
  sex: string[];
}>();

const popupStore = usePopupStore();
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
    <p class="basePadding text-4xl mt-4 mb-3" :class="color">Фильтр</p>
    
    <Accordion type="multiple" class="w-full h-full overflow-y-auto" collapsible>
      <AccordionItem value="Пол">
        <AccordionTrigger>Пол</AccordionTrigger>
        <AccordionContent class="pt-5 flex flex-col gap-2">
          <RadioGroup default-value="male">
            <div class="flex items-center gap-2" v-for="(item, index) in sex" :key="index">
              <RadioGroupItem :id="item" :value="item"> </RadioGroupItem>
              <label :for="item">{{ item }}</label>
            </div>
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
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
        <AccordionTrigger>Фасон</AccordionTrigger>
        <AccordionContent class="pt-5 flex flex-col gap-2">
          <ul v-for="style in props.clotheStyles" :key="style" class="flex items-center gap-2">
            <Checkbox :id="style" />
            <label :for="style" class="text-sm"> {{ style }} </label>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="цвет">
        <AccordionTrigger>Цвет</AccordionTrigger>
        <AccordionContent class="pt-5 flex gap-2 flex-wrap">
          <div v-for="color in props.colors" :key="color" class="flex items-center gap-2">
            <Checkbox :id="color" :color="color" />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Сортировка">
        <AccordionTrigger>Сортировка</AccordionTrigger>
        <AccordionContent class="pt-5 flex flex-col gap-2">
          <RadioGroup default-value="male">
            <div class="flex items-center gap-2" v-for="(item, index) in sort" :key="index">
              <RadioGroupItem :id="item" :value="item"> </RadioGroupItem>
              <label :for="item">{{ item }}</label>
            </div>
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Popup>
</template>
