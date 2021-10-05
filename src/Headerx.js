import React from 'react'
import { Avatar } from '@material-ui/core';
import "./Headerx.css"

function Headerx({title,src,Icon}) {
    return (
        <div className = "headerx">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>

            
        </div>
    )
}

export default Headerx
