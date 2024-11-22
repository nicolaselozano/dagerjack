export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      delay: {
        transitionDelay: {
          0: "0ms",
          100: "100ms",
          200: "200ms",
          300: "300ms",
          400: "400ms",
        }
      },
      backgroundColor: {
        "display_menu": '#2B1A42',
        "cards_bg": "#52317D",
      },
      animation: {
        'scroll-left': 'scrollLeft 30s linear infinite',
        'scroll-right': 'scrollRight 30s linear infinite',
        typewrite: 'typewrite 4s steps(20) infinite, blink 1s step-end infinite',
        breathe: 'breathe 2s infinite ease-in-out',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        typewrite: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },  // El cursor parpadea en blanco
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
    },
  },
  plugins: [],
};
