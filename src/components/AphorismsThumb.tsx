import React from "react"
import { Link, graphql } from "gatsby"

interface iAphorismsThumb {
    slug: string
    tags: string[]
    spaeker: string
    aphorism: string
    className: any
} 

const AphorismsThumb:React.SFC<iAphorismsThumb> = props => {
    return <Link to={`/aphorism/${props.slug}`} className={props.className}>
        <div>{props.aphorism}</div>
        <div>{props.spaeker}</div>
    </Link>
}

export default AphorismsThumb