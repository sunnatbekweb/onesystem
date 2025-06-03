import React from "react"
export default function RightChevron({ fill }) {
    return (
        <svg
            className="cursor-pointer"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 0.0537109L32 16.0537L16 32.0537L11.7613 27.815L20.5253 19.0509H0V13.0565H20.5253L11.7613 4.29244L16 0.0537109Z"
                fill={fill}
            />
        </svg>
    )
}