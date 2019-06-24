import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const aphorismNodes = props.data.allContentfulAphorism.nodes
  console.log(aphorismNodes)
  return(
    <Layout>
      <SEO title="Home" />
      {false && <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>}
      <Link to="/page-2/">Go to page 2</Link>
      {
        aphorismNodes.map((node) => {
          console.log(node)
          console.log(node.imege.resolutions.tracedSVG)
          console.log(node.imege.resolutions.srcWebp)
          return(
            <blockquote key={node.slug}>
              {node.aphorism.aphorism}
              <div>{node.speaker}</div>
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
    nodes {
      slug
      speaker
      aphorism {
        aphorism
      }
      createdAt
      imege {
        resolutions(width: 100, height: 100) {
          tracedSVG
          srcWebp
        }
      }
    }
  }
}
`
