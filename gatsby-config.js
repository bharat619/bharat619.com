module.exports = {
  siteMetadata: {
    title: "bharat",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-sanity",
    //   options: {
    //     projectId: "cxt4fusl",
    //     dataset: "production",
    //   },
    // },
    "gatsby-plugin-styled-components",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/image`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
