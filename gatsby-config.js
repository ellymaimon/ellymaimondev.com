module.exports = {
  siteMetadata: {
    title: 'Elly Maimon - Developer',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
