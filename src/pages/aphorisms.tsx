import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AphorismsThumb from '../components/AphorismsThumb'

const AphorismsIndex = (props) => {
    const { nodes } = props.data.allContentfulAphorism
  return(
    <div>
        {nodes.map((node, index) => {

            return (<AphorismsThumb
                slug={node.slug}
                tags={node.tag}
                spaeker={node.speaker}
                aphorism={node.aphorism.aphorism}
            />)
        })}
    </div>
  )
}

export default AphorismsIndex

export const pageQuery = graphql`
query AphorismsIndexQuery {
    allContentfulAphorism(sort: {fields: createdAt}) {
      nodes {
        slug
        imege {
          id
        }
        tag
        speaker
        aphorism {
          aphorism
        }
      }
    }
  }
`