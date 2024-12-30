<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";
import { toggleVariants } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { ToggleGroupItem, type ToggleGroupItemProps, useForwardProps } from "radix-vue";
import { computed, type HTMLAttributes, inject, ref } from "vue";
import { Check } from "lucide-vue-next";

type ToggleGroupVariants = VariantProps<typeof toggleVariants>;

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleGroupVariants["variant"];
    size?: ToggleGroupVariants["size"];
    isColor?: boolean;
  }
>();

const context = inject<ToggleGroupVariants>("toggleGroup");

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

// Локальное состояние для отслеживания активности
const isActive = ref(false);

// Обработчик изменения состояния
const toggleActive = (state: boolean) => {
  isActive.value = state;
};
</script>

<template>
  <ToggleGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        toggleVariants({
          variant: context?.variant || props.variant,
          size: context?.size || props.size,
        }),
        props.class,
        ' leading-none'
      )
    "
    @update:modelValue="toggleActive"
  >
    <slot />

    <!-- Иконка Check появляется только при isColor и isActive -->
    <Check
      v-if="props.isColor && isActive"
      :size="16"
      :strokeWidth="3"
      color="#fff"
    />
  </ToggleGroupItem>
</template>

