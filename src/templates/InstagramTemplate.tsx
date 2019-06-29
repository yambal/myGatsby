import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import LazyImg from "../components/LazyImg"

const InstagramTemplate:React.SFC = (props: any) => {
    console.log('InstagramTemplate', props.data.instaNode)
    const {id, username, timestamp, caption, likes, localFile} = props.data.instaNode

    return (
            <div>
              <LazyImg
                thumb={localFile.childImageSharp.sqip.dataURI}
                src={localFile.publicURL}
              />
              <dl>
                <dt>{id}</dt>
                <dd>{username}</dd>
                <dd>{timestamp}</dd>
                <dd>{caption}</dd>
                <dd>{likes}</dd>
              </dl>
            </div>
    )
}

export default InstagramTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    instaNode(id: {eq: $id}) {
      id
      username
      timestamp
      caption
      likes
      localFile {
        publicURL
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
          sqip(blur: 0, numberOfPrimitives: 200, mode: 1) {
            dataURI
          }
        }
      }
    }
  }
`