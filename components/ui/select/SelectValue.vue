<script setup lang="ts">
import { SelectValue, type SelectValueProps } from 'radix-vue'

const props = defineProps<SelectValueProps>()
</script>

<template>
  <SelectValue class=" leading-normal" v-bind="props">
    <slot />
  </SelectValue>
</template>
