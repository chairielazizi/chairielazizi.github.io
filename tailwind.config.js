module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
        accent1: "#38fec3",
      },
      backgroundImage: {
        // site: "url('./assets/site-bg.jpg')",
        site: "url('./assets/turqoise2.jpg')",
        about: "url('./assets/about.png')",
        about1: "url('./assets/riel1.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
