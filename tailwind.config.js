/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': 'rgba(31, 192, 174, 0.19)'
      },
      dropShadow: {
        'special': '0px 1px 2px rgba(16, 24, 40, 0.05)',
        'state1': '0px 1px 2px rgba(16, 24, 40, 0.05)',
        'state2': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      boxShadow: {
        'state': [
          'rgba(0, 0, 0, 0.4) 0px 2px 4px', 
          'rgba(0, 0, 0, 0.3) 0px 7px 13px -3px',
          'rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
        ],
        'information': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
      }
    },
  },
  plugins: [],
}

