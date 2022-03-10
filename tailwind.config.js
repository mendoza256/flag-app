module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlueEl: "hsl(209, 23%, 22%)", //Dark Mode Elements
        veryDarkBlueBg: "hsl(207, 26%, 17%)", //Dark Mode Background
        veryDarkBlueText: "hsl(200, 15%, 8%)", // Light Mode Text
        darkGreyInp: "hsl(0, 0%, 52%)", //Light Mode Input
        veryLightGreyBg: "hsl(0, 0%, 98%)", //Light Mode Background
        whiteTextEl: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
