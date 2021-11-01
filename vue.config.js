module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          additionalData: `@import "@/assets/scss/variables.scss"`,
        },
      },
    },
  },
};
