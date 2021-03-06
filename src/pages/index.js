import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = (props) => {

  console.log('index >> ', props.data.allInstaNode.edges)
  return(
    <Layout>
      <SEO/>
      <main className="container mx-20">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>

        <Link to="/page-2/">Go to page 2</Link>

        {
          props.data.allInstaNode.edges.map((node, index) => {
            console.log('index', node.node.id)
            return (<Link to={`/insta/${node.node.id}`} key={index}>{index} </Link>)
          })
        }
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
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
}
`