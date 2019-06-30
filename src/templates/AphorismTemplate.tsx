import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const AphorismTemplate:React.SFC = (props: any) => {
    //const a = props.data.contentfulAphorism.imege.localFile.childImageSharp.sqip;
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
            localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 640, maxHeight: 640) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                  sqip(blur: 0, numberOfPrimitives: 100, mode: 1) {
                    dataURI
                  }
                }
            }
        }
    }
  }
`
