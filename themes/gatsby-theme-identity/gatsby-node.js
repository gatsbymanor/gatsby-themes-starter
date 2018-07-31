const path = require(`path`);
const gtk = require('gatsby-themes-kit')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  try {
    const config = await gtk.loadJson(path.resolve('./theme.json'))
    const { mappings, query } = config

    const data = await gtk.fetch(graphql, config.query)

    const browserData = {
      displayName: gtk.getTemplateValueByKey('displayName', mappings, data),
      copyright: gtk.getTemplateValueByKey('copyright', mappings, data),
      headline: gtk.getTemplateValueByKey('headline', mappings, data),
      socialIcons: gtk.getTemplateValueByKey('socialIcons', mappings, data),
      displayPhoto: gtk.getTemplateValueByKey('displayPhoto', mappings, data),
      backgroundImage: gtk.getTemplateValueByKey('backgroundImage', mappings, data),
    }

    createPage({
      path: "/",
      component: path.resolve(`./src/templates/index.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        // i.e. -> pathContext: {}
        data: browserData,
      },
    })
  } catch (e) {
    console.log('There are some missing entries in gatsby-themes.yaml')
    throw e
  }


}
