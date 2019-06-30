import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const AphorismTemplate:React.SFC = (props: any) => {
    const aphorism = props.data.contentfulAphorism
    return (
      <React.Fragment>
        <div className="w-full-w h-full-w bg-black text-white">
          {aphorism.aphorism.aphorism}
        </div>
        <div className="container mx-20">
          <p>{JSON.stringify(aphorism, null, 2)}</p>
        </div>
        </React.Fragment>
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
