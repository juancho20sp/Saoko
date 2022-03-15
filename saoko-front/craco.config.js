module.exports = {
    style: {
      sass: {
        loaderOptions: {
          additionalData: `
            @import "src/assets/styles/_colors.scss";
          `,
        },
      },
    },
  };