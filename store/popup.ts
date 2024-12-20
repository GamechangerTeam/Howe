import { defineStore } from "pinia";

export const usePopupStore = defineStore("popupSate", {
  state: (): PopupState => ({
    name: "",
    isOpen: false,
  }),
  actions: {
    open(name: Names) {
      this.name = name;
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
