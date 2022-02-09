module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'footer-purple': '#07002F'
      },
      boxShadow: {
        rounded: '0 0 15px .5px rgba(0, 0, 0, 0.08)'
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
