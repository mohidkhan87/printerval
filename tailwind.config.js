module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // Overriding sans font family because sans is the default font family used by tailwind in its base css file
        roboto: ["Roboto", "sans-serif"],
        arial: 'Arial, Helvetica, sans-serif',
        // poppins: ''
      },
      colors: {
        primary: '#F2F2F6',
        'dark-purple': '#19134F',
        'footer-purple': '#07002F',
        'maroon': '#C52C29',
        skin: '#FAEBD7',
        orange: '#FF7300',
        'light-purple': '#aa97d6',
        'light-blue': '#9FD8EB',
        'light-pink': '#EB91A6',
        'lightest-brown': '#DABAA1',
        'lighter-gray': '#F5F5F5',
        'light-greenish': '#7FFFD4'
      },
      boxShadow: {
        rounded: '0 0 20px 1px rgba(0, 0, 0, 0.13)',
        'purple-outline': '0 0 1px 3px #6f5d99',
        'gray-outline': '0 0 1px 3px #D1D5DB',
        
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
