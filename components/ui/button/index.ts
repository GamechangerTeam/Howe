import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm   duration-300 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary-blue-gradient w-full flex gap-3 justify-center items-center rounded-xl h-[60px] text-primary-white text-xl hover:scale-[.97] transition-transform",
        white: "bg-primary-white flex items-center gap-2 justify-center w-full text-center rounded-[4px] text-xl  hover:scale-[.99] transition-transform",
        whiteWithBorder: "bg-primary-white relative flex items-center gap-2 justify-center w-full text-center hover:shadow-md transition-shadow rounded-full py-4 px-6 text-sm mobile-mid:text-xl before:content-[''] before:absolute before:inset-[-1px] before:bg-primary-border-gradient before:z-[-1] before:rounded-full",
        whiteOutline: "relative text-primary-white w-fit flex items-center gap-2 justify-center text-center rounded-[8px] py-5 px-8 text-xl border border-primary-white hover:bg-primary-white hover:text-black transition-colors ",
        iconCircle: "rounded-full  bg-primary-gray flex items-center justify-center",
        black: "bg-primary-black-gradient w-full flex gap-3 justify-center items-center rounded-xl h-[60px] text-primary-white text-xl hover:scale-[.97] transition-transform"
      },
      size: {
        default: "py-4 px-6 ",
        sm: "h-[40px] py-3 px-5 text-xs rounded-[6px]",
        lg: "h-10 rounded-md px-8",
        icon: "h-[30px] w-[30px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
