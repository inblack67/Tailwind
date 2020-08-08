module.exports = {
  purge: [],
  theme: {
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
