<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "radix-vue";
import { cn } from "@/lib/utils";
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";
import { Check } from "lucide-vue-next";

const props = defineProps<
  CheckboxRootProps & { class?: HTMLAttributes["class"]; color?: string; isColor?: boolean }
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
    :class="
      cn(
        'peer h-[20px] w-[20px] flex items-center justify-center shrink-0 rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        props.class,
        props.color ? 'border-primary-black-300' : ''
      )
    "
    :style="{ background: props.color }"
  >
    <CheckboxIndicator v-if="props.isColor" data-xyi="xyi" class="border-primary-black-300">
      <Check :size="12" color="#fff" />
    </CheckboxIndicator>
    <CheckboxIndicator v-else class="flex h-full w-full items-center justify-center text-current">
      <slot>
        <span class="w-2 h-2 bg-black rounded-full"></span>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
