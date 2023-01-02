/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    prefix: "",
  },
  plugins: [
    require("daisyui"),
    require("@headlessui/tailwindcss"),
    { prefix: "ui" },
  ],
  darkMode: "class",
};
