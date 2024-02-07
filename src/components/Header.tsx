import React from "react"
// @ts-ignore
import Background from "../img/minimalistic.jpg"
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
                fontVariant: `small-caps`,
                fontSize: `4rem`,
            }}
        >
            {props.headerText}
        </h1>
        <h4
            style={{
                textShadow: `2px grey`,
                fontSize: `1.5rem`,
            }}
        >
            {props.subText}
        </h4>
        <button style={{
            fontSize: '20px',
            borderRadius: `8px`,
            padding: '8px 10px',
            backgroundColor: '#f6268f',
            border: '1px solid',
            borderColor: '#f65c97',
            boxShadow: '#f65c97 2px 2px 2px'
        }}>
            <Link to='/#' style={{textDecoration: 'none', color: 'whitesmoke'}}> Explore Services
            </Link>
        </button>
    </div>
)
