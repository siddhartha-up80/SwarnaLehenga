/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // if you are using the animate variant of the modal
        modal: "modal 0.5s",

        // if you are using drawer variant right
        "drawer-right": "drawer-right 0.3s",

        // if you are using drawer variant left
        "drawer-left": "drawer-left 0.3s",

        // if you are using drawer variant top
        "drawer-top": "drawer-top 0.3s",

        // if you are using drawer variant bottom
        "drawer-bottom": "drawer-bottom 0.3s",
      },
      keyframes: {
        // if you are using the animate variant of the modal
        modal: {
          "0%, 100%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        // if you are using drawer variant right
        "drawer-right": {
          "0%, 100%": { right: "-500px" },
          "100%": { right: "0" },
        },

        // if you are using drawer variant left
        "drawer-left": {
          "0%, 100%": { left: "-500px" },
          "100%": { left: "0" },
        },

        // if you are using drawer variant top
        "drawer-top": {
          "0%, 100%": { top: "-500px" },
          "100%": { top: "0" },
        },

        // if you are using drawer variant bottom
        "drawer-bottom": {
          "0%, 100%": { bottom: "-500px" },
          "100%": { bottom: "0" },
        },
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  // darkMode: false,
  // darkMode: "class",

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
