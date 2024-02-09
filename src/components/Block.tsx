import React from "react";

export default ({title, content}: { title: string, content: string }) => {
    return (
        <div style={{display: 'grid'}}>
            <h3 style={{
                textShadow: `2px grey`,
                paddingBottom: '20px',
                fontWeight: 'lighter'
            }}>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
