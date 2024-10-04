/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		textShadow: {
  			lg: '0 4px 8px rgba(0, 0, 0, 0.3)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require("tailwindcss-animate"),
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.border-gradient': {
    //       borderWidth: '4px',
    //       borderStyle: 'solid',
    //       borderImage: 'linear-gradient(90deg, #4ade80, #6366f1) 1',
    //     },
    //   }
    //   addUtilities(newUtilities)
    // }
  ],
};
