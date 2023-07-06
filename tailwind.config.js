/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'gray-card': '#F3F3F3',
      'green': '#6AAA64',
      'white': '#ffffff',
      'yellow': '#CEB02C',
      'gray-400': '#939B9F',
      'gray-300': '#d4d4d4',
      'gray-700': '#44403c',
      'gray-500': 'rgba(147, 155, 159, 0.2)',
      'gray-200': 'rgba(218, 220, 224, 0.03)',
      'gray-key': '#D3D6DA',
      'gray-wrong': 'rgba(147, 155, 159, 1)',
      'dark-key': 'rgba(86, 95, 126, 1)',
      'regal-blue': '#243c5a'
    },
    fontFamily: {
      'roboto': ['Roboto','Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

