import React from 'react'
/* eslint-disable react/prop-types */

function Avatar({letter,bg,size}) {
    return (
    <div className="avatar placeholder">
    <div className={`${bg} text-neutral-content rounded-full w-${size} h-${size}`}>
        <span className="text-3xl">{letter}</span>
    </div>
    </div> 
    )
}

export default Avatar
