import React from "react"
import Nav from "./Nav"

export default ({children}: any) => {
    const layoutStyle = {display: 'grid', margin: '-8px', fontFamily: "sans-serif, serif"};

    return (
        <div style={layoutStyle}>
            <Nav/>
            {children}
        </div>
    );
}
