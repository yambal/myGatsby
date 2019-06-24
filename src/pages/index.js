import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const aphorismEdges = props.data.allContentfulAphorism.edges
  console.log(aphorismEdges)
  return(
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      {
        aphorismEdges.map((edge) => {
          console.log(edge.node)
          return(
            <blockquote key={edge.node.id}>
              {edge.node.aphorism.aphorism}
              <div>{edge.node.speaker}</div>
            </blockquote>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulAphorism {
    edges {
      node {
        slug
        id
        speaker
        aphorism {
          aphorism
        }
      }
    }
  }
}
`
