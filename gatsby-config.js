module.exports = {
  siteMetadata: {
    title: "STEMbase",
    author: "Hunter Chang",
    description: "STEMbase.org is a digital platform -- created by STEM trainees for trainees at all career stages -- that aims to share STEM opportunities and resources (i.e. internships, fellowships, outreach platforms) to increase accessibility to information and opportunities in STEM."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
  // pathPrefix: "/reponame",
}

