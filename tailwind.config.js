const plugin = require('tailwindcss/plugin')

const MyStyles = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#5582F8",
        "theme-yellow": "#FFF3C0",
        "theme-grey": "#EFEEED",
      },
    },
    fontFamily: {
      title: ["Amatic SC"],
      text: ["Inter"],
    },
  },
  plugins: [MyStyles],
};
