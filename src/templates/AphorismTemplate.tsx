import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import LazyImg from "../components/LazyImg";

const AphorismTemplate:React.SFC = (props: any) => {
    const aphorism = props.data.contentfulAphorism

    let speakerSrc = null
    let speakerThumb = null
    if (aphorism.imege && aphorism.imege.localFile) {
      speakerSrc = aphorism.imege.localFile.publicURL
      speakerThumb = aphorism.imege.localFile.childImageSharp.sqip.dataURI
    }
    
    return (
      <React.Fragment>
        <div className="relative">
          <div className="w-full-w h-full-w bg-black text-white">
            {aphorism.aphorism.aphorism}
          </div>
          <div className="w-25vw h-25vw rounded-circle overflow-hidden absolute -bottom-12vw left-25vwCenter">
            {speakerSrc && speakerThumb && <LazyImg
              src={speakerSrc}
              thumb={speakerThumb}
              width="100%"
              height="100%"
              fit="cover"
            />}
          </div>
        </div>
        {aphorism.speaker}
        {aphorism.tag}

        <div className="container mx-20">
          {props.pageContext.prevSlug ? <Link to={`/aphorism/${props.pageContext.prevSlug}`}>Prev</Link> : null}
          {props.pageContext.nextSlug ? <Link to={`/aphorism/${props.pageContext.nextSlug}`}>Next</Link> : null}
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
