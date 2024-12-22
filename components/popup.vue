<script setup lang="ts">
import { ref, watch } from "vue";
import { usePopupStore } from "~/store/popup";

const props = defineProps<{
  name: Names;
  class?: string;
}>();

const popupStore = usePopupStore();
const isPopupVisible = ref<boolean>(false);

const checkPopupState = () => {
  if (props.name === popupStore.name) {
    isPopupVisible.value = popupStore.isOpen;
  }
};

watch(
  () => popupStore.isOpen,
  () => {
    checkPopupState();
    if (popupStore.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);
</script>

<template>
  <div
    class="popup w-full fixed z-50 left-0 bg-primary-white duration-300 ease-in-out"
    :class="[
      props.class,
      {
        'bottom-0': isPopupVisible,
        '-bottom-full': !isPopupVisible,
      },
    ]"
    style="transition: bottom 0.7s"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
