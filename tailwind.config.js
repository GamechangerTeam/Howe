const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: "0.3s",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      colors: {
        "page-color": "var(--page-color)",
        "primary-red": "#C41E40",
        "primary-blue": "#1E37C4",
        "primary-white": "#FCFCFC",
        "primary-white-100": "#F5F5F5",
        "primary-gray": "#EBEBEB",
        "primary-gray-100": "#bdbdbd",
        "primary-black-100": "#00000012",
        "primary-black-300": "#00000057",
        "primary-black-400": "#8A8A8A",
        border: "(--border)",
        input: "(--input)",
        ring: "(--ring)",
        background: "(--background)",
        foreground: "(--foreground)",
        primary: {
          DEFAULT: "(--primary)",
          foreground: "(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "(--secondary)",
          foreground: "(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "(--destructive)",
          foreground: "(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "#00000012",
          foreground: "(--muted-foreground)",
        },
        accent: {
          DEFAULT: "(--accent)",
          foreground: "(--accent-foreground)",
        },
        popover: {
          DEFAULT: "(--popover)",
          foreground: "(--popover-foreground)",
        },
        card: {
          DEFAULT: "(--card)",
          foreground: "(--card-foreground)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
      backgroundImage: {
        "page-color": "var(--page-color-bg)",

        "primary-blue-gradient":
          "radial-gradient(100.51% 124.04% at 50% 4.99%, #1E37C4 0%, #6F85FF 100%)",
        "primary-black-gradient":
          "radial-gradient(199.04% 232.03% at 50% 254.69%, rgba(102, 102, 102, 0.4) 0%, #000000 100%)",
        "primary-white-gradient":
          "radial-gradient(202% 298.26% at -21.7% 35.45%, rgba(255, 255, 255, 0.5) 0%, rgba(102, 102, 102, 0.5) 100%)",
        "primary-white-gradient-left":
          "radial-gradient(292.52% 431.93% at 157.11% 57.27%, rgba(255, 255, 255, 0.5) 0%, rgba(102, 102, 102, 0.5) 100%) ",

        "primary-border-gradient":
          "linear-gradient(0deg, rgba(1, 1, 1, 0.16) 0%, rgba(1, 1, 1, 0.032) 100%)",
      },
      maxWidth: {
        pc: "1440px",
        laptop: "1024px",
        tabletBig: "960px",
        tablet: "768px",
        tabletMin: "600px",
        mobileBig: "525px",
        mobile: "430px",
        mobileMid: "375px",
        mobileMin: "350px",
      },
      screens: {
        pc: "1441px",
        laptop: "1025px",
        "tablet-big": "961px",
        tablet: "769px",
        "tablet-min": "601px",
        "mobile-big": "526px",
        mobile: "431px",
        "mobile-mid": "376px",
        "mobile-min": "351px",
      },
    },
  },
  plugins: [animate],
};
