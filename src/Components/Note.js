import React from 'react'

const Notes = (message, id, deadline) => {
    return (
        <div className="Note">
            <h2>{id}</h2>
            <h4>{message}</h4>
            <h6>{deadline}</h6>
        </div>
    )
}

export default Notes
