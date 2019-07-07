import React from "react"

interface IconPrevProps {
    width?: string
}

const IconPrev:React.SFC<IconPrevProps> = props => {
    return(
        <svg width={props.width} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m9.1876 13.649c2.4858-0.8195 4.3558-2.9941 4.7356-5.6494h-10.385l5.6494 5.6494zm4.7356-7.6494c-0.3798-2.6553-2.2497-4.8298-4.7355-5.6494l-5.6494 5.6494h10.385zm-7.2193-5.9941c-3.6352 0.14822-6.5557 3.0687-6.7039 6.7039l6.7039-6.7039zm-6.7039 7.2843c0.14823 3.6352 3.0687 6.5557 6.7039 6.7039l-6.7039-6.7039z"
                clip-rule="evenodd"
                fill="#000"
                fill-rule="evenodd"
            />
        </svg>
    )
}

export default IconPrev