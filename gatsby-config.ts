import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `lianarthofer.github.io`,
    siteUrl: `https://lianarthofer.github.io/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    { // this must be loaded first in order to work
      resolve: `gatsby-plugin-gtag`, // note this instead of gatsby-plugin-react-helmet
      options: {
        trackingId: "G-F804S3C6B9",
        head: true, // note this is TRUE and not FALSE as listed in other examples above
        anonymize: true
      }
    },
    "gatsby-plugin-react-helmet",
    // other plugins
  ]
};

export default config;
