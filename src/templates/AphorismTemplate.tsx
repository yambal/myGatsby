import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import LazyImg from "../components/LazyImg"

const AphorismTemplate:React.SFC = (props: any) => {
    return (
            <div>
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </div>
    )
}

export default AphorismTemplate

export const query = graphql`
  query AphorismPostBySlug($slug: String!) {
    site {
        siteMetadata {
          title
          author
        }
    }
    contentfulAphorism(slug: {eq: $slug}) {
        tag
        speaker
        aphorism {
          aphorism
        }
        imege{
            sizes {
                src
                sizes
            }
        }
    }
  }
`
