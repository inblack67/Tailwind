module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.33%',
        '2/3': '66.66%',
      }
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'], // order matters as active should beat hover
    // fontSize: ['responsive', 'hover'] // will change font size on hover
  },
  plugins: [],
}
