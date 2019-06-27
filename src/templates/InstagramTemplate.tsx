import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const InstagramTemplate:React.SFC = (props: any) => {
    console.log('InstagramTemplate', props.data.instaNode)
    const {id, username, timestamp, caption, likes, localFile} = props.data.instaNode

    return (
            <div>
              <dl>
                <dt>{id}</dt>
                <dd>{username}</dd>
                <dd>{timestamp}</dd>
                <dd>{caption}</dd>
                <dd>{likes}</dd>
              </dl>
              <pre>{JSON.stringify(localFile.publicURL)}</pre>
              <img src={localFile.publicURL} alt="" width="50%"/>
              <img src={localFile.childImageSharp.sqip.dataURI} alt="" width="50%"/>
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