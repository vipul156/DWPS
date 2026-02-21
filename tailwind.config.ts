import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#056a43",
        "primary-dark": "#044d31",
        "primary-light": "#067a4e",
        orange: "#ef7f1a",
        "orange-dark": "#d4700f",
        yellow: "#ffcc00",
        "body-bg": "#F6F6F1",
        "dark-text": "#262829",
        "dark-brown": "#312F2C",
        "gray-light": "#f5f5f5",
        "gray-mid": "#e8e8e8",
        "gray-dark": "#888888",
        "footer-bg": "#1a1a1a",
        "topbar-bg": "#056a43",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)", "Rubik", "sans-serif"],
        marcellus: ["var(--font-marcellus)", "Marcellus", "serif"],
      },
      fontSize: {
        "body": "15px",
        "nav": "14px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "zoom-in": "zoomIn 0.5s ease-out forwards",
        ticker: "ticker 30s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.15)",
        header: "0 2px 20px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
        "green-gradient": "linear-gradient(135deg, #056a43 0%, #067a4e 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
