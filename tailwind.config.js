module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    colors: {
      gray: "#F2F2F2",
      grayish: {
        100: "#212328",
        200: "#313338"
      },
      lana: "#AEE9E0"
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
     extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'spin-slowly': 'spin 2.5s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }