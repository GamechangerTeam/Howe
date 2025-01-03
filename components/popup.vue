<script setup lang="ts">
import { ref, watch } from "vue";
import { usePopupStore } from "~/store/popup";

const props = defineProps<{
  name: Names;
  class?: string;
  variants?: string;
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
  (isOpen) => {
    checkPopupState();
    if (isOpen ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);
</script>

<template>
  <div
    v-if="props.variants === 'cart'"
    class="popup w-full fixed z-50 top-0 bg-primary-white"
    :class="[props.class, { 'right-0': isPopupVisible, '-right-full': !isPopupVisible }]"
  >
    <slot></slot>
    <div
      class="popup--cart__bg"
      :class="{ open: isPopupVisible }"
      @click="popupStore.close()"
    ></div>
  </div>
  <div
    v-else
    class="popup w-full fixed z-50 left-0 bg-primary-white"
    :class="[props.class, { 'bottom-0': isPopupVisible, '-bottom-[120lvh]': !isPopupVisible }]"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/components" as *;

.popup {
  transition: bottom 0.3s ease, right 0.3s ease;
}

.popup--cart__bg {
  width: 100%;
  height: 100lvh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  transition: 0.7s ease-in-out;
  background-color: $primary-black-300;
  opacity: 0;
  visibility: hidden;
  display: none;

  @include tablet {
    display: block;
  }

  &.open {
    opacity: 1;
    visibility: visible;
  }
}
</style>
