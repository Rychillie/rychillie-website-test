module.exports = {
    siteMetadata: {
		title: 'Rychillie 🦄',
        description: `Brazilian Front-End Developer`,
        author: `@rychillie`,
		siteUrl: `https://rychillie.net`
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        //`gatsby-plugin-feed-mdx`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content/blog`,
            name: `blog`,
          },
        },
        {
          resolve: `gatsby-plugin-mdx`,
          options: {
            extensions: [".mdx", ".md"],
            gatsbyRemarkPlugins: [
              {
                resolve: `gatsby-remark-copy-linked-files`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#FF54AC`,
                display: `minimal-ui`,
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
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
    ],
}
