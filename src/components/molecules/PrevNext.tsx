import React from "react"
import { Link, graphql } from "gatsby"
import IconNext from "../atoms/IconNext";
import IconPrev from "../atoms/IconPrev";

interface PrevNextProp {
    urlPrev?: string
    urlNext?: string
    iconSize?: string
}

const PrevNext:React.SFC<PrevNextProp> = props => {
    return(
        <div style={{ display : 'flex', width: '100%' }}>
            <div style={{ width: props.iconSize, flexShrink: 0 }}>
                {props.urlPrev
                    ? <Link to={props.urlPrev}>
                        <IconPrev width="100%" />
                    </Link>
                    : null
                }
            </div>
            <div style={{ width: '100%', flexGrow: 1 }}>
                {props.children}
            </div>
            <div style={{ width: props.iconSize, flexShrink: 0 }}>
                {props.urlNext
                    ? <Link to={props.urlNext}>
                        <IconNext width="100%" />
                    </Link>
                    : null
                }
            </div>
        </div>
    )
}

export default PrevNext