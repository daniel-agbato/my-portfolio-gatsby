module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "270px",
        base: "375px",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      colors: {
        var: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          accent: "var(--color-accent)",
          "off-white": "var(--color-bg-base)",
          "very-dark-blue": "var(--color-bg-dark-mode)",
        },
      },
      dropShadow: {
        element: "0px 4px 6px rgba(0, 0, 0, 0.15)",
      },
      boxShadow: {
        element: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
