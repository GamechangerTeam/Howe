<script setup lang="ts">
import type { NumberFieldDecrementProps } from "radix-vue";
import { cn } from "@/lib/utils";
import { Minus } from "lucide-vue-next";
import { NumberFieldDecrement, useForwardProps } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<NumberFieldDecrementProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <NumberFieldDecrement
    data-slot="decrement"
    v-bind="forwarded"
    :class="
      cn(
        'bg-primary-white-gradient-left active:scale-95 transition-transform duration-100 py-4 px-6 rounded-l-[100px] disabled:cursor-not-allowed disabled:opacity-20',
        props.class
      )
    "
  >
    <slot>
      <Minus class="h-4 w-4" />
    </slot>
  </NumberFieldDecrement>
</template>
