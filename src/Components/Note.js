import React from 'react'

const Notes = ({ message, id, deleteNote, dateTime }) => {
    return (
        < div className="Note" >
            <h2 >{id}</h2>
            <h4>{message}</h4>
            <hr style={{ margin: "10%" }} />
            <h6>{dateTime}</h6>
            <div>
                <button className="pi-button" onClick={() => deleteNote(id)}>Delete</button>
            </div>
        </div >
    )
}

export default Notes
