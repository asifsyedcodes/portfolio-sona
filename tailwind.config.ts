import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          100: "#f6fff8",
          200: "#84a98c",
          300: "#cad2c5",
          700: "#52796f",
          900: "#354f52",
        },
        white: {
          900: "#FFFFFF",
        },
        black: {
          900: "#000000",
        },
        gray: {
          600: "#D7D7D7",
        },
      },
      fontFamily: {
        sans: ["Lato", "font-serif", "sans-serif"],
        libre: ["var(--font-libre-baskerville)", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        "typing-fast": "typingFast 1s steps(40) 0s 1 normal both",
        "typing-slow": "typingSlow 3s steps(40) 0s 1 normal both",
        "slide-from-top": "slideFromTop 0.5s ease-out forwards",
        "underline-slide": "slide-underline 0.3s ease-out forwards",
      },
      keyframes: {
        slideFromTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-underline": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        typingFast: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        typingSlow: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
