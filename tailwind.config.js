module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'footer-purple': '#07002F',
        skin: '#FAEBD7',
        'light-purple': '#aa97d6'
      },
      boxShadow: {
        rounded: '0 0 15px .5px rgba(0, 0, 0, 0.08)'
      },
       backgroundImage: {
        poster: "url('https://uscdn.printerval.com/unsafe/0x840/storage.googleapis.com/printerval-us/2022/01/10/hpny-1444x420-usa-37c1e4d28910282da9d29e0491eba755.jpg')"
      },
    },
  },
  variants: {
    extend: {},
  },
   daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      // themes: [
      //   'light', // first one will be the default theme
      // ],
  },
  plugins: [
    require('daisyui'),
  ],
}
