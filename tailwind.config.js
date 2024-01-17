/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'360px',
        md:'768px',
        lg:'1024px',
        xl:'1920px'
      },
      colors: {
        'header-bg': '#3D3D3D',
        'main-nav-color': '#F5CC82',
        'base-text-color': '#282828',
        'base-gray-color': '#353535',
        'secondary-bg': '#FDF1DC',
        'main-area-bg': '#fffdfa',
        'item-border': '#e1dcd0',
        'account-balance-color': '#F5CC82',
        'bank-account-bg': '#fffdfa',
        'add-card-border': '#e4e0d4',
        'add-card-bg': '#f8f6f1',
        'transactions-color': '#DB9E2F',
        'card-text-color': '#BE8317',

      },
      keyframes: {
        show: {
          from: { opacity: 0, visibility: 'hidden' },
          to: { opacity: 1, visibility: 'visible'},
        },
        hide: {
          from: { opacity: 1, visibility: 'visible' },
          to: { opacity: 0, visibility: 'hidden' },
        }
      },
      
      animation: {
        'element-show': 'show 0.2s linear forwards',
        'element-hide': 'hide 0.2s linear forwards',
      },
    },
  },
  plugins: [],
}

