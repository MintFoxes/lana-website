module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '800': '845px'
      },
    colors: {
      gray: '#F2F2F2',
      grayish: {
        100: '#212328',
        200: '#313338'
      },
      lana: '#AEE9E0'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
     extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'spin-slowly': 'spin 2.5s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
      },
      spacing: {
        '250': '250px'
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }