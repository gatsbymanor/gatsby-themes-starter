let sitePlugins = [
  'gatsby-plugin-react-next',
  'gatsby-plugin-catch-links',
]


const shouldUseContentful = (plugin) => {
  return (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_DELIVERY_TOKEN)
}

const loadPlugins = () => {

  if (shouldUseContentful()) {
    const contentfulPlugin = {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
      },
    }

    sitePlugins.push(contentfulPlugin)
  }

  return sitePlugins
}

module.exports = {
  pathPrefix: process.env.CI ? `/identity` : `/`,
  siteMetadata: {
    author: 'You!',
    title: `Gatsby theme starter`,
  },
  plugins: loadPlugins(),
}
