module.exports = {
  siteMetadata: {
    title: 'Rychillie 🦄',
    description: `Brazilian Front-End Developer`,
    author: `@rychillie`,
    siteUrl: `https://rychillie.net`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pt-br'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/static/images`,
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/content/portfolio/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-lazy-load`,
    `gatsby-remark-external-links`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    //`gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve:
            `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rychillie 🦄`,
        description: 'Brazilian Front-End Developer',
        short_name: `Rychillie 🦄`,
        start_url: `/`,
        background_color: `#FF5757`,
        theme_color: `#1A1A1A`,
        display: `standalone`,
        icon: `${__dirname}/static/images/histaff.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-45575876-4",
      },
    },
    `gatsby-plugin-sass`,
  ],
}
