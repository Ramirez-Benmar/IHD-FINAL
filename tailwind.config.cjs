/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F1925',
        secondary: '#3F3F3F',
        accent: '#9333EA'
      },
      fontFamily: {
        heading: ['"Archivo Black"', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        navbar: ['"Tw Cen MT"', 'Century Gothic', 'sans-serif']
      },
      boxShadow: {
        glow: '0 10px 50px rgba(123, 5, 186, 0.2)'
      }
    }
  },
  plugins: []
};
