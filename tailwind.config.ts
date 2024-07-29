import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Habilitar modo oscuro por clase
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)', // Dark Mode Elements
        'very-dark-blue-bg': 'hsl(207, 26%, 17%)', // Dark Mode Background
        'very-dark-blue-text': 'hsl(200, 15%, 8%)', // Light Mode Text
        'dark-gray': 'hsl(0, 0%, 35%)', // Light Mode Input
        'very-light-gray': 'hsl(0, 0%, 98%)', // Light Mode Background
        'white': 'hsl(0, 0%, 100%)', // Dark Mode Text & Light Mode Elements
      },   
    },
  },
};

export default config;
