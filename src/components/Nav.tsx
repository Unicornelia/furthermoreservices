import React from "react"
import {Link} from "gatsby"

const ListLink = (props: any) => {
    return (
        <li style={{display: `flex`, paddingRight: '20px'}}>
            <Link style={{textDecoration: 'none', color: 'whitesmoke'}} to={props.to}>{props.children}</Link>
        </li>
    )
}

export default () => {
    const isPublicationsPage = (typeof window !== 'undefined') && window.location.pathname.includes('publications');

    const navStyle = {
        padding: '1rem',
        backgroundColor: '#07455f',
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.15rem',
    };

    return (
        <div style={navStyle}>
            <div className="left-nav">
                <ul style={{listStyle: `none`, display: 'flex'}}>
                    <ListLink to="/">Furthermore Scientific Services</ListLink>
                </ul>
            </div>
            <div className="right-nav">
                <ul style={{listStyle: `none`, display: 'flex', alignContent: 'flex-end'}}>
                    <ListLink to="/#about">About</ListLink>
                    <ListLink to="/#services">Services</ListLink>
                    {!isPublicationsPage && <ListLink to="/publications">Publications</ListLink>}
                    <ListLink to="/#contact">Contact</ListLink>
                </ul>
            </div>
        </div>
    )
}
