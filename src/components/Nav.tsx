import React from "react"
import {Link} from "gatsby"

const ListLink = (props: any) => {
    return (
        <li
            style={{
                display: `flex`,
                paddingRight: '20px'
            }}>
            <Link style={{textDecoration: 'none', color: 'whitesmoke'}}
                  to={props.to}>{props.children}</Link>
        </li>
    )
}

export default (props: any) => (
    <div style={{
        padding: '1.5rem',
        backgroundColor: '#07455f',
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '22px',
    }}>
        <div className="left-nav">
            <ul style={{listStyle: `none`, display: 'flex'}}>
                <ListLink to="/">Furthermore Scientific Services</ListLink>
            </ul>
        </div>
        <div className="right-nav">
            <ul style={{listStyle: `none`, display: 'flex', alignContent: 'flex-end'}}>
                <ListLink to="/#">About</ListLink>
                <ListLink to="/#">Services</ListLink>
                <ListLink to="/#">Contact</ListLink>
            </ul>
        </div>
    </div>
)
