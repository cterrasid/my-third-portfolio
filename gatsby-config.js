require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        Components: path.join(__dirname, "src", "components"),
        Containers: path.join(__dirname, "src", "containers"),
        Icons: path.join(__dirname, "src", "icons")
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID_ES,
            tableName: `Header`,
            separateNodeType: false,
            separateMapType: false
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_ES,
            tableName: `Social Networks`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/containers/Layout`)
      }
    }
  ]
};
