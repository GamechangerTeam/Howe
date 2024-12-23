import { cva, type VariantProps } from "class-variance-authority";

export { default as Toggle } from "./Toggle.vue";

export const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors hover:border-black hover:text-black  disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-black data-[state=on]:text-primary-white",
  {
    variants: {
      variant: {
        default: "border border-primary-black-300 text-primary-black-300 rounded-[100px]",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "py-2 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ToggleVariants = VariantProps<typeof toggleVariants>;
