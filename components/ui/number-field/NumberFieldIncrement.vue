<script setup lang="ts">
import type { NumberFieldIncrementProps } from "radix-vue";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-vue-next";
import { NumberFieldIncrement, useForwardProps } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<NumberFieldIncrementProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <NumberFieldIncrement
    data-slot="increment"
    v-bind="forwarded"
    :class="
      cn(' bg-primary-white-gradient py-4 px-6 rounded-r-[100px] active:scale-95 transition-transform duration-100  disabled:cursor-not-allowed disabled:opacity-20', props.class)
    "
  >
    <slot>
      <Plus class="h-4 w-4" />
    </slot>
  </NumberFieldIncrement>
</template>
