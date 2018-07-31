import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Getting started</h1>
    <p>Welcome to your base Starter to support Gatsby themes.</p>
    <p>Create <code>gatsby-themes.yaml</code> file at the project root.</p>
    <p>Add your theme configurations. You'll spend most of your time editing yaml.</p>
    <p>Use <code>yarn run gatsby develop --enabled-themes</code> to develop multiple themes at once.</p>
    <p>Use <code>yarn run gatsby build --enabled-themes</code> to build multiple themes at once.</p>
    <p>Use <code>yarn run gatsby build --copy-theme `THEME_NAME`</code> to copy and set that theme as the default view to this starter.</p>
    <p>Use <code>yarn run gatsby serve</code> to view your theme.</p>

    <h1>Install a theme</h1>
    <p>Use <code>gatsby new themes/gatsby-theme-identity gatsbymanor/gatsby-theme-identity</code> to install one of our themes in a folder.</p>
  </div>
)

export default IndexPage
