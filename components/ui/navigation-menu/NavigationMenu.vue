<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  NavigationMenuRoot,
  type NavigationMenuRootEmits,
  type NavigationMenuRootProps,
  useForwardPropsEmits,
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";
import NavigationMenuViewport from "./NavigationMenuViewport.vue";

const props = defineProps<NavigationMenuRootProps & { class?: HTMLAttributes["class"] }>();

const emits = defineEmits<NavigationMenuRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

// import { onMounted } from "vue";

// onMounted(() => {
//   const parent = document.getElementById("nav-menu");
//   const firstDiv = parent?.querySelector("div:first-of-type") as HTMLElement;
//   if (firstDiv) {
//     firstDiv.style.width = "100%";
//   }
// });
</script>

<template>
  <NavigationMenuRoot
    id="nav-menu"
    v-bind="forwarded"
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
