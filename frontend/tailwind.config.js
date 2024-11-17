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
          primary: "#8BC34A",
          secondary: "#FF7043",
          accent: "#FFEB3B",
          neutral: "#BDBDBD",
          "base-100": "#FFFFFF",
          info: "#29B6F6",
          success: "#66BB6A",
          warning: "#FFCA28",
          error: "#E53935",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
