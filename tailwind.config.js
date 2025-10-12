/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0B0E14",
        accent: "#FACC15",
        bordergray: "#1E232B",
      },
    },
  },
  plugins: [],
}
