/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "alt-blue": "#1769FF",
        "alt-slate": "#1F2A37",
        "alt-light": "#F4F6F8",
        neutral: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#E6E8E8",
          400: "#C3C7C7",
          500: "#9EA3A3",
          600: "#595E5E",
          700: "#171919",
          800: "#131717",
          900: "#030303",
        }
      },
    },
  },
  plugins: [],
}
