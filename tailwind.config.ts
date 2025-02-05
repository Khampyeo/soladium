import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1570EF",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",
        border: "var(--border)",
        "accent-background": "var(--accent-background)",
        "accent-text": "var(--accent-text)",
        "btn-background": "var(--btn-background)",
        "btn-text": "var(--accent-text)",
        "btn-border": "var(--btn-border)",
      },
    },
  },
  plugins: [],
};
export default config;
