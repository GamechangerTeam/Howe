import { defineStore } from "pinia";

export const useActiveFilters = defineStore("activeFilters", {
  state: () => ({
    selectedSizes: [] as string[],
    selectedColors: [] as string[],
    selectedStyles: [] as string[],
    selectedSort: "",
  }),
  actions: {
    sizesHandler(selected: boolean, value: string) {
      if (selected) {
        if (!this.selectedSizes.includes(value)) {
          this.selectedSizes.push(value);
        }
      } else {
        const index = this.selectedSizes.indexOf(value);
        if (index > -1) {
          this.selectedSizes.splice(index, 1);
        }
      }
    },
    colorsHandler(selected: boolean, value: string) {
      if (selected) {
        if (!this.selectedColors.includes(value)) {
          this.selectedColors.push(value);
        }
      } else {
        const index = this.selectedColors.indexOf(value);
        if (index > -1) {
          this.selectedColors.splice(index, 1);
        }
      }
    },
    stylesHandler(selected: boolean, value: string) {
      if (selected) {
        if (!this.selectedStyles.includes(value)) {
          this.selectedStyles.push(value);
        }
      } else {
        const index = this.selectedStyles.indexOf(value);
        if (index > -1) {
          this.selectedStyles.splice(index, 1);
        }
      }
    },
    sortHandler(value: string) {
      this.selectedSort = value;
    },
  },
});
