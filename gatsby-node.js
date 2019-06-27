const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/InstagramTemplate.tsx`)

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
      }
    }
  }`).then(result => {
    if (result.errors) {
      console.log(42, 'Error')
      throw result.errors
    }
    const edges = result.data.allInstaNode.edges
    edges.forEach((node, index) => {
      const { id, caption, timestamp, likes, preview, dimensions } = node.node
      console.log(index, id, caption, timestamp, likes, dimensions.width)

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
          height: dimensions.height
        },
      })

    })
    return null
  })
}
  /*
  return graphql(
    `{
      allInstaNode(limit: 1) {
        edges {
          node {
            caption
            localFile {
              childImageSharp {
                fixed(toFormat: JPG, base64Width: 400) {
                  height
                  srcWebp
                  originalName
                  width
                  src
                }
                sqip(blur: 0, numberOfPrimitives: 60, mode: 1, width: 400, height: 400) {
                  dataURI
                }
              }
              publicURL
            }
            id
            timestamp
            original
          }
        }
      }
    }`
  ).then(result => {
    if (result.errors) {
      console.log(42, 'Error')
      throw result.errors
    }

    const edges = result.data.allInstaNode.edges

    edges.forEach((post, index) => {
      console.log('id', `${post.node.id} - - - - - - - -`)
      console.log('timestamp', post.node.timestamp)
      console.log('original', post.node.original)
      console.log('caption', post.node.caption)
      console.log('local publicURL', post.node.localFile.publicURL)
      console.log('local src', post.node.localFile.childImageSharp.fixed.src)
      console.log('local srcWebp', post.node.localFile.childImageSharp.fixed.srcWebp)
      console.log('local width', post.node.localFile.childImageSharp.fixed.width)
      console.log('local height', post.node.localFile.childImageSharp.fixed.height)
      console.log('local publicURL', post.node.localFile.publicURL)
      console.log(post.node.localFile.childImageSharp.sqip.dataURI)

      const slug = post.node.id
      const lowResolution = post.node.localFile.childImageSharp.sqip.dataURI

      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug: slug,
          lowResolution
        },
      })
    })
    
    
    return null
  })
}
*/