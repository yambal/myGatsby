import React from "react"

interface IconNextProps {
    width?: string
}

const IconNext:React.SFC<IconNextProps> = props => {
    return(
        <svg width={props.width} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m4.8064 0.35059c-2.4858 0.81957-4.3557 2.9941-4.7355 5.6494h10.385l-5.6494-5.6494zm-4.7355 7.6494c0.3798 2.6553 2.2497 4.8298 4.7355 5.6494l5.6494-5.6494h-10.385zm7.2193 5.9941c3.6352-0.1482 6.5557-3.0687 6.7039-6.7039l-1.124 1.124-5.5799 5.5799zm6.7039-7.2843c-0.1482-3.6352-3.0687-6.5557-6.7039-6.7039l5.5799 5.5799 1.124 1.124z"
                clip-rule="evenodd"
                fill="#000"
                fill-rule="evenodd"
            />
        </svg>
    )
}

export default IconNext