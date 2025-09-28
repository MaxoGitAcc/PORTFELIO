/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      screens: {
        'xs': '480px',   // extra small devices (mobile)
        'sm': '640px',   // small devices
        'md': '768px',   // medium devices (tablet)
        'lg': '1024px',  // large devices (laptop)
        'xl': '1280px',  // extra large devices
        '2xl': '1536px', // 2x extra large devices
        '3xl': '1920px', // very large screens
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;
