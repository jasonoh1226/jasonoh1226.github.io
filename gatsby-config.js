module.exports = {
  siteMetadata: {
    title: `Jason Oh`,
    description: `Share knowledges and ideas`,
    author: `Jason Oh`,
    bio: `Full Stack Developer`,
    github: `https://github.com/jasonoh1226`,
    linkedin: `https://www.linkedin.com/in/jason-junyoung-oh-6183b429/`,
    siteUrl: `https://jasonoh1226.github.io/`,
<<<<<<< HEAD
=======
    email: `mailto:jasonoh1226@gmail.com`
>>>>>>> “message”
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
<<<<<<< HEAD
=======
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
>>>>>>> “message”
   

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-smoothscroll`,
    // `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [{
    //       resolve: "gatsby-remark-external-links",
    //       options: {
    //         target: "_blank",
    //         rel: "noopener noreferrer"
    //       }
    //     }]
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
