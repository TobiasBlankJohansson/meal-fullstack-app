/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4CAF50",
          secondary: "#F97316",
          accent: "#8BC34A",
          neutral: "#BDBDBD",
          "base-100": "#FFFFFF",
          info: "#0096c9",
          success: "#66BB6A",
          warning: "#FFCA28",
          error: "#E53935",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
