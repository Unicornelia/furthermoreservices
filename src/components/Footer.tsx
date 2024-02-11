import React, {CSSProperties} from "react";
import {StaticImage} from "gatsby-plugin-image";
import {OutboundLink} from "gatsby-plugin-google-gtag";

export default ({style}: { style: CSSProperties }) => {
    return (
        <div
            id='contact'
            style={style}>
            <span>Contact: </span>
            <span>
            <OutboundLink href='https://www.linkedin.com/in/anna-altbacker-02897059/'
                          style={{textDecoration: 'none'}} target='_blank' title='Open LinkedIn'>
                <StaticImage src='../images/linkedin.png' alt='linkedin' width={30}/>
            </OutboundLink>
        </span>
            <span>
            <OutboundLink href='mailto:' style={{textDecoration: 'none'}} target='_blank' title='Send Email'>
                <StaticImage src='../images/email.svg' alt='email' width={30}/>
            </OutboundLink>
        </span>
        </div>
    );
}
