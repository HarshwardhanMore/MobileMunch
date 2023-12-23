/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-lite-color": "var(--primary-lite-color)",
        "secondary-color": "var(--secondary-color)",
        "bg-color": "var(--bg-color)",
        "bg-lite-color": "var(--bg-lite-color)",
        "text-color": "var(--text-color)",
        "text-lite-color": "var(--text-lite-color)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        'sm': {'min': '340px', 'max': '799px'},
        // 'sm': {'max': '340px', 'max': '639px'},
  
        'md': {'min': '800px', 'max': '1023px'},
        // 'md': {'min': '640px', 'max': '1023px'},
  
        'lg': {'min': '1024px'},
        // 'lg': {'min': '1024px', 'max': '1279px'},
  
        // 'xl': {'min': '1280px', 'max': '1535px'},
  
        // '2xl': {'min': '1536px'},
      },
      fontFamily: {
        "Oxygen": ['Oxygen', "sans-serif"]
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}