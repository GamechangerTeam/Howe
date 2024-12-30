<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  placeholder?: string;
  type?: string;
  class?: HTMLAttributes["class"];
  max?: string
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <div class="input-wrapper">
    <input
      v-model="modelValue"
      v-bind="props"
      :type="props.type || 'text'"
      placeholder=" "
      :max="props.max"
      :class="
        cn(
          'flex w-full rounded-[8px] border text-sm border-primary-black-300 bg-background px-4 pt-4 pb-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-primary-black-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
    />
    <label class="pointer-events-none text-sm text-primary-black-300 absolute">{{
      props.placeholder
    }}</label>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/components" as *;

.input-wrapper {
  position: relative;
  width: 100%;

  input {
    background: none;
    font-size: 16px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }

  label {
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    font-size: 16px;
    transition: 0.3s ease;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    font-size: 10px;
    top: 0;
    transform: translateY(0);
  }
}
</style>
