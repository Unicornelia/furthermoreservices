import React from "react"
// @ts-ignore
import Background from "../images/officesupplies.jpg"
import {Link} from "gatsby";

export default (props: any) => (
    <div
        style={{
            padding: props.headerPadding,
            textAlign: `center`,
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            color: 'whitesmoke'
        }}
    >
        <h1
            style={{
                textShadow: `2px grey`,
                fontVariant: 'petite-caps',
                fontSize: `3.5rem`,
            }}
        >
            {props.headerText}
        </h1>

        <h4
            style={{
                textShadow: `2px grey`,
                fontSize: `1.75rem`,
                fontWeight: 'lighter'
            }}>
            {props.subText}
        </h4>

        <button style={{
            fontSize: '1.15rem',
            borderRadius: `1.15rem`,
            padding: '0.5rem 0.75rem',
            backgroundColor: 'palevioletred',
            border: '2px outset',
            fontWeight: 'lighter',
            color: 'whitesmoke'
        }}>
            <Link to='/#services' style={{textDecoration: 'none', color: 'whitesmoke'}}>
                Explore Services
            </Link>
        </button>
    </div>
)
