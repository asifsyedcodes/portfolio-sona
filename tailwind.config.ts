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
        green : {
          100: '#f6fff8',
          200: '#84a98c',
          300:'#cad2c5',
          700: '#52796f',
          900: '#354f52',
        },
        white : {
          900: '#FFFFFF'
        },
        black: {
          900: '#000000',
        },
        gray: {
          600: '#D7D7D7'
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
