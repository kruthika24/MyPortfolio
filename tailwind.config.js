/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    mode: "jit",
    theme: {
  extend: {
  keyframes: {
    scroll: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
  },
  animation: {
    scroll: 'scroll 20s linear infinite',
  },
  colors: {
    primary: "#0A0E0F",
    teal: "#13B7A5",
    midnightTeal: "#083d3c",
    softGlass: "rgba(255, 255, 255, 0.05)",
    neonBorder: "#13B7A5"
  },
  boxShadow: {
    glow: "0 0 20px rgba(19, 183, 165, 0.7)",
  },
  screens: {
    xs: "450px",
  },
  backgroundImage: {
    'glass-gradient': "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
  },
  backdropBlur: {
    glass: '8px',
  },
}
  },
  plugins: [],
};


