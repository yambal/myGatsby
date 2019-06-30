import React from "react"
import { Link, graphql } from "gatsby"

interface iAphorismsThumb {
    slug: string
    tags: string[]
    spaeker: string
    aphorism: string
} 

const AphorismsThumb:React.SFC<iAphorismsThumb> = props => {
    return <Link to={`/aphorism/${props.slug}`}>
        <div>{props.aphorism}</div>
        <div>{props.spaeker}</div>
    </Link>
}

export default AphorismsThumb