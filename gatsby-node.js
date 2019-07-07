const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/InstagramTemplate.tsx`)
  const AphorismTemplate = path.resolve(`./src/templates/AphorismTemplate.tsx`)

  return graphql(`{
    allInstaNode(limit: 10, filter: {mediaType: {eq: "GraphImage"}}, sort: {fields: timestamp, order: DESC}) {
      edges {
        node {
          caption
          id
          likes
          preview
          timestamp
          dimensions {
            height
            width
          }
        }
        next {
          id
        }
        previous {
          id
        }
      }
    }
    allContentfulAphorism(limit: 10) {
      edges {
        previous {
          slug
        }
        next {
          slug
        }
        node {
          slug
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      console.log(42, 'Error')
      return null
    }

    /** Inata */
    const inataEdges = result.data.allInstaNode.edges
    inataEdges.forEach((node, index) => {
      const { id, caption, timestamp, likes, preview, dimensions } = node.node
      console.log('inata', node.next)

      createPage({
        path: '/insta/' + id,
        component: blogPost,
        context: {
          id,
          caption,
          timestamp,
          likes,
          preview,
          width: dimensions.width,
          height: dimensions.height,
          next: node.next,
          previous: node.previous
        },
      })
    })

    /** Aphorism contentful */
    console.log('Aphorism contentful')
    const aphorismEdges = result.data.allContentfulAphorism.edges
    aphorismEdges.forEach((edge, index) => {

      const {
        node: { slug },
        next,
        previous
      } = edge

      let prevSlug, nextSlug
      if (previous) {
        prevSlug = previous.slug
      }
      if (next) {
        nextSlug = next.slug
      }

      console.log(index, slug)
      console.log('\tprev:', prevSlug)
      console.log('\tnext:', nextSlug)

      createPage({
        path: '/aphorism/' + slug,
        component: AphorismTemplate,
        context: {
          slug,
          prevSlug,
          nextSlug
        },
      })
    })

    return null
  })
}