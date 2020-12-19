module.exports = {
  siteMetadata: {
    title: "bharat",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "cxt4fusl",
        dataset: "",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
