import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Microsoft Intune-inspired dark theme colors
                primary: {
                    50: "#f0fdfa",
                    100: "#ccfbf1",
                    200: "#99f6e4",
                    300: "#5eead4",
                    400: "#2dd4bf",
                    500: "#14b8a6",
                    600: "#0d9488",
                    700: "#0f766e",
                    800: "#115e59",
                    900: "#134e4a",
                    950: "#042f2e",
                },
                accent: {
                    cyan: "#06b6d4",
                    teal: "#14b8a6",
                    blue: "#3b82f6",
                },
                dark: {
                    900: "#0a0a0f",
                    800: "#0f0f17",
                    700: "#14141f",
                    600: "#1a1a27",
                    500: "#22222f",
                    400: "#2a2a3a",
                    300: "#3a3a4a",
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "Segoe UI", "Arial", "sans-serif"],
                mono: ["var(--font-geist-mono)", "Consolas", "monospace"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
                "slide-down": "slideDown 0.3s ease-out",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                glow: "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideDown: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(20, 184, 166, 0.5)" },
                    "100%": { boxShadow: "0 0 20px rgba(20, 184, 166, 0.8)" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};

export default config;
