import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import LazyImg from "../components/LazyImg"
import SEO from "../components/seo"

const InstagramTemplate:React.SFC = (props: any) => {
  console.log('InstagramTemplate', props)
  const {id, username, timestamp, caption, likes, localFile} = props.data.instaNode
  console.log(props.pageContext.next)
  console.log(props.pageContext.previous)
  return (
    <Layout>
      <SEO title="" />
      <LazyImg
        thumb={localFile.childImageSharp.sqip.dataURI}
        src={localFile.publicURL}
        height="100vh"
        width="100%"
        fit="cover"
      />
      <div className="container px-20">
        <dl>
          <dt>{id}</dt>
          <dd>{username}</dd>
          <dd>{timestamp}</dd>
          <dd>{caption}</dd>
          <dd>{likes}</dd>
        </dl>
        {props.pageContext.next ? <Link to={`/insta/${props.pageContext.next.id}`}>next</Link> : null}
        {props.pageContext.previous ? <Link to={`/insta/${props.pageContext.previous.id}`}>prev</Link> : null}
      </div>
    </Layout>
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