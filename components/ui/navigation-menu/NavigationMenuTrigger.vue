<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-vue-next";
import { NavigationMenuTrigger, type NavigationMenuTriggerProps, useForwardProps } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";
import { navigationMenuTriggerStyle } from ".";

const props = defineProps<
  NavigationMenuTriggerProps & { class?: HTMLAttributes["class"]; index?: string }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

import { onMounted } from "vue";

const handleInteraction = (event: Event) => {
  const target = event.target as HTMLElement;
  const position = target.dataset.catalogMenuPosition || "0";
  console.log(position);

  if (position) {
    document.documentElement.style.setProperty("--catalog-menu-position", position);
  }
};

onMounted(() => {
  const buttons = document.querySelectorAll("[data-catalog-menu-position]");
  buttons.forEach((button) => {
    button.addEventListener("click", handleInteraction);
    button.addEventListener("mouseover", handleInteraction);
  });
});
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn(navigationMenuTriggerStyle(), props.class)"
    :data-catalog-menu-position="`${index}`"
  >
    <slot />
    <ChevronDown
      class="relative pointer-events-none top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
