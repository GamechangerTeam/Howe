type Names = "" | "header" | "cart" | "filter";

interface PopupState {
  name: Names;
  isOpen: boolean;
}