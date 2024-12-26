<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "radix-vue";
import { cn } from "@/lib/utils";
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";
import { Check } from "lucide-vue-next";

const props = defineProps<
  CheckboxRootProps & {
    class?: HTMLAttributes["class"];
    color?: string;
    isColor?: boolean;
    isSquare?: boolean;
  }
>();
const emits = defineEmits<CheckboxRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="cn(
      'peer h-[24px] w-[24px] flex items-center justify-center shrink-0 rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      props.class,
      { 'border-primary-black-300': props.color }
    )"
    :style="{ background: props.color }"
  >
    <CheckboxIndicator
      :class="cn(
        props.isColor
          ? 'border-primary-black-300'
          : props.isSquare
          ? 'border-red-300 bg-black w-full h-full flex items-center justify-center'
          : 'flex h-full w-full items-center justify-center text-current'
      )"
    >
      <slot>
        <Check
          v-if="props.isColor || props.isSquare"
          :size="16"
          :strokeWidth="3"
          color="#fff"
        />
        <span v-else class="w-2 h-2 bg-black rounded-full"></span>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
