<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-vue-next";
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'select-trigger flex gap-2 h-10 w-full items-center justify-between rounded-md border border-primary-black-300 bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start',
        props.class
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="w-4 h-4 opacity-50 shrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>

<style lang="scss">
.select-trigger {
  pointer-events: auto;

  svg {
    transition: 0.3s ease;
  }

  &[data-state="open"] {
    svg {
      transform: rotate(180deg);
    }
  }

  &[data-state="closed"] {
    svg {
      transform: rotate(0deg);
    }
  }
}
</style>
